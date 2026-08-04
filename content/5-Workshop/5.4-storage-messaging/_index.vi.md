---
title: "Database, Storage & Secrets"
date: 2024-01-01
weight: 4
chapter: false
pre: " <b> 5.4. </b> "
---


Ở bài này, chúng ta sẽ xây dựng tầng lưu trữ. Vì hệ thống hướng tới môi trường Production, ta sẽ loại bỏ các DB thông thường và file cấu hình thô sơ để thay thế bằng SQL Server và AWS Systems Manager Parameter Store.

## 1. Cơ sở dữ liệu Cốt lõi (Amazon RDS for SQL Server Multi-AZ)

Snaptics yêu cầu một DB không bao giờ được phép sập (High Availability). SQL Server tự động sao chép dữ liệu của bạn ra nhiều Availability Zones khác nhau.

### A. Khởi tạo DB Subnet Group
- Vào **Amazon RDS ➔ Subnet groups ➔ Create DB subnet group**.
- **Name:** `snaptics-db-subnet-group`.
- **VPC:** Chọn `snaptics-vpc`.
- **Subnets:** Ở mục này phải chọn cẩn thận! Chọn 2 Availability Zones và chỉ tick vào **2 mạng Private Subnets** (`10.0.3.0/24` và `10.0.4.0/24`).

### B. Khởi tạo Cụm SQL Server Cluster
- Vào **RDS ➔ Databases ➔ Create database**.
- **Engine options:** Bắt buộc chọn **Amazon RDS for SQL Server**.
- **Edition:** Chọn MySQL hoặc PostgreSQL (Tùy thuộc vào thư viện EF Core bạn gắn trong code C#).
- **Templates:** Production.
- **Settings:**
  - DB cluster identifier: `snaptics-sql-server`
  - Master username: `admin`
  - Master password: Gõ một mật khẩu thật mạnh (Ví dụ `SnapticsAurora2024!`).
- **Instance configuration:** Chọn cấu hình máy chủ ảo, ví dụ `db.t3.medium`.
- **Availability & Durability:** Chọn **Create an SQL Server Replica/Reader node in a different AZ** (Đây chính là tính năng Multi-AZ thần thánh).
- **Connectivity:**
  - VPC: Chọn `snaptics-vpc`
  - DB subnet group: `snaptics-db-subnet-group`
  - **Public access: No** (Rất quan trọng, để No để hacker không thể quét ra cổng DB của bạn).
  - VPC security group: Chọn `snaptics-db-sg`.
- Bấm **Create database**. Cụm SQL Server sẽ mất khoảng 15 phút để tạo. Sau khi xong, copy lấy chuỗi **Writer Endpoint**.

## 2. Kho lưu trữ Hóa đơn (Amazon S3)

Vì ở bài trước chúng ta đã tạo **VPC Gateway Endpoint**, Code C# chạy trong ECS giờ đây sẽ đẩy thẳng file ảnh hóa đơn vào S3 xuyên qua mạng nội bộ, tốc độ cực cao và hoàn toàn miễn phí băng thông.

- Vào **Amazon S3 ➔ Create bucket**.
- **Bucket name:** `s3-bucket-snaptics` (Phải gõ thêm số linh tinh vì tên S3 là duy nhất toàn cầu).
- **Region:** `ap-southeast-1`.
- **Block Public Access:** Giữ trạng thái **ON** để bảo mật tuyệt đối ảnh hóa đơn tài chính của người dùng.
- **Cấu hình CORS (Tab Permissions):** Cho phép Frontend trên AWS Amplify gọi trực tiếp vào S3 thông qua URL ký sẵn (Pre-signed URL).
```json
[
    {
        "AllowedMethods": [ "GET", "PUT", "POST" ],
        "AllowedOrigins": [ "*" ],
        "AllowedHeaders": [ "*" ]
    }
]
```

## 3. Két sắt Bí mật (AWS Systems Manager Parameter Store)

TUYỆT ĐỐI KHÔNG lưu mật khẩu SQL Server hay API Key của AI vào file `appsettings.json` và đẩy lên GitHub! Thay vì dùng SSM Parameter Store cơ bản, hệ thống Enterprise ưa chuộng **AWS Systems Manager Parameter Store** vì nó có tính năng tự động đổi mật khẩu (Auto-rotation).

- Vào **AWS Systems Manager Parameter Store ➔ Store a new secret**.
- **Secret type:** Chọn **Other type of secret**.
- **Key/value pairs:** Tạo lần lượt các key sau và điền value tương ứng:
  - `DbConnectionString`: `Server=<AURORA_ENDPOINT>,3306;Database=SnapticsDB;Uid=admin;Pwd=SnapticsAurora2024!;`
  - `JwtKey`: `Gõ_Một_Chuỗi_Thật_Dài_Để_Làm_Chìa_Khóa_Ký_Token_Đăng_Nhập`
  - `GeminiApiKey`: `Dán_Key_Google_AI_Của_Bạn`
  - `AzureDocIntelKey`: `Dán_Key_Azure_OCR`
  - `AzureDocIntelEndpoint`: `Dán_Đường_Dẫn_Azure`
- **Secret name:** Đặt tên là `/snaptics/prod/db-connection`.
- Bấm **Next** và **Store**.

Ở trong code `.NET`, bạn chỉ cần xài SDK để gọi tên `/snaptics/prod/db-connection`, AWS sẽ trả về toàn bộ cụm JSON chứa mật khẩu, giữ cho mã nguồn của bạn hoàn toàn sạch sẽ và an toàn.
