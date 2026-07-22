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
| --- | --- | --- | --- | --- |
| 2 | **Snaptic - Codebase:** Bắt đầu tạo cấu trúc thư mục API, BLL (Business), DAL (Data). | 01/06/2026 | 02/06/2026 | Snaptic Git |
| 3 | **Snaptic - Auth & JWT:** Implement xác thực người dùng với refresh token; thêm AccountController. | 03/06/2026 | 03/06/2026 | Snaptic Git |
| 4 | **Snaptic - Refactor:** Dùng ITokenService cho AccountController; Cập nhật CRUD Transaction/TransactionDetail. | 04/06/2026 | 04/06/2026 | Snaptic Git |
| 5 | **Snaptic - Category:** Thêm CategoryController và CategoryService. | 04/06/2026 | 04/06/2026 | Snaptic Git |
| 6 | **Snaptic - Inventory:** Cập nhật và hoàn thiện CRUD cho ItemInventory. | 05/06/2026 | 05/06/2026 | Snaptic Git |

### Kết quả đạt được tuần 4:

*   **Cấu trúc dự án:** Khởi động thành công chu trình Sprint Code cốt lõi. Hệ thống Backend chính thức "thành hình" với cấu trúc 3 tầng (API, BLL, DAL) chặt chẽ.
*   **Bảo mật API:** Hệ thống định danh người dùng (Auth) bằng JWT Token và Refresh Token đã hoạt động trơn tru.
*   **Nghiệp vụ cơ bản:** Hoàn thiện nhanh chóng và chất lượng toàn bộ các endpoint CRUD cho các module nền tảng của hệ thống bao gồm: Transaction, TransactionDetail, Category và ItemInventory.
