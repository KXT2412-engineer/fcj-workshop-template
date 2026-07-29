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
|---|---|---|---|---|
| 2 | - **Snaptic - Dashboard & AWS SNS:** <br>&emsp; + Đổ dữ liệu Analytics ra Dashboard Controller <br>&emsp; + Bắn thông báo Email qua AWS SNS | 29/06/2026 | 29/06/2026 | <a href="https://000077.awsstudygroup.com">000077.awsstudygroup.com</a><br><a href="https://docs.aws.amazon.com/sns/">Amazon SNS Docs</a> |
| 3 | - **Học AWS Monitoring:** <br>&emsp; + Tìm hiểu Amazon CloudWatch Dashboard <br>&emsp; + Thực hành tạo metrics và giám sát hệ thống | 30/06/2026 | 30/06/2026 | <a href="https://000008.awsstudygroup.com">000008.awsstudygroup.com</a><br><a href="https://docs.aws.amazon.com/cloudwatch/">CloudWatch Docs</a> |
| 4 | - **Snaptic - System Cleanup:** <br>&emsp; + Sửa lỗi email verification login <br>&emsp; + Bỏ cấu hình scheduled job cũ trong Program.cs | 01/07/2026 | 01/07/2026 |  |
| 5 | - **Học AWS Compute Scale:** <br>&emsp; + Tìm hiểu kiến trúc Auto Scaling <br>&emsp; + Ứng dụng EC2 Auto Scaling Groups | 02/07/2026 | 02/07/2026 | <a href="https://000006.awsstudygroup.com">000006.awsstudygroup.com</a> |
| 6 | - **Snaptic - Budget Updates:** <br>&emsp; + Cập nhật dashboard <br>&emsp; + Thêm logic tạo nhiều budget và tự động trừ tiền | 03/07/2026 | 03/07/2026 |  |

### Kết quả đạt được tuần 8:
*   **Hệ thống cảnh báo:** Làm chủ dịch vụ Amazon SNS (Simple Notification Service) để xây dựng hệ thống liên lạc chuẩn công nghiệp, có khả năng bắn thông báo Email.
*   **Tối ưu Background Job:** Dọn dẹp thành công các logic cũ (scheduled job) để nhường chỗ cho hệ thống Hangfire hoạt động tối ưu và tập trung hơn.
*   **Data Analytics:** API Dashboard đã xử lý tốt bài toán phân luồng trừ tiền song song trên nhiều Budget cùng lúc và trả về số liệu thống kê Data Analytics cực kỳ chi tiết.

