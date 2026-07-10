---
title: "Worklog Tuần 7"
date: 2026-08-03
weight: 1
chapter: false
pre: " <b> 1.7. </b> "
---
{{% notice warning %}}
⚠️ **Lưu ý:** Các thông tin dưới đây chỉ nhằm mục đích tham khảo, vui lòng **không sao chép nguyên văn** cho bài báo cáo của bạn kể cả warning này.
{{% /notice %}}


### Mục tiêu tuần 7:
- **AWS:** Triển khai S3 Static Website, tích hợp CloudFront và hiểu Shared Responsibility Model.
- **Dự án Snaptic:** Cấu trúc lại code (Refactor) bằng Dependency Injection và phát triển nghiệp vụ API lõi.

### Các công việc cần triển khai trong tuần này:
| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| :--- | :--- | :--- | :--- | :--- |
| 2 | **AWS S3 & CloudFront:**<br>+ Bật Static Website Hosting.<br>+ Cấu hình CloudFront CDN phân phối nội dung S3. | 03/08/2026 | 03/08/2026 | AWS Study Group |
| 3 | **Dự án - Dependency Injection:**<br>+ Gom nhóm Service/Repository vào Extension Methods.<br>+ Clean up `Program.cs` cho gọn gàng. | 04/08/2026 | 04/08/2026 | Tài liệu nội bộ |
| 4 | **Dự án - Unit of Work:**<br>+ Triển khai Pattern Unit of Work quản lý Transaction.<br>+ Đảm bảo tính toàn vẹn dữ liệu khi CRUD. | 05/08/2026 | 05/08/2026 | Tài liệu nội bộ |
| 5 | **Dự án - Logic Missing Price:**<br>+ Viết API `missing-prices` trả về item chưa có giá.<br>+ Viết API `confirm-prices` để update tổng hóa đơn. | 06/08/2026 | 06/08/2026 | Tài liệu nội bộ |
| 6 | **Dự án - Bug Fixing:**<br>+ Fix lỗi tính toán thập phân (Decimal) trong hóa đơn.<br>+ Cập nhật tài liệu Swagger. | 07/08/2026 | 07/08/2026 | Tài liệu nội bộ |


### Kết quả đạt được tuần 7:
- Source code Backend được tối ưu, dễ bảo trì nhờ kiến trúc Repository Pattern và DI.
- Hoàn thiện hoàn toàn luồng xử lý hóa đơn thiếu giá (Missing Price Flow).
- Biết cách dùng CDN CloudFront để tăng tốc độ tải file.


