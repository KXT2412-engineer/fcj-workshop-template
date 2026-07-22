---
title: "Worklog Tuần 8"
date: 2026-06-29
weight: 8
chapter: false
pre: " <b> 1.8. </b> "
---

### Mục tiêu tuần 8:

- **AWS:** Triển khai Amazon SNS (Simple Notification Service).
- **Snaptic:** Hoàn thiện Dashboard và logic cảnh báo chi tiêu.

### Các công việc cần triển khai trong tuần này:

| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| --- | --- | --- | --- | --- |
| 2 | **Snaptic & AWS SNS:** Tích hợp Email notifications qua SNS cho Budget và Spending Insights. | 29/06/2026 | 29/06/2026 | AWS Docs |
| 4 | **Snaptic - System Cleanup:** Sửa nội dung email verification, loại bỏ scheduled job cũ (chuyển qua Hangfire hoàn toàn). | 01/07/2026 | 01/07/2026 | Snaptic Git |
| 5 | **Snaptic - Multi-Budget:** Cập nhật logic tạo nhiều budget và tự động trừ tiền qua lại giữa các quỹ. | 04/07/2026 | 05/07/2026 | Snaptic Git |
| 6 | **Snaptic - Dashboard:** Đổ dữ liệu Data Analytics ra Dashboard Controller. | 05/07/2026 | 05/07/2026 | Snaptic Git |

### Kết quả đạt được tuần 8:

*   **Hệ thống cảnh báo:** Làm chủ dịch vụ Amazon SNS (Simple Notification Service) để xây dựng hệ thống liên lạc chuẩn công nghiệp, có khả năng bắn thông báo Email (chủ động và bị động) cho người dùng.
*   **Tối ưu Background Job:** Dọn dẹp thành công các logic cũ (scheduled job) để nhường chỗ cho hệ thống Hangfire hoạt động tối ưu và tập trung hơn.
*   **Data Analytics:** API Dashboard đã xử lý tốt bài toán phân luồng trừ tiền song song trên nhiều Budget cùng lúc và trả về số liệu thống kê Data Analytics cực kỳ chi tiết.
