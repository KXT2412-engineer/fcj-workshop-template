---
title: "Nhật ký công việc"
date: 2026-05-18
weight: 1
chapter: false
pre: " <b> 1. </b> "
---

Thông thường và cũng là tiêu chuẩn, một worklog được thực hiện trong khoảng 3 tháng (trong suốt thời gian thực tập) với nội dung các tuần như sau:

Tài liệu này ghi chép lại tiến trình công việc chi tiết trong 13 tuần thực tập tại First Cloud Journey. Mục tiêu của giai đoạn này là nghiên cứu và thực hành triển khai các dịch vụ của Amazon Web Services (AWS), đồng thời trực tiếp phát triển hệ thống Backend cho dự án cá nhân **Snaptic** (Ứng dụng quản lý tài chính).

**Tuần 1:** [Làm quen với AWS & Các mô hình Điện Toán Đám Mây](1.1-week1/)

**Tuần 2:** [Khám phá Mạng Amazon VPC & Bảo mật với IAM](1.2-week2/)

**Tuần 3:** [Mạng nâng cao, Mạng lai (Hybrid) & Lưu trữ AWS S3](1.3-week3/)

**Tuần 4:** [Cơ sở dữ liệu RDS, Container ECS & Khởi tạo Backend Snaptic](1.4-week4/)

**Tuần 5:** [AWS SES/SNS, Auto Scaling & Hoàn thiện luồng API cốt lõi](1.5-week5/)

**Tuần 6:** [AWS Cost Management, Backup & Cập nhật logic Ngân sách (Budget)](1.6-week6/)

**Tuần 7:** [Hoàn thiện luồng Thông báo, Dashboard API & DevOps cơ bản](1.7-week7/)

**Tuần 8:** [AWS EventBridge, SQS & Tích hợp giám sát hệ thống CloudWatch](1.8-week8/)

**Tuần 9:** [Xử lý Database Migration & Thực tập dịch vụ mở rộng AWS](1.9-week9/)

**Tuần 10:** [Dọn dẹp tài nguyên (Cleanup), Review Bảo mật & Tối ưu chi phí](1.10-week10/)

**Tuần 11:** [Quy trình CI/CD & Thuật toán gia hạn tự động (Auto-renew)](1.11-week11/)

**Tuần 12:** [Hoàn thiện API Quản trị (Admin) & Ghi nhận log qua Serilog](1.12-week12/)

**Tuần 13:** [Tinh chỉnh tính năng cuối cùng & Báo cáo tổng kết thực tập](1.13-week13/)

---

### Tổng kết hành trình 13 tuần

Sau thời gian thực tập và nỗ lực tại First Cloud Journey, tôi đã đạt được những cột mốc quan trọng về cả tư duy lẫn kỹ năng kỹ thuật:

- **Làm chủ hệ sinh thái AWS:** Tự tay thiết lập và cấu hình an toàn hàng loạt các dịch vụ đám mây cốt lõi bao gồm IAM, VPC, EC2, S3, RDS, CloudWatch và SNS/SES thay vì chỉ code thuần túy trên Localhost.
- **Phát triển Backend mạnh mẽ:** Xây dựng hệ thống API bằng C#/.NET Core với kiến trúc phân tầng rõ ràng (API, BLL, DAL). Quản lý Database bài bản thông qua Entity Framework Core (Code-First) và tự tay xử lý trọn vẹn các tính năng từ cơ bản (CRUD) đến nâng cao.
- **Vận hành & Giám sát hệ thống:** Tích hợp thành công Amazon CloudWatch kết hợp với Serilog để theo dõi và ghi log mọi hoạt động của ứng dụng, đảm bảo khả năng giám sát chặt chẽ trong môi trường thực tế.
- **Tự động hóa & Tối ưu logic:** Xây dựng các thuật toán phức tạp như cơ chế tự động gia hạn ví (Auto-renew) và hệ thống xử lý tác vụ ngầm (Background Jobs), đảm bảo ứng dụng vận hành trơn tru qua các chu kỳ tài chính mà không gặp nghẽn.
- **Tư duy Kỹ sư Phần mềm thực thụ:** Nâng cấp nhận thức về bảo mật mạng và tài nguyên (Security Groups, IAM Least Privilege), quen thuộc với tư duy vận hành hạ tầng trên Đám mây (Cloud-Native), chuẩn bị sẵn sàng cho môi trường làm việc chuyên nghiệp.
