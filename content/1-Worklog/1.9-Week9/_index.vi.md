---
title: "Worklog Tuần 9"
date: 2026-07-06
weight: 9
chapter: false
pre: " <b> 1.9. </b> "
---

### Mục tiêu tuần 9:
- **DevOps:** Đóng gói ứng dụng Backend với Docker (Dockerize).
- **Snaptic:** Nâng cấp cấu trúc Database và thắt chặt Authorization.

### Các công việc cần triển khai trong tuần này:

| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
|---|---|---|---|---|
| 2 | - **Snaptic - Database Migration:** <br>&emsp; + Fix schema Budget và Transaction <br>&emsp; + Chạy lệnh tạo DB Migrations mới | 06/07/2026 | 06/07/2026 |  |
| 3 | - **Học AWS Container:** <br>&emsp; + Tìm hiểu Docker, AWS ECS <br>&emsp; + Khái niệm kiến trúc Serverless AWS Fargate | 07/07/2026 | 07/07/2026 | <a href="https://000015.awsstudygroup.com">000015.awsstudygroup.com</a><br><a href="https://000016.awsstudygroup.com">000016.awsstudygroup.com</a><br><a href="https://docs.aws.amazon.com/ecs/">Amazon ECS Docs</a> |
| 4 | - **Thực hành DevOps:** <br>&emsp; + Viết Dockerfile cơ bản đóng gói ứng dụng <br>&emsp; + Build Image tối ưu cho dự án .NET Core | 08/07/2026 | 08/07/2026 | <a href="https://docs.docker.com/">Docker Documentation</a> |
| 5 | - **Snaptic - Security & Auth:** <br>&emsp; + Bổ sung Authorization cho hàng loạt Controller <br>&emsp; + Tối ưu hóa truy xuất Transaction Details | 09/07/2026 | 09/07/2026 |  |
| 6 | - **Snaptic - System Refactor:** <br>&emsp; + Nâng cấp budget management theo user <br>&emsp; + Xử lý lỗi ngoại lệ (Global Exception Handling) | 10/07/2026 | 10/07/2026 |  |

### Kết quả đạt được tuần 9:
*   **Đóng gói môi trường:** Đưa dự án tiến gần hơn với môi trường Production (DevOps) bằng cách viết thành công Dockerfile để đóng gói (Dockerize) ứng dụng Backend.
*   **Kiểm soát truy cập:** Thắt chặt lớp giáp bảo mật ở tầng API bằng cách áp dụng toàn diện Attribute `[Authorize]` trên các Controller, đồng thời cập nhật DB thông qua EF Core Migrations.
*   **Tối ưu Query:** Nâng cấp hiệu năng API truy xuất Transaction, cho phép hệ thống trả về kết quả kèm các thông tin chi tiết (Details) một cách mượt mà và tối ưu nhất.

