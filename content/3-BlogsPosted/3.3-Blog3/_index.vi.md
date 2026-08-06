---
title: "Blog 3"
date: 2024-01-01
weight: 1
chapter: false
pre: " <b> 3.3. </b> "
---

# NHỮNG BÀI HỌC TỪ KIẾN TRÚC WEBSITE THƯƠNG MẠI ĐIỆN TỬ MỞ RỘNG TRÊN AWS

Xin chào mọi người,

Sau khi nghiên cứu bài đăng về kiến trúc website thương mại điện tử trên AWS, mình đã vỡ ra được rất nhiều điều về cách thiết kế một hệ thống chịu tải cao. Dưới đây là những gì mình đã đúc kết được:

![Kiến trúc website thương mại điện tử có khả năng mở rộng trên AWS](/fcj-workshop-template/images/3-BlogsPosted/3.3-Blog3/blog3.png)

## 1. Tầm quan trọng của việc phân phối tải (Load Distribution)
- **Bài học rút ra:** Trong các đợt khuyến mãi, lượng truy cập có thể tăng đột biến. Việc sử dụng **Amazon CloudFront** để phân phối nội dung tĩnh kết hợp với **Application Load Balancer (ALB)** giúp giảm thiểu áp lực trực tiếp lên máy chủ, đảm bảo người dùng luôn có trải nghiệm mượt mà.

## 2. Quản lý Container hiệu quả với ECS Fargate
- **Bài học rút ra:** Thay vì phải đau đầu quản lý từng máy chủ EC2 cho ứng dụng Backend, bài đăng đã cho thấy sức mạnh của việc triển khai ứng dụng dưới dạng Container trên **Amazon ECS Fargate**. Điều này giúp tự động mở rộng (auto-scaling) linh hoạt dựa trên lưu lượng thực tế.

## 3. Tối ưu hóa hiệu suất cơ sở dữ liệu
- **Bài học rút ra:** Cơ sở dữ liệu thường là "nút thắt cổ chai" lớn nhất. Mình học được cách kết hợp **Amazon ElastiCache** để lưu trữ tạm các dữ liệu thường xuyên được truy vấn (như giỏ hàng, thông tin phiên), và sử dụng **Amazon Aurora Serverless v2** để tự động co giãn tài nguyên dữ liệu lõi theo nhu cầu mà không lo bị sập hệ thống.

## 4. Giám sát và phản ứng nhanh với sự cố
- **Bài học rút ra:** Không một hệ thống nào là hoàn hảo. Việc thiết lập **Amazon CloudWatch** để theo dõi sức khỏe ứng dụng và tự động kích hoạt **Amazon SNS** gửi cảnh báo qua Email/SMS là cực kỳ quan trọng để đội ngũ vận hành phản ứng kịp thời trước khi người dùng nhận ra lỗi.

**Tổng kết:** Kiến trúc này đã cung cấp cho mình một bức tranh toàn cảnh về cách các doanh nghiệp lớn vận hành hệ thống thương mại điện tử. Nó không chỉ là về việc chọn đúng dịch vụ, mà còn là cách kết nối chúng lại để tạo ra một hệ thống tự động, bảo mật và chịu lỗi cao.

---

### Bài viết tham khảo:
- 📌 **[Guidance for Web Store on AWS](https://docs.aws.amazon.com/solutions/web-store-on-aws/)**
- 📌 **[Guidance for Building a Containerized and Scalable Web Application on AWS](https://docs.aws.amazon.com/solutions/building-a-containerized-and-scalable-web-application-on-aws/)**
