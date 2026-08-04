---
title: "Database, Storage & Secrets"
date: 2024-01-01
weight: 4
chapter: false
pre: " <b> 5.4. </b> "
---

# Database, Storage & Secrets

Ở phân hệ này, chúng ta sẽ thiết lập lớp Lưu trữ dữ liệu có cấu trúc, phi cấu trúc và bảo mật các khóa bí mật.

## 1. Amazon RDS SQL Server
Dự án Snaptics sử dụng C# với Entity Framework Core nên sẽ dùng SQL Server.
- **DB Subnet Group:** Tạo `snaptics-db-subnet-group` và nhóm 2 mạng **Private Subnets** vào.
- **Tạo Database:** 
  - **Engine:** Microsoft SQL Server (Chọn Express Edition nếu muốn xài Free Tier).
  - **Identifier:** `snaptics-db`
  - **Tài khoản:** `admin` / `Snaptics@StrongPass123!`
  - **Mạng:** VPC `snaptics-vpc`, Subnet `snaptics-db-subnet-group`. **Public access: No** (Bắt buộc).
  - **Security group:** `snaptics-rds-sg`.
Chờ 15 phút cho trạng thái chuyển sang **Available** và copy chuỗi **Endpoint**.

## 2. Amazon S3 cho Upload
Hóa đơn ảnh tải lên không lưu vào DB mà đẩy lên S3.
- **Tạo Bucket:** `s3-bucket-snaptics-123` tại `ap-southeast-1`.
- **Bảo mật:** Bật Block Public Access để bảo mật tuyệt đối file hóa đơn.
- **Cấu hình CORS (Tab Permissions):** Để frontend gọi thẳng S3 bằng Pre-signed URL.
```json
[
    {
        "AllowedMethods": [ "GET", "PUT", "POST" ],
        "AllowedOrigins": [ "*" ],
        "AllowedHeaders": [ "*" ]
    }
]
```

## 3. Quản lý Secret (SSM Parameter Store)
Thay vì đẩy file config chứa pass lên Git, ta mã hóa chúng trên AWS. Khởi tạo các tham số `SecureString` sau:
1. **Chuỗi kết nối SQL Server:** `/Snaptics/Production/ConnectionStrings:DefaultConnection` ➔ `Server=<ENDPOINT>,1433;Database=SnapticsDB;User Id=admin;Password=Snaptics@StrongPass123!;TrustServerCertificate=True;`
2. **JWT Secret Key:** `/Snaptics/Production/TokenKey`
3. **Google Gemini API:** `/Snaptics/Production/AiSettings:GeminiApiKey`
4. **Azure Document Intelligence:** `/Snaptics/Production/AiSettings:AzureDocIntelKey`

Trong code .NET (`Program.cs`), các cấu hình này được lấy tự động vào hệ thống:
```csharp
builder.Configuration.AddSystemsManager(configureSource => {
    configureSource.Path = "/Snaptics/Production/";
    configureSource.ReloadAfter = TimeSpan.FromMinutes(5);
});
```
