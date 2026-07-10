---
title: "Worklog Tuần 9"
date: 2026-08-17
weight: 1
chapter: false
pre: " <b> 1.9. </b> "
---

{{% notice warning %}}
⚠️ **Lưu ý:** Các thông tin dưới đây chỉ nhằm mục đích tham khảo, vui lòng **không sao chép nguyên văn** cho bài báo cáo của bạn kể cả warning này.
{{% /notice %}}

### Mục tiêu tuần 9:

- **AWS:** Khám phá AWS Rekognition (AI) và giải quyết bài toán bất đồng bộ với Amazon SQS (Message Queue).
- **Dự án Snaptic:** Tích hợp SQS để xử lý hàng loạt tác vụ nặng (OCR Hóa đơn) mà không gây nghẽn Server.

### Các công việc cần triển khai trong tuần này:

| Thứ | Công việc                                                                                                                                        | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu  |
| :-- | :----------------------------------------------------------------------------------------------------------------------------------------------- | :----------- | :-------------- | :-------------- |
| 2   | **AWS Rekognition & SQS:**<br>+ Test các tính năng Detect Text của Rekognition.<br>+ Tìm hiểu kiến trúc Queue (Standard & FIFO).                 | 17/08/2026   | 17/08/2026      | AWS Study Group |
| 3   | **Dự án - Message Queue Setup:**<br>+ Khởi tạo Queue trên AWS Console.<br>+ Viết Producer trong .NET đẩy Job OCR vào Queue.                      | 18/08/2026   | 18/08/2026      | Tài liệu nội bộ |
| 4   | **Dự án - Background Worker:**<br>+ Tích hợp Hangfire / BackgroundService (Consumer).<br>+ Lấy Message từ SQS ra xử lý ngầm.                     | 19/08/2026   | 19/08/2026      | Tài liệu nội bộ |
| 5   | **Dự án - Concurrency Control:**<br>+ Dùng `SemaphoreSlim` giới hạn số luồng AI chạy cùng lúc.<br>+ Áp dụng `Polly` policy để retry khi API lỗi. | 20/08/2026   | 20/08/2026      | Tài liệu nội bộ |
| 6   | **Dự án - Merge Data:**<br>+ Ghép dữ liệu JSON trả về từ AI vào XML gốc.<br>+ Xử lý lỗi timeout API thành công.                                  | 21/08/2026   | 21/08/2026      | Tài liệu nội bộ |

### Kết quả đạt được tuần 9:

- Loại bỏ hoàn toàn tình trạng treo Server (Timeout) khi User upload nhiều hóa đơn cùng lúc nhờ kiến trúc Message Queue (AWS SQS).
- Kiểm soát tốt tài nguyên bằng kỹ thuật xử lý đa luồng (Concurrency) trong C#.
