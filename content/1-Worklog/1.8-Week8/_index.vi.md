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
| 2 | - **Snaptic & AWS SNS:** <br>&emsp; + Thêm email notifications qua SNS cho budget <br>&emsp; + Hoàn thiện AI assistant insights chủ/bị động | 29/06/2026 | 29/06/2026 | Snaptic Git |
| 3 | - **Học AWS Monitoring:** <br>&emsp; + Tìm hiểu Amazon CloudWatch Dashboard <br>&emsp; + Thiết lập Alarms giám sát tài nguyên EC2/RDS | 30/06/2026 | 30/06/2026 | AWS Docs |
| 4 | - **Snaptic - Cleanup System:** <br>&emsp; + Sửa lỗi email verification login <br>&emsp; + Bỏ scheduled job trong Program.cs dọn đường cho Hangfire | 01/07/2026 | 01/07/2026 | Snaptic Git |
| 5 | - **Học AWS Compute Scale:** <br>&emsp; + Tìm hiểu kiến trúc Auto Scaling <br>&emsp; + Ứng dụng Elastic Load Balancer (ELB) | 02/07/2026 | 02/07/2026 | AWS Docs |
| 6 | - **Snaptic - Dashboard API:** <br>&emsp; + Cập nhật dashboard <br>&emsp; + Thêm logic tạo nhiều budget và trừ tiền budget tự động | 03/07/2026 | 03/07/2026 | Snaptic Git |

### Kết quả đạt được tuần 8:
*   **Hệ thống cảnh báo:** Làm chủ dịch vụ Amazon SNS (Simple Notification Service) để xây dựng hệ thống liên lạc chuẩn công nghiệp, có khả năng bắn thông báo Email.
*   **Tối ưu Background Job:** Dọn dẹp thành công các logic cũ (scheduled job) để nhường chỗ cho hệ thống Hangfire hoạt động tối ưu và tập trung hơn.
*   **Data Analytics:** API Dashboard đã xử lý tốt bài toán phân luồng trừ tiền song song trên nhiều Budget cùng lúc và trả về số liệu thống kê Data Analytics cực kỳ chi tiết.
