---
title: "Bản đề xuất"
date: 2026-05-18
weight: 2
chapter: false
pre: " <b> 2. </b> "
---

# SMARTINVOICE SHIELD

## Hệ thống Quản trị & Rà soát Rủi ro Hóa đơn Điện tử trên nền tảng AWS

### 1. Tổng quan dự án

SmartInvoice Shield là một hệ thống SaaS (Software as a Service) được thiết kế chuyên biệt nhằm cung cấp giải pháp toàn diện cho các doanh nghiệp Việt Nam trong việc quản trị và rà soát rủi ro hóa đơn điện tử. Nền tảng tự động hóa quy trình trích xuất dữ liệu đa định dạng (XML, PDF, Ảnh) thông qua AI, đồng thời thực thi bộ quy tắc kiểm tra tuân thủ 3 lớp (Cấu trúc Lược đồ XML, Chữ ký số điện tử chuẩn W3C, Logic Nghiệp vụ & Dòng tiền) tối ưu hóa theo Nghị định 123/2020/NĐ-CP và Quyết định 78/QĐ-TCT.

Bằng việc tận dụng sức mạnh của các dịch vụ AWS Serverless và Managed Services (Elastic Beanstalk, ECS Fargate, S3, RDS, Cognito, SQS), SmartInvoice Shield chuyển đổi hệ thống lưu trữ thụ động thành một rào chắn kiểm duyệt chủ động (active firewall). Nó mang lại trải nghiệm xử lý tự động khối lượng dữ liệu khổng lồ với độ trễ thấp, đảm bảo tính khả dụng cao (Multi-AZ), tối ưu chi phí vận hành và bảo vệ hoàn hảo trước mạng lưới lây nhiễm rủi ro tài chính.

### 2. Đặt vấn đề

**Vấn đề hiện tại**
Tại nhiều doanh nghiệp, quy trình xử lý hóa đơn đầu vào vẫn phụ thuộc vào việc nhập liệu thủ công, tiêu tốn 5-10 phút cho mỗi hóa đơn với tỷ lệ sai sót lên đến 15-20%. Nghiêm trọng hơn, các doanh nghiệp đang đối mặt với hiệu ứng "lây nhiễm rủi ro" phi tập trung trong chuỗi cung ứng. Dựa theo bộ tiêu chí chấm điểm tại Quyết định 78/QĐ-TCT của Tổng cục Thuế với lưới lọc ma trận đa chiều, việc vô tình tiếp nhận và hạch toán hóa đơn từ danh sách đen (Blacklist) dẫn tới hệ lụy tàn liệt: bị loại trừ toàn bộ chi phí hợp lý khi tính thuế TNDN và bị từ chối khấu trừ thuế GTGT.

**Giải pháp**
SmartInvoice Shield kiến tạo lại chức năng kế toán bằng một hệ sinh thái kiểm soát dữ liệu tự động:

- **Động cơ Nhập liệu Trí tuệ Nhân tạo (AI-Driven Ingestion Engine):** Tự động bóc tách và chuyển đổi dữ liệu (ETL) các cấu trúc dạng cây phân cấp XML phức tạp chuẩn Quyết định 1450/1510/QĐ-TCT. Cùng với AI (AWS ECS Fargate), hệ thống đọc và số hóa các dữ liệu PDF/Ảnh trực quan.
- **Rà soát Rủi ro Đa Tầng (Multi-tier Risk Alerting):** (1) Kiểm định Lược đồ XSD nguyên bản; (2) Giải mã chứng thực toàn vẹn Chữ ký số cùng hệ thống xác thực chuỗi Mã CQT; (3) Rà soát logic toán học cực kỳ chặt chẽ và tương tác trực tiếp API đối soát để lọc bỏ các Nhà cung cấp nằm trong danh sách đen cảnh báo rủi ro.
- **Lưu trữ Bất biến & Truy vết (Immutable Storage):** Lưu trữ gốc tệp blob XML vô hướng trên Amazon S3 mã hóa AES-256. Hệ thống vận hành Audit Trail bất biến không cho phép thao tác ghi đè theo yêu cầu thanh tra.
- **Giao diện Khám nghiệm Trực quan (Visual Diagnostic GUI):** Tự động phân tách cấu trúc XML khó khan thành bảng điều khiển mã hóa màu sắc, giúp Kế toán trưởng dễ dàng nhận diện mã lỗi kỹ thuật và ra quyết định phê duyệt nghiệp vụ.

