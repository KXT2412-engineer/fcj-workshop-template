---
title: "Các bài blogs đã đăng"
date: 2024-01-01
weight: 3
chapter: false
pre: " <b> 3. </b> "
---

Tại đây sẽ là phần liệt kê, giới thiệu các blogs mà nhóm tôi đã đăng trên [AWS Study Group](https://www.facebook.com/groups/awsstudygroupfcj)

### [Blog 1 - AWS ĐÃ NÂNG CẤP AMAZON COGNITO NHƯ THẾ NÀO MÀ NGƯỜI DÙNG GẦN NHƯ KHÔNG HỀ NHẬN RA?](3.1-Blog1/)

Blog này đi sâu vào phân tích cách AWS thực hiện một chiến dịch "migration" hạ tầng quy mô lớn cho Amazon Cognito với mục tiêu Zero Downtime. Thay vì chỉ nói về tính năng mới, bài viết mang đến những bài học đắt giá về tư duy phát triển hệ thống (như Shadow mode, Dual-write, Anti-entropy) để di chuyển hàng trăm triệu user profiles một cách an toàn nhất.

### [Blog 2 - HÀNH TRANG AWS & TƯ DUY CLOUD-NATIVE TỪ KỲ THỰC TẬP THỰC TẾ](3.2-Blog2/)

Blog này chia sẻ những kinh nghiệm thực tiễn quý báu từ kỳ thực tập, tập trung vào việc áp dụng tư duy phân tách hệ thống (Decoupling) với Amazon S3. Bài viết cũng hướng dẫn cách quản trị quyền truy cập bằng AWS IAM, tối ưu chi phí lưu trữ, bảo mật thông tin xác thực và giải quyết bài toán chia sẻ dữ liệu an toàn thông qua Pre-signed URL.

### [Blog 3 - KIẾN TRÚC WEBSITE THƯƠNG MẠI ĐIỆN TỬ CÓ KHẢ NĂNG MỞ RỘNG TRÊN AWS](3.3-Blog3/)

Blog này giới thiệu một kiến trúc hạ tầng tiêu chuẩn trên AWS dành riêng cho các website thương mại điện tử thường xuyên có lượng truy cập biến động. Bằng cách kết hợp linh hoạt các dịch vụ như Route 53, CloudFront, ALB, ECS Fargate, và Aurora Serverless, hệ thống đảm bảo tốc độ phản hồi nhanh, bảo mật cao, giảm tải database và dễ dàng scale tự động trong mùa cao điểm.
