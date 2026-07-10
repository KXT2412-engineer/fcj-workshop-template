---
title: "Worklog Tuần 11"
date: 2026-08-31
weight: 2
chapter: false
pre: " <b> 1.11. </b> "
---
{{% notice warning %}}
⚠️ **Lưu ý:** Các thông tin dưới đây chỉ nhằm mục đích tham khảo, vui lòng **không sao chép nguyên văn** cho bài báo cáo của bạn kể cả warning này.
{{% /notice %}}


### Mục tiêu tuần 11:
- **AWS:** Ứng dụng Pub/Sub với Amazon SNS và dịch vụ gửi mail Amazon SES.
- **Dự án Snaptic:** Xử lý các trường hợp lỗi biên (Edge cases), Rate Limit của AI, và tích hợp thông báo qua Email.

### Các công việc cần triển khai trong tuần này:
| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| :--- | :--- | :--- | :--- | :--- |
| 2 | **AWS SNS & SES:**<br>+ Verify Domain/Email trên SES.<br>+ Khởi tạo SNS Topic cho hệ thống cảnh báo. | 31/08/2026 | 31/08/2026 | AWS Docs |
| 3 | **Dự án - Tích hợp Email:**<br>+ Code Service gửi Mail OTP/Thông báo thông qua SES API.<br>+ Thiết kế template HTML cho Email. | 01/09/2026 | 01/09/2026 | Tài liệu nội bộ |
| 4 | **Dự án - Xử lý Rate Limit:**<br>+ Xử lý lỗi 429 (Too Many Requests) khi gọi AI API.<br>+ Xây dựng luồng Fallback dự phòng. | 02/09/2026 | 02/09/2026 | Tài liệu nội bộ |
| 5 | **Dự án - CloudWatch Alarms:**<br>+ Cấu hình cảnh báo nếu SQS tồn đọng quá nhiều Message.<br>+ Bắn thông báo về Email Admin qua SNS. | 03/09/2026 | 03/09/2026 | Tài liệu nội bộ |
| 6 | **Dự án - Tối ưu Pipeline:**<br>+ Áp dụng `Task.WhenAll` (C#) để xử lý dữ liệu song song.<br>+ Giảm độ trễ từ 45s xuống 18s. | 04/09/2026 | 04/09/2026 | Tài liệu nội bộ |


### Kết quả đạt được tuần 11:
- Hoàn thiện module liên lạc (Gửi Email) bằng dịch vụ Cloud chuẩn công nghiệp.
- Hệ thống đạt khả năng chịu lỗi cao (Resilience), tự động phục hồi và chuyển hướng khi dịch vụ bên thứ 3 (AI) quá tải.


