---
title: "Worklog Tuần 5"
date: 2025-06-15
weight: 5
chapter: false
pre: " <b> 1.5. </b> "
---

### Mục tiêu tuần 5:

- **AWS:** Tìm hiểu EC2 Auto Scaling, S3 Lifecycle Policies.
- **Dự án Snaptic:** Xây dựng hệ thống phân quyền (RBAC), cô lập dữ liệu (Data Isolation) và thiết kế Repository/Unit of Work.

### Các công việc cần triển khai trong tuần này:

| Thứ | Công việc                                                               | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu  |
| --- | ----------------------------------------------------------------------- | ------------ | --------------- | --------------- |
| 2   | **AWS Auto Scaling:** Tạo Launch Template, cấu hình ASG, Stress Test    | 15/06/2026   | 15/06/2026      | AWS Study Group |
| 3   | **AWS Storage:** S3 Lifecycle, Amazon EFS                               | 16/06/2026   | 16/06/2026      | AWS Study Group |
| 4   | **Dự án - Design Pattern:** Dựng `GenericRepository<T>` và `UnitOfWork` | 17/06/2026   | 17/06/2026      | Tài liệu nội bộ |
| 5   | **Dự án - RBAC:** Map Role từ JWT sang `.NET Claims`, viết Policies     | 18/06/2026   | 18/06/2026      | Tài liệu nội bộ |
| 6   | **Dự án - Data Isolation:** Lọc LINQ theo UserID cho Transaction/Budget | 19/06/2026   | 19/06/2026      | Tài liệu nội bộ |

### Kết quả đạt được tuần 5:

- Nắm được cơ chế tự động co giãn server (ASG) và tối ưu chi phí S3.
- Source code được thiết kế tối ưu với Repository Pattern và Unit of Work.
- Đảm bảo tính bảo mật dữ liệu tuyệt đối: Dữ liệu của user nào chỉ user đó được phép truy cập.
