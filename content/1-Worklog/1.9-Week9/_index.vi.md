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
| 2 | - **Snaptic - Database Migration:** <br>&emsp; + Sửa entity budget và transaction <br>&emsp; + Thêm DB migrations cập nhật lên môi trường | 06/07/2026 | 06/07/2026 | Snaptic Git |
| 3 | - **Học AWS Container:** <br>&emsp; + Khái niệm Container, AWS ECS (Elastic Container Service) <br>&emsp; + Tìm hiểu kiến trúc Serverless AWS Fargate | 07/07/2026 | 07/07/2026 | <a href="https://000015.awsstudygroup.com">000015.awsstudygroup.com</a><br><a href="https://000016.awsstudygroup.com">000016.awsstudygroup.com</a> |
| 4 | - **Thực hành DevOps:** <br>&emsp; + Viết Dockerfile cơ bản <br>&emsp; + Cấu hình và build Image tối ưu cho .NET Core | 08/07/2026 | 08/07/2026 | Tài liệu nội bộ |
| 5 | - **Snaptic - Authorization:** <br>&emsp; + Thêm Dockerfile vào Repository <br>&emsp; + Thêm authorization `[Authorize]` cho nhiều controller | 09/07/2026 | 09/07/2026 | Snaptic Git |
| 6 | - **Snaptic - Tối ưu & Exception:** <br>&emsp; + Nâng cấp budget management theo user <br>&emsp; + Cải thiện transaction details, xử lý exception toàn cầu | 10/07/2026 | 10/07/2026 | Snaptic Git |

### Kết quả đạt được tuần 9:
*   **Đóng gói môi trường:** Đưa dự án tiến gần hơn với môi trường Production (DevOps) bằng cách viết thành công Dockerfile để đóng gói (Dockerize) ứng dụng Backend.
*   **Kiểm soát truy cập:** Thắt chặt lớp giáp bảo mật ở tầng API bằng cách áp dụng toàn diện Attribute `[Authorize]` trên các Controller, đồng thời cập nhật DB thông qua EF Core Migrations.
*   **Tối ưu Query:** Nâng cấp hiệu năng API truy xuất Transaction, cho phép hệ thống trả về kết quả kèm các thông tin chi tiết (Details) một cách mượt mà và tối ưu nhất.

