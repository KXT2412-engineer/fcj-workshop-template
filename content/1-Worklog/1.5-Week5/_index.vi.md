---
title: "Worklog Tuần 5"
date: 2026-06-08
weight: 5
chapter: false
pre: " <b> 1.5. </b> "
---

### Mục tiêu tuần 5:
- Tích hợp dịch vụ Trí tuệ nhân tạo (AI) vào việc phân tích hóa đơn.
- Phát triển module Review và Budget của Snaptic.

### Các công việc cần triển khai trong tuần này:

| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
|---|---|---|---|---|
| 2 | - **Snaptic - AI & Entities:** <br>&emsp; + Thêm entity Budget, Notification <br>&emsp; + Implement AI service phân tích ảnh hóa đơn | 08/06/2026 | 08/06/2026 |  |
| 3 | - **Snaptic - Auto-Transaction:** <br>&emsp; + Viết logic tạo transaction từ bill AI trả về <br>&emsp; + Mở rộng AI service tạo/quản lý category | 09/06/2026 | 09/06/2026 |  |
| 4 | - **Snaptic - Refactor Flow:** <br>&emsp; + Cập nhật TransactionService <br>&emsp; + Tối ưu hóa luồng xử lý Transaction | 10/06/2026 | 10/06/2026 |  |
| 5 | - **Snaptic - Flow Review:** <br>&emsp; + Thêm API `need-review` <br>&emsp; + Cập nhật flow review item inventory | 11/06/2026 | 11/06/2026 |  |
| 6 | - **Snaptic - Logic & Thuật toán:** <br>&emsp; + Refactor Flow 3 (ConfirmPrices, MissingPriceJob) <br>&emsp; + Thêm Levenshtein similarity để match item thông minh | 12/06/2026 | 12/06/2026 |  |

### Kết quả đạt được tuần 5:
*   **Tích hợp AI:** Bước đầu đưa AI vào ứng dụng thực tế bằng cách tích hợp dịch vụ trích xuất dữ liệu từ hóa đơn ảnh và tự động tạo giao dịch (Auto-Transaction).
*   **Xử lý thuật toán:** Nâng cấp hệ thống bằng Machine Learning thông qua thuật toán Levenshtein để tính toán độ tương đồng (similarity) cho việc match item một cách thông minh.
*   **Tối ưu hệ thống:** Tích hợp Hangfire làm Background Job để chạy ngầm tiến trình scan notification, giúp tối ưu hóa hiệu năng thay vì xử lý đồng bộ.
