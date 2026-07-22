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
| --- | --- | --- | --- | --- |
| 2 | **Snaptic - DB Upgrade:** Sửa schema Budget và Transaction. Thêm DB Migrations mới lên môi trường. | 06/07/2026 | 06/07/2026 | EF Core Docs |
| 4 | **Snaptic - Docker & Auth:** Viết Dockerfile chuẩn hóa môi trường. Bổ sung `[Authorize]` cho toàn bộ Controller. | 08/07/2026 | 09/07/2026 | Docker Docs |
| 5 | **Snaptic - Data Details:** Cải thiện API truy xuất transaction đính kèm chi tiết (Details). | 09/07/2026 | 09/07/2026 | Snaptic Git |
| 6 | **Snaptic - Error Handling:** Nâng cấp hệ thống quản lý lỗi (Exception Handling) toàn cầu cho API. | 10/07/2026 | 10/07/2026 | Snaptic Git |

### Kết quả đạt được tuần 9:

*   **Đóng gói môi trường:** Đưa dự án tiến gần hơn với môi trường Production (DevOps) bằng cách viết thành công Dockerfile để đóng gói (Dockerize) ứng dụng Backend.
*   **Kiểm soát truy cập:** Thắt chặt lớp giáp bảo mật ở tầng API bằng cách áp dụng toàn diện Attribute `[Authorize]` trên các Controller, đồng thời cập nhật DB thông qua EF Core Migrations.
*   **Tối ưu Query:** Nâng cấp hiệu năng API truy xuất Transaction, cho phép hệ thống trả về kết quả kèm các thông tin chi tiết (Details) một cách mượt mà và tối ưu nhất.
