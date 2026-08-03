---
title: "Worklog Tuần 4"
date: 2026-06-01
weight: 4
chapter: false
pre: " <b> 1.4. </b> "
---

### Mục tiêu tuần 4:
- Triển khai và thực hành các dịch vụ Database (RDS) và Container (ECS) trên AWS.
- Cấu hình Auto Scaling để tự động mở rộng hệ thống.
- **Snaptic**: Bắt đầu giai đoạn Code cốt lõi, xây dựng và hoàn thiện các module CRUD cho các Entity chính.

### Các công việc cần triển khai trong tuần này:

| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
|---|---|---|---|---|
| 2 | - **Cơ sở dữ liệu (Database):** <br>&emsp; + Tìm hiểu Amazon RDS (Relational Database Service) <br>&emsp; + Thực hành tạo RDS Database instance | 01/06/2026 | 01/06/2026 | <a href="https://000005.awsstudygroup.com">000005.awsstudygroup.com</a> |
| 3 | - **Mở rộng tự động (Compute Scale):** <br>&emsp; + Tìm hiểu kiến trúc Auto Scaling <br>&emsp; + Thực hành thiết lập EC2 Auto Scaling Groups | 02/06/2026 | 02/06/2026 | <a href="https://000006.awsstudygroup.com">000006.awsstudygroup.com</a> |
| 4 | - **Công nghệ Container:** <br>&emsp; + Tìm hiểu Docker và AWS ECS <br>&emsp; + Khái niệm kiến trúc Serverless với AWS Fargate | 03/06/2026 | 03/06/2026 | <a href="https://000015.awsstudygroup.com">000015.awsstudygroup.com</a><br><a href="https://000016.awsstudygroup.com">000016.awsstudygroup.com</a> |
| 5 | - **Snaptic - CRUD Core:** <br>&emsp; + Cập nhật CRUD cho Transaction và TransactionDetail <br>&emsp; + Viết logic Service xử lý TransactionDetail | 04/06/2026 | 04/06/2026 |  |
| 6 | - **Snaptic - CRUD Inventory:** <br>&emsp; + Hoàn thiện CRUD cho kho mặt hàng (ItemInventory) <br>&emsp; + Test các luồng API đầu tiên | 05/06/2026 | 05/06/2026 |  |

### Kết quả đạt được tuần 4:
*   **Hạ tầng Database & Scale:** Khởi tạo thành công database RDS trên đám mây và cấu hình được mô hình co giãn tự động Auto Scaling để đảm bảo tính sẵn sàng (High Availability). Làm quen với kiến trúc Container qua ECS.
*   **Tiến độ Snaptic:** Đặt những viên gạch code đầu tiên. Đã hoàn thiện xong các chức năng Thêm/Sửa/Xóa/Đọc (CRUD) cho những Domain Models cốt lõi như Giao dịch (Transaction) và Kho mặt hàng (ItemInventory).
