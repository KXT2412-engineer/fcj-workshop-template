---
title: "Worklog Tuần 10"
date: 2026-08-24
weight: 2
chapter: false
pre: " <b> 1.10. </b> "
---

{{% notice warning %}}
⚠️ **Lưu ý:** Các thông tin dưới đây chỉ nhằm mục đích tham khảo, vui lòng **không sao chép nguyên văn** cho bài báo cáo của bạn kể cả warning này.
{{% /notice %}}

### Mục tiêu tuần 10:

- **AWS:** Triển khai hạ tầng Serverless với AWS Fargate/ECS, đóng gói ứng dụng bằng Docker.
- **Dự án Snaptic:** Tối ưu hóa Container Image, cấu hình Event-Driven Architecture.

### Các công việc cần triển khai trong tuần này:

| Thứ | Công việc                                                                                                                                | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu  |
| :-- | :--------------------------------------------------------------------------------------------------------------------------------------- | :----------- | :-------------- | :-------------- |
| 2   | **Dự án - Dockerizing Backend:**<br>+ Viết Dockerfile cho project ASP.NET Core.<br>+ Build và test Image dưới Local.                     | 24/08/2026   | 24/08/2026      | Docker Docs     |
| 3   | **Dự án - Tối ưu Container:**<br>+ Giảm dung lượng Image (loại bỏ thư viện thừa, chuyển sang base image Alpine).                         | 25/08/2026   | 25/08/2026      | Tài liệu nội bộ |
| 4   | **AWS ECS & Fargate:**<br>+ Đẩy Image lên Amazon ECR.<br>+ Tạo ECS Cluster và Task Definition (Fargate).                                 | 26/08/2026   | 26/08/2026      | AWS Study Group |
| 5   | **Dự án - Fix SQS Polling:**<br>+ Refactor Worker Service chống vòng lặp quá nhanh (Smart Polling).<br>+ Set Visibility Timeout phù hợp. | 27/08/2026   | 27/08/2026      | Tài liệu nội bộ |
| 6   | **Dự án - Event-Driven Flow:**<br>+ Kiểm thử luồng: User Upload -> S3 -> SQS -> ECS Worker xử lý -> Cập nhật DB.                         | 28/08/2026   | 28/08/2026      | Tài liệu nội bộ |

### Kết quả đạt được tuần 10:

- Đóng gói thành công toàn bộ hệ thống bằng Docker.
- Hiểu và triển khai được kiến trúc Serverless (Fargate), hệ thống tự động chạy mà không cần quản lý hệ điều hành máy chủ vật lý.
