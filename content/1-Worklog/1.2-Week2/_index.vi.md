---
title: "Worklog Tuần 2"
date: 2026-05-18
weight: 2
chapter: false
pre: " <b> 1.2. </b> "
---

### Mục tiêu tuần 2:

- Nắm vững kiến thức nền tảng về Amazon Virtual Private Cloud (VPC) và các cơ chế bảo mật mạng.
- Dự án **Snaptic**: Setup môi trường Backend .NET Core Web API và cấu hình Entity Framework Core.

### Các công việc cần triển khai trong tuần này:

| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
|------|---------|-------------|----------------|------------|
| 2 | - **Học lý thuyết Amazon VPC:** <br>&emsp; + Các khái niệm: Subnets, Route Table <br>&emsp; + CIDR block, IGW | 18/05/2026 | 18/05/2026 | <a href="https://000003.awsstudygroup.com/">000003.awsstudygroup.com</a> |
| 3 | - **Tìm hiểu Bảo mật trong VPC:** <br>&emsp; + Security Groups (Tường lửa cấp Instance) <br>&emsp; + Network ACLs (Tường lửa cấp Subnet) | 19/05/2026 | 19/05/2026 |         |
| 4 | - **Thực hành AWS VPC:** <br>&emsp; + Tạo Custom VPC, Public/Private Subnets <br>&emsp; + Gắn IGW và cấu hình Route Table <br>&emsp; + Cấu hình Security Group cho phép SSH | 20/05/2026 | 20/05/2026|          |
| 5 | - **Snaptic - Khởi tạo Backend:** <br>&emsp; + Tạo solution .NET Core Web API <br>&emsp; + Cài đặt Entity Framework Core (EF Core) <br>&emsp; + Cấu hình chuỗi kết nối Database ban đầu | 21/05/2026 | 21/05/2026      |                |
| 6 | - **Snaptic - Thiết kế Database:** <br>&emsp; + Code các Models: User, Budget, Transaction <br>&emsp; + Xử lý quan hệ (Relationships) bằng Fluent API <br>&emsp; + Chạy lệnh Migration tạo DB thành công | 22/05/2026 | 22/05/2026 |      |

### Kết quả đạt được tuần 2:

*   **Hạ tầng mạng:** Làm chủ nền tảng mạng AWS VPC, hiểu rõ cách phân chia mạng lưới (Public/Private Subnets) và ứng dụng Security Group/NACL để thiết lập lớp tường lửa bảo vệ hệ thống.
*   **Kiến trúc Backend:** Khởi tạo thành công project .NET Core Web API với kiến trúc phân tầng rõ ràng (API, BLL, DAL).
*   **Database:** Áp dụng trơn tru phương pháp Code-First trong Entity Framework Core để mô hình hóa toàn bộ nghiệp vụ quản lý chi tiêu thành cấu trúc Database thực tế và chạy Migration thành công.
