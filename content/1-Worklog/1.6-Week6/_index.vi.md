---
title: "Worklog Tuần 6"
date: 2026-06-15
weight: 6
chapter: false
pre: " <b> 1.6. </b> "
---

### Mục tiêu tuần 6:
- Tối ưu hóa chi phí với AWS Cost Management và thực hành sao lưu dữ liệu với AWS Backup.
- Ôn tập quản lý cấu hình và bảo mật tham số.
- **Snaptic**: Cập nhật logic quản lý Ngân sách (Budget) và cấu trúc lại hệ thống lưu trữ hình ảnh, chuẩn hóa các quan hệ cơ sở dữ liệu.

### Các công việc cần triển khai trong tuần này:

| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
|---|---|---|---|---|
| 2 | - **Quản lý Chi phí (Cost Management):** <br>&emsp; + Tìm hiểu AWS Cost Optimization <br>&emsp; + Thực hành tạo Budget Alerts | 15/06/2026 | 15/06/2026 | <a href="https://000007.awsstudygroup.com">000007.awsstudygroup.com</a> |
| 3 | - **Ôn tập Quản lý Cấu hình:** <br>&emsp; + Review lại cách thức hoạt động của Parameter Store <br>&emsp; + Áp dụng phân quyền chặt chẽ cho cấu hình | 16/06/2026 | 16/06/2026 | <a href="https://000076.awsstudygroup.com">000076.awsstudygroup.com</a> |
| 4 | - **Bảo vệ Dữ liệu (AWS Backup):** <br>&emsp; + Tìm hiểu kiến trúc AWS Backup <br>&emsp; + Thực hành tạo Backup plan bảo vệ dữ liệu | 17/06/2026 | 17/06/2026 | <a href="https://000013.awsstudygroup.com">000013.awsstudygroup.com</a> |
| 5 | - **Snaptic - Cập nhật Budget:** <br>&emsp; + Cập nhật các hàm AWS admin cho Budget <br>&emsp; + Đổi cấu trúc lưu ảnh từ `ImageUrl` sang `ImageKey` | 18/06/2026 | 18/06/2026 | |
| 6 | - **Snaptic - Chuẩn hóa Quan hệ DB:** <br>&emsp; + Map User vào Notification, Transaction, Item <br>&emsp; + Fix luồng upload hình ảnh bảo mật | 19/06/2026 | 19/06/2026 | |

### Kết quả đạt được tuần 6:
*   **Tối ưu Đám mây:** Triển khai các công cụ cảnh báo chi phí (Budget Alerts) và lập lịch sao lưu tự động (AWS Backup), đảm bảo an toàn dữ liệu và ngân sách cho dự án.
*   **Nâng cấp Snaptic:** Chuẩn hóa toàn bộ các bảng dữ liệu để gán chặt chẽ với định danh Người dùng (User mapping). Thiết kế lại cơ chế lưu trữ hình ảnh bảo mật qua định dạng Key thay vì URL thuần túy.
