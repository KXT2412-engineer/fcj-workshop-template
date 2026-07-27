---
title: "Blog 3"
date: 2024-01-01
weight: 1
chapter: false
pre: " <b> 3.3. </b> "
---

# KIẾN TRÚC WEBSITE THƯƠNG MẠI ĐIỆN TỬ CÓ KHẢ NĂNG MỞ RỘNG TRÊN AWS

Xin chào mọi người,

Website thương mại điện tử thường có lượng truy cập thay đổi rất lớn, đặc biệt trong các chương trình khuyến mãi hoặc mùa mua sắm cao điểm. Nếu toàn bộ request chỉ được xử lý trên một máy chủ và truy cập trực tiếp vào database, hệ thống rất dễ bị chậm, quá tải hoặc gián đoạn.

![Kiến trúc website thương mại điện tử có khả năng mở rộng trên AWS](755694557_1060914093084170_2834855221066632026_n.jpg)

Một kiến trúc có khả năng mở rộng trên AWS có thể được xây dựng theo luồng:

**User → Route 53 → CloudFront → AWS WAF → Application Load Balancer → ECS Fargate → ElastiCache/Aurora**

### Khi người dùng truy cập website:

- **Amazon Route 53:** Định tuyến request đến hệ thống.
- **Amazon CloudFront:** Phân phối nội dung từ vị trí gần người dùng, giúp giảm độ trễ.
- **AWS WAF:** Kiểm tra và chặn các request có dấu hiệu bất thường.
- **Application Load Balancer:** Phân phối request đến các container Backend chạy trên Amazon ECS với AWS Fargate.
- **Amazon Cognito:** Hỗ trợ đăng ký, đăng nhập và xác thực người dùng.
- **Amazon ElastiCache:** Lưu tạm dữ liệu được truy cập thường xuyên, giúp giảm tải cho database.
- **Amazon Aurora Serverless v2:** Lưu trữ dữ liệu chính như người dùng, sản phẩm, tồn kho và đơn hàng.

Bên cạnh đó, **Amazon CloudWatch** theo dõi hoạt động của ECS và Aurora. Khi phát hiện CPU tăng cao, ứng dụng xuất hiện nhiều lỗi hoặc database sử dụng tài nguyên bất thường, CloudWatch Alarm sẽ kích hoạt **Amazon SNS** để gửi cảnh báo qua email hoặc SMS.

### Luồng cảnh báo:

> **CloudWatch → CloudWatch Alarm → Amazon SNS → Email/SMS**

Nhờ kết hợp các dịch vụ trên, website có thể tăng tốc độ truy cập, cải thiện bảo mật, giảm tải cơ sở dữ liệu, mở rộng linh hoạt và phát hiện sự cố sớm khi lượng người dùng tăng cao.

---

### Bài viết tham khảo:

- 🔗 **[Guidance for Web Store on AWS](https://docs.aws.amazon.com/solutions/web-store-on-aws/)**
- 🔗 **[Guidance for Building a Containerized and Scalable Web Application on AWS](https://docs.aws.amazon.com/solutions/building-a-containerized-and-scalable-web-application-on-aws/)**
