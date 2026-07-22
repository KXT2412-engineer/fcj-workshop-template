---
title: "Nhật ký công việc"
date: 2026-05-18
weight: 1
chapter: false
pre: " <b> 1. </b> "
---

Thông thường và cũng là tiêu chuẩn, một worklog được thực hiện trong khoảng 3 tháng (trong suốt thời gian thực tập) với nội dung các tuần như sau:

Tài liệu này ghi chép lại tiến trình công việc chi tiết trong 12 tuần thực tập tại First Cloud Journey. Mục tiêu của giai đoạn này là nghiên cứu và thực hành triển khai các dịch vụ của Amazon Web Services (AWS).

**Tuần 1:** [Làm quen với AWS & Thiết kế Database nền tảng](1.1-week1/)

**Tuần 2:** [Khám phá Amazon VPC & Backend Entity Framework](1.2-week2/)

**Tuần 3:** [Mạng nâng cao, Parameter Store & Thiết kế hệ thống Authentication](1.3-week3/)

**Tuần 4:** [Sprint Code cốt lõi, Xác thực JWT & Các module CRUD API](1.4-week4/)

**Tuần 5:** [Tích hợp AI đọc hóa đơn, Thuật toán Levenshtein & Background Job](1.5-week5/)

**Tuần 6:** [Triển khai AWS S3, Pre-signed URL & Bảo mật tài nguyên tĩnh](1.6-week6/)

**Tuần 7:** [Bảo mật luồng Email OTP & Phát triển Trợ lý ảo AI (AI Assistant)](1.7-week7/)

**Tuần 8:** [Tích hợp AWS SNS cảnh báo & Đổ dữ liệu Dashboard Analytics)](1.8-week8/)

**Tuần 9:** [Đóng gói Dockerize, Quản lý DB Migrations & Thắt chặt Authorization](1.9-week9/)

**Tuần 10:** [Phân tích xu hướng (Trend Analysis) & Logic Thu nhập định kỳ](1.10-week10/)

**Tuần 11:** [Xử lý Vòng đời Ví định kỳ (Periodic Budget), Auto-renew & Unit Test](1.11-week11/)

**Tuần 12:** [](1.12-week12/)

---

### Tổng kết hành trình 12 tuần

Sau thời gian thực tập và nỗ lực tại First Cloud Journey, tôi đã đạt được những cột mốc quan trọng về cả tư duy lẫn kỹ năng kỹ thuật:

- **Làm chủ hệ sinh thái AWS:** Tự tay thiết lập và triển khai an toàn các dịch vụ đám mây cốt lõi bao gồm IAM, VPC, EC2, S3, Parameter Store và SNS thay vì chỉ code thuần túy trên Localhost.
- **Phát triển Backend mạnh mẽ:** Xây dựng hệ thống API bằng C#/.NET Core với kiến trúc phân tầng rõ ràng (API, BLL, DAL). Xử lý trọn vẹn luồng xác thực JWT, phân quyền, và quản lý Database bài bản thông qua Entity Framework Core (Code-First).
- **Tích hợp Trí tuệ Nhân tạo & Thuật toán:** Áp dụng AI vào việc trích xuất hóa đơn (OCR) và tư vấn tài chính (Prompt Engineering). Cài cắm thuật toán Levenshtein để tối ưu hóa việc đối chiếu (matching) dữ liệu thông minh.
- **Tự động hóa & Tối ưu hiệu năng:** Ứng dụng xuất sắc thư viện Hangfire để xử lý các tác vụ ngầm (Background Jobs), giải quyết mượt mà bài toán tự động chốt sổ và gia hạn Ví định kỳ qua các tháng mà không làm nghẽn hệ thống.
- **Tư duy Kỹ sư Phần mềm thực thụ:** Nâng cấp nhận thức về bảo mật (Pre-signed URL, ẩn Secret Key), chuẩn bị môi trường triển khai chuyên nghiệp bằng Docker, và đảm bảo chất lượng hệ thống (QA) với Unit Testing trước khi ra mắt.
