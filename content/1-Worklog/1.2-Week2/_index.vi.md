---
title: "Worklog Tuần 2"
date: 2024-01-01
weight: 2
chapter: false
pre: " <b> 1.2. </b> "
---

### Mục tiêu tuần 2:

- Nắm vững kiến thức nền tảng về Amazon Virtual Private Cloud (VPC) và các cơ chế bảo mật mạng.
- Tự tay thực hành xây dựng một môi trường mạng VPC hoàn chỉnh, cách ly an toàn.
- Bắt tay khởi tạo dự án thực tế **Snaptic**: Setup môi trường Backend .NET Core Web API và cấu hình Entity Framework Core.

### Các công việc cần triển khai trong tuần này:

| Thứ | Công việc                                                                                                                                                                                                      | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu                                                           |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | --------------- | ------------------------------------------------------------------------ |
| 2   | - **Học lý thuyết Amazon VPC:** <br>&emsp; + Các khái niệm: Subnets, Route Table <br>&emsp; + Internet Gateway (IGW) & NAT Gateway <br>&emsp; + CIDR block và phân bổ IP                                       | 25/05/2026   | 25/05/2026      | <a href="https://000003.awsstudygroup.com/">000003.awsstudygroup.com</a> |
| 3   | -- **Tìm hiểu Bảo mật trong VPC:** <br>&emsp; + Security Groups (Tường lửa cấp Instance) <br>&emsp; + Network ACLs (Tường lửa cấp Subnet) <br>&emsp; + VPC Resource Map                                        | 26/05/2026   | 26/05/2026      |                                                                          |
| 4   | - **Thực hành AWS VPC:** <br>&emsp; + Tạo Custom VPC, Public/Private Subnets <br>&emsp; + Gắn IGW và cấu hình Route Table <br>&emsp; + Cấu hình Security Group cho phép SSH                                    | 27/05/2026   | 27/05/2026      |                                                                          |
| 5   | - **Dự án Snaptic - Khởi tạo Backend:** <br>&emsp; + Tạo solution .NET Core Web API <br>&emsp; + Cài đặt Entity Framework Core (EF Core) <br>&emsp; + Cấu hình chuỗi kết nối Database ban đầu                  | 28/05/2026   | 28/05/2026      |                                                                          |
| 6   | - **Dự án Snaptic - Thiết kế Database:** <br>&emsp; + Code các Models: User, Budget, Transaction <br>&emsp; + Xử lý quan hệ (Relationships) bằng Fluent API <br>&emsp; + Chạy lệnh Migration tạo DB thành công | 29/05/2026   | 29/05/2026      |                                                                          |

### Kết quả đạt được tuần 2:

- **Làm chủ nền tảng mạng AWS VPC:**
  - Hiểu sâu sắc cách phân chia mạng lưới (Public/Private Subnets) để đảm bảo bảo mật cho hệ thống.
  - Phân biệt rõ sự khác nhau và ứng dụng thực tế của Security Group (Stateful) và NACL (Stateless).
  - Tự tay triển khai thành công một kiến trúc VPC cơ bản làm tiền đề để sau này host Database RDS và EC2.

- **Khởi tạo thành công cốt lõi dự án Snaptic:**
  - Setup thành công project .NET Core với kiến trúc thư mục gọn gàng, sẵn sàng cho việc phát triển API.
  - Áp dụng phương pháp Code-First trong Entity Framework Core để mô hình hóa toàn bộ nghiệp vụ quản lý chi tiêu thành cấu trúc Database.
  - Xử lý thành công các lỗi phổ biến khi thiết kế Database (như tham chiếu vòng - Circular Reference) và chạy được giao diện test Swagger trên môi trường Local.