### 3. Kiến trúc giải pháp

Dự án áp dụng mô hình kiến trúc lai (Hybrid Architecture) kết hợp giữa Layered Monolith (cho hệ thống Backend lõi .NET) và Microservices (cho dịch vụ AI OCR), giao tiếp bất đồng bộ qua hệ thống Message Queue.

![SmartInvoice Shield Architecture](/images/2-Proposal/architecture_diagram.jpg) _(Nhớ thay đường dẫn ảnh kiến trúc của ông vào đây)_

**Dịch vụ AWS sử dụng**

- **AWS Elastic Beanstalk & ALB:** Cung cấp môi trường Auto Scaling Group cốt lõi cho Backend .NET 9 API, triển khai Multi-AZ đảm bảo High Availability.
- **AWS ECS Fargate:** Trái tim xử lý AI, chạy dưới dạng Serverless Container (Pay-As-You-Go), tự động tắt (Scale-to-Zero) khi không có hóa đơn để tiết kiệm 100% chi phí chạy ngầm.
- **Amazon RDS for PostgreSQL:** Lưu trữ cơ sở dữ liệu quan hệ (Multi-AZ) ẩn trong Private Subnet.
- **Amazon S3:** Lưu trữ file hóa đơn (XML, PDF) với mã hóa SSE-S3. Tích hợp Lifecycle Policy chuyển dữ liệu cũ (>90 ngày) sang Glacier Deep Archive.
- **Amazon SQS:** Xử lý hàng đợi bất đồng bộ (Long-polling) cho các luồng công việc nặng như OCR và xác minh mã số thuế.
- **Amazon Route 53:** Quản lý phân giải DNS và tên miền tùy chỉnh, định tuyến an toàn lưu lượng truy cập internet.
- **AWS Amplify & CloudFront:** Hosting, tự động CI/CD và cung cấp CDN biên cho ứng dụng Frontend React SPA.
- **AWS Cloud Map:** Cung cấp giải pháp Service Discovery nội bộ, hoạt động như một "danh bạ DNS" giữa Backend EC2 và AI OCR Container.
- **Amazon Cognito:** Quản lý định danh (Identity Provider), cấp phát JWT Token và bảo mật người dùng chuẩn quốc tế.
- **AWS Systems Manager (Parameter Store):** Két sắt nội bộ quản lý bảo mật các thông tin nhạy cảm (Database Password, API Keys).

### 4. Triển khai kỹ thuật

Hệ thống được thiết kế để triển khai end-to-end trên nền tảng AWS thông qua các giai đoạn:

1. **Thiết lập Networking & Security:** Tạo VPC với Public/Private Subnets trên 2 AZs. Áp dụng chiến lược tối ưu chi phí bằng cách loại bỏ NAT Gateway, khóa bảo mật hoàn toàn bằng Security Groups.
2. **Thiết lập Database & Storage:** Khởi tạo RDS PostgreSQL trong mạng nội bộ, thiết lập các S3 Buckets và đăng ký Docker Images lên ECR.
3. **Triển khai Core & AI Services:** Khởi chạy ECS Fargate Spot cho dịch vụ OCR và cấu hình Elastic Beanstalk cho Backend .NET. Thiết lập AWS Cloud Map để định tuyến giao tiếp nội bộ.
4. **Triển khai Frontend & Domain:** Triển khai mã nguồn React lên AWS Amplify. Tích hợp Amazon Route 53 để cấu hình tên miền tùy chỉnh.
5. **Giám sát & Quản trị:** Thiết lập CloudWatch Alarms (giám sát CPU, Queue depth, Storage) và SNS Topic để gửi cảnh báo tự động.

### 5. Lộ trình & Mốc triển khai

Thời gian thực hiện dự kiến là 3 tháng (12 tuần) với sự tập trung vào Software Engineering, AI và Cloud Architecture:

