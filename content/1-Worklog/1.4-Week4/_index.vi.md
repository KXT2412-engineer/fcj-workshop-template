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
| 2 | - **Học AWS Database:** <br>&emsp; + Tìm hiểu Amazon RDS (Relational Database Service) <br>&emsp; + Các engine hỗ trợ | 01/06/2026 | 01/06/2026 | <a href="https://000005.awsstudygroup.com">000005.awsstudygroup.com</a> |
| 3 | - **Snaptic - Codebase:** <br>&emsp; + Tạo cấu trúc thư mục API, BLL, DAL <br>&emsp; + Khởi tạo Entity ban đầu | 02/06/2026 | 02/06/2026 |  |
| 4 | - **Snaptic - Authentication:** <br>&emsp; + Implement xác thực người dùng (JWT) <br>&emsp; + Xử lý refresh token, thêm AccountController | 03/06/2026 | 03/06/2026 |  |
| 5 | - **Snaptic - Logic API:** <br>&emsp; + Dùng ITokenService cho AccountController <br>&emsp; + CRUD Transaction/TransactionDetail <br>&emsp; + Thêm CategoryController | 04/06/2026 | 04/06/2026 |  |
| 6 | - **Snaptic - Quản lý Inventory:** <br>&emsp; + Hoàn thiện CRUD cho ItemInventory <br>&emsp; + Cập nhật và tinh chỉnh API liên quan | 05/06/2026 | 05/06/2026 |  |

### Kết quả đạt được tuần 4:
*   **Cấu trúc dự án:** Khởi động thành công chu trình Sprint Code cốt lõi. Hệ thống Backend chính thức "thành hình" với cấu trúc 3 tầng (API, BLL, DAL) chặt chẽ.
*   **Bảo mật API:** Hệ thống định danh người dùng (Auth) bằng JWT Token và Refresh Token đã hoạt động trơn tru.
*   **Nghiệp vụ cơ bản:** Hoàn thiện nhanh chóng và chất lượng toàn bộ các endpoint CRUD cho các module nền tảng của hệ thống bao gồm: Transaction, TransactionDetail, Category và ItemInventory.
