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
| --- | --- | --- | --- | --- |
| 2 | **Snaptic - AI & Budget:** Thêm entity Budget; Cấu hình AI service phân tích ảnh và đọc hóa đơn. | 08/06/2026 | 08/06/2026 | Snaptic Git |
| 3 | **Snaptic - Auto-Transaction:** Viết logic tạo transaction trực tiếp từ hóa đơn AI trả về. | 09/06/2026 | 09/06/2026 | Snaptic Git |
| 4 | **Snaptic - Logic Cốt lõi:** Cập nhật TransactionService, thêm API `need-review` cho hệ thống. | 10/06/2026 | 11/06/2026 | Snaptic Git |
| 5 | **Snaptic - Machine Learning:** Implement thuật toán Levenshtein để tính toán độ tương đồng (similarity) cho việc match item. | 12/06/2026 | 12/06/2026 | Snaptic Git |
| 6 | **Snaptic - Hangfire:** Thêm job scan notification chạy ngầm bằng Hangfire. | 13/06/2026 | 13/06/2026 | Hangfire Docs |

### Kết quả đạt được tuần 5:

*   **Tích hợp AI:** Bước đầu đưa AI vào ứng dụng thực tế bằng cách tích hợp dịch vụ trích xuất dữ liệu từ hóa đơn ảnh và tự động tạo giao dịch (Auto-Transaction).
*   **Xử lý thuật toán:** Nâng cấp hệ thống bằng Machine Learning thông qua thuật toán Levenshtein để tính toán độ tương đồng (similarity) cho việc match item một cách thông minh.
*   **Tối ưu hệ thống:** Tích hợp Hangfire làm Background Job để chạy ngầm tiến trình scan notification, giúp tối ưu hóa hiệu năng thay vì xử lý đồng bộ.
