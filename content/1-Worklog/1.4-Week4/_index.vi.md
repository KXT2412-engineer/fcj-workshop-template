---
title: "Worklog Tuần 4"
date: 2026-06-01
weight: 4
chapter: false
pre: " <b> 1.4. </b> "
---

### Mục tiêu tuần 4:
- Bắt đầu chu trình **Sprint Code** cốt lõi của Snaptic.
- Triển khai xác thực JWT, cấu trúc Controller và CRUD cơ bản.

### Các công việc cần triển khai trong tuần này:

| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
|---|---|---|---|---|
| 2 | - **Học AWS Database (RDS):** <br>&emsp; + Tìm hiểu Amazon RDS (Relational Database Service) <br>&emsp; + Thực hành RDS Essentials | 01/06/2026 | 01/06/2026 | <a href="https://000005.awsstudygroup.com">000005.awsstudygroup.com</a><br><a href="https://docs.aws.amazon.com/rds/">Amazon RDS Docs</a> |
| 3 | - **Snaptic - Codebase:** <br>&emsp; + Tạo cấu trúc thư mục API, BLL, DAL <br>&emsp; + Khởi tạo Entity ban đầu | 02/06/2026 | 02/06/2026 |  |
| 4 | - **Snaptic - Auth & API:** <br>&emsp; + Implement xác thực (JWT, refresh token) <br>&emsp; + Thêm AccountController và CategoryController | 03/06/2026 | 03/06/2026 |  |
| 5 | - **Snaptic - CRUD Core:** <br>&emsp; + Cập nhật CRUD cho Transaction và TransactionDetail <br>&emsp; + Code Service cho TransactionDetail | 04/06/2026 | 04/06/2026 |  |
| 6 | - **Snaptic - CRUD Inventory:** <br>&emsp; + Hoàn thiện CRUD cho ItemInventory <br>&emsp; + Test các luồng API đầu tiên | 05/06/2026 | 05/06/2026 |  |

### Kết quả đạt được tuần 4:
*   **Cấu trúc dự án:** Khởi động thành công chu trình Sprint Code cốt lõi. Hệ thống Backend chính thức "thành hình" với cấu trúc 3 tầng (API, BLL, DAL) chặt chẽ.
*   **Bảo mật API:** Hệ thống định danh người dùng (Auth) bằng JWT Token và Refresh Token đã hoạt động trơn tru.
*   **Nghiệp vụ cơ bản:** Hoàn thiện nhanh chóng và chất lượng toàn bộ các endpoint CRUD cho các module nền tảng của hệ thống bao gồm: Transaction, TransactionDetail, Category và ItemInventory.