- **Tuần 1 - 4 (Nghiên cứu & Nền tảng):** Tập trung vào việc học tập chuyên sâu, làm chủ các dịch vụ cốt lõi của AWS. Đồng thời, thiết kế kiến trúc hệ thống (Architecture Design) và xây dựng cấu trúc cơ sở dữ liệu (Database Schema).
- **Tuần 5 - 9 (Phát triển Tính năng Cốt lõi):** Bắt tay vào lập trình các module phức tạp. Tích hợp mô hình AI OCR, xây dựng các API xử lý logic nghiệp vụ, và thiết lập giao tiếp bất đồng bộ qua hàng đợi Amazon SQS.
- **Tuần 10 - 12 (Triển khai Đám mây & Hoàn thiện):** Chuyển đổi toàn bộ hệ thống từ môi trường local lên AWS Cloud (Production). Đóng gói Docker, thực hiện kiểm thử chịu tải (Load testing), rà soát bảo mật toàn diện và hoàn thiện tài liệu báo cáo dự án.

### 6. Ước tính ngân sách

Hệ thống áp dụng chiến lược **Cost-Optimization Multi-AZ**, loại bỏ các thành phần hạ tầng dư thừa, giúp tiết kiệm tối đa ngân sách vận hành. Dựa trên bảng giá AWS tại khu vực Singapore (ap-southeast-1), chi phí dự kiến như sau:

- **Amazon RDS PostgreSQL (db.t3.micro Multi-AZ):** ~$40.00 USD _(Bao gồm cả node Primary và Standby dự phòng)_
- **AWS Elastic Beanstalk (2x EC2 t3.micro + 1 Application Load Balancer):** ~$42.00 USD
- **Amazon VPC (2x NAT Gateway cho 2 AZ):** ~$86.00 USD
- **ECS Fargate Spot (AI OCR):** Trả phí linh hoạt theo phần nghìn giây khi có hóa đơn _(~$7.00 USD)_
- **Amazon CloudFront, S3, SQS & Cloud Map:** ~$5.00 USD
- **AWS Amplify, Amazon Cognito & Route 53:** 0 USD _(Nằm trong Free Tier / Không đáng kể)_

**Tổng chi phí ước tính:** ~180.00 USD/tháng cho một môi trường Production bảo mật, chống chịu lỗi (Fault-Tolerant) và sẵn sàng phục vụ doanh nghiệp 24/7.

### 7. Đánh giá rủi ro

**Ma trận rủi ro**

- **Nhận diện AI sai lệch (đối với ảnh mờ, rách):** Ảnh hưởng trung bình, xác suất trung bình.
- **Độ trễ từ API bên thứ 3 (VietQR API quá tải):** Ảnh hưởng nhỏ, xác suất cao.
- **Lưu lượng truy cập đột biến (Spike traffic cuối tháng khai thuế):** Ảnh hưởng cao, xác suất thấp.

**Chiến lược giảm thiểu**

- **Đối với AI:** Cung cấp giao diện "Khám nghiệm Dữ liệu Trực quan" cho phép kế toán viên so sánh kết quả trích xuất và bản gốc để chỉnh sửa thủ công (Manual override).
- **Đối với API ngoại vi:** Áp dụng mẫu thiết kế Circuit Breaker và Retry Pattern với Exponential Backoff để chống lỗi dây chuyền.
- **Đối với Traffic:** Auto Scaling Group tự động tăng EC2 (Max 4 nodes) và ECS Task (Max 10 tasks) dựa trên số lượng tin nhắn tồn đọng trong SQS.

**Kế hoạch dự phòng:** Sử dụng kiến trúc Multi-AZ giúp hệ thống tự động Failover khi một Availability Zone (AZ) gặp sự cố phần cứng. Dữ liệu RDS được backup tự động (Point-In-Time Recovery) kết hợp với CloudWatch Alarms theo dõi 24/7.

### 8. Kết quả kỳ vọng

- **Cải tiến kỹ thuật:** Hệ thống vận hành trơn tru theo hướng sự kiện (Event-Driven), đáp ứng độ trễ API P95 < 2s. Độ chính xác trích xuất AI (Textract/VietOCR) cam kết đạt trên 85% đối với các hóa đơn tiếng Việt phức tạp. Khả năng mở rộng ngang (Horizontal Scaling) chịu tải hàng nghìn hóa đơn đồng thời.
- **Giá trị dài hạn:** Cung cấp cho doanh nghiệp một "tấm khiên" vững chắc để chuyển đổi số nghiệp vụ kế toán. Triệt tiêu hoàn toàn sai sót vật lý, minh bạch hóa quy trình phê duyệt, và xây dựng một kho lưu trữ dữ liệu hoàn hảo sẵn sàng cho mọi cuộc thanh tra kiểm toán thuế trong 10 năm tới.
