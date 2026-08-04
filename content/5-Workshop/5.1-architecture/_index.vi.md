---
title: "Tổng quan & Kiến trúc"
date: 2024-01-01
weight: 1
chapter: false
pre: " <b> 5.1. </b> "
---


Trước khi bắt tay vào cấu hình thực tế trên AWS Console, việc thấu hiểu tường tận bản vẽ kiến trúc là bắt buộc. Sơ đồ Enterprise này áp dụng hàng loạt các tiêu chuẩn (Best Practices) của AWS về Bảo mật, Tính sẵn sàng cao (High Availability) và Tối ưu chi phí mạng.

## 1. Sơ đồ Kiến trúc Hệ thống Enterprise

![Snaptics System Architecture](/fcj-workshop-template/images/5.1.1snaptics-architecture.jpg)

### Phân tích Luồng Dữ Liệu Chuyên sâu 

Hãy nhìn kỹ vào các vòng tròn số màu đen trên sơ đồ. Chúng thể hiện vòng đời của một Request từ người dùng:

1. **Phân giải DNS (Route 53):** Khi người dùng gõ `app.snaptics.com` vào trình duyệt, request sẽ chạm tới **Amazon Route 53**. Route 53 sẽ định tuyến domain này thẳng vào mạn lưới CloudFront.
2. **CDN & Tường lửa (CloudFront + WAF):** Request đi vào mạng lưới toàn cầu của AWS qua **CloudFront**. Tại đây, **AWS WAF** sẽ quét request để chặn các luồng traffic độc hại (SQL Injection, DDoS). Nếu an toàn, CloudFront sẽ lấy nội dung Frontend (HTML/JS) từ **AWS Amplify** để trả về cực nhanh cho người dùng.
3. **Xâm nhập VPC (IGW tới ALB):** Đối với các request gọi API động (Backend), CloudFront sẽ điều hướng luồng mạng xuyên qua **Internet Gateway**, đi vào **Application Load Balancer (ALB)** đang đứng gác ở `Public Subnet`.
4. **Tầng Compute (ECS Fargate):** ALB đóng vai trò phân tải, đẩy request vào các container `.NET` đang chạy trên **ECS Fargate**. Các server này được giấu kín đáo và an toàn tuyệt đối bên trong `Private Subnet`.
5. **Lưu trữ An toàn (VPC Gateway Endpoint):** Khi Code .NET cần lưu file ảnh hóa đơn lên **S3 Bucket**, nó KHÔNG đi đường vòng ra Internet. Nhờ có **Gateway Endpoint**, dữ liệu được bắn trực tiếp từ mạng nội bộ VPC sang S3, giúp bảo mật tuyệt đối và loại bỏ hoàn toàn phí băng thông của NAT Gateway!
6. **Lưu trữ CSDL (Aurora):** Dữ liệu giao dịch được ghi vào cụm **Aurora & RDS**. Cụm này chạy chế độ **Primary/Standby** trải dài trên 2 Availability Zones. Nếu server chính sập, server phụ lập tức lên thay mà không gây sập hệ thống (High Availability).
7. **Xử lý Bất đồng bộ (SQS):** Các tác vụ nặng như gọi AI sẽ được ném vào hàng đợi `snaptics-ai-queue`. Đặc biệt, nếu tác vụ bị lỗi quá nhiều lần, nó sẽ bị tống vào **Dead Letter Queue (DLQ)** để chờ Admin vào xử lý thủ công, đảm bảo không nghẽn hệ thống.
8. **Định tuyến NAT Gateway:** Đối với các tác vụ thực sự cần kết nối ra Internet bên ngoài, ECS Container (ở mạng Private) sẽ phải đi qua cổng **NAT Gateway** (ở mạng Public).
9. **Lối ra Internet:** NAT Gateway chuyển tiếp luồng mạng tới Internet Gateway.
10. **Tích hợp AI Ngoại vi:** Request chính thức rời khỏi AWS Cloud, kết nối đến **External AI APIs** (Google Gemini, Azure Document Intelligence) để đọc hóa đơn và phân tích tài chính.

### Luồng Triển khai Tự động CI/CD 
- **Developer** viết code và Push lên **GitHub Repo**.
- **GitHub Actions** tự động bắt sự kiện.
- Nó tiến hành Build Docker Image và Push thẳng lên **Elastic Container Registry (ECR)**.
- Sau đó, GitHub Actions ra lệnh cho ECS Fargate cập nhật phiên bản mới (Zero downtime).
- Đối với Frontend, GitHub Actions tự động trigger **AWS Amplify** để deploy giao diện mới.

### Giám sát & Bảo mật 
- **CloudWatch** thu thập toàn bộ log sinh ra từ ECS và DB.
- **AWS Secrets Manager** là két sắt mã hóa lưu giữ toàn bộ mật khẩu DB và API Key của AI.
- **SNS & AWS Budgets** phối hợp giám sát, tự động gửi Email cảnh báo nếu hóa đơn tiền điện toán AWS vượt quá ngân sách cho phép.

---

## 2. Tổng hợp Tech Stack

- **Frontend:** Angular/ Hosting tự động trên AWS Amplify.
- **Backend Core:** C# .NET 10 / Entity Framework Core / SignalR (WebSockets).
- **Database:** Amazon Aurora & RDS Multi-AZ (Chống lỗi phần cứng).
- **Containerization:** Docker / Amazon Elastic Container Registry (ECR).
- **Compute:** Amazon ECS (Fargate) Serverless.
- **Networking:** Route 53, CloudFront, WAF, ALB, VPC Endpoints, NAT Gateway.
- **CI/CD:** Tự động hóa bằng GitHub Actions.
- **AI Services:** Google Gemini API, Azure Document Intelligence.

---

## 3. Dự toán Chi phí 

Vì đây là kiến trúc chuẩn Enterprise, việc sử dụng các dịch vụ cao cấp như Aurora Multi-AZ hay WAF sẽ làm tăng đáng kể chi phí duy trì. Dưới đây là ước tính nếu bạn để hệ thống chạy 24/7 trong 1 tháng tại region `ap-southeast-1`:

| Dịch vụ AWS | Cấu hình | Chi phí dự kiến (USD/tháng) |
| :--- | :--- | :--- |
| **Amazon Aurora (RDS)** | db.t3.medium (Primary & Standby Multi-AZ) | **~$100.00** |
| **NAT Gateway** | 1 NAT Gateway, 10 GB Data Processed | **~$35.00** |
| **Application Load Balancer** | 1 ALB chạy liên tục | **~$18.00** |
| **AWS WAF** | 1 Web ACL + Rule evaluations | **~$15.00** |
| **Amazon ECS Fargate** | 1 Task (0.5 vCPU, 2 GB RAM) | **~$15.00** |
| **Secrets Manager** | Quản lý ~5 Secrets + Số lượng truy vấn API | **~$2.00** |
| **VPC Endpoint** | Gateway Endpoint kết nối tới S3 | **Miễn phí** |
| **AWS Amplify / CloudFront**| Traffic ở mức cơ bản | **~$2.00** |
| **Tổng cộng (Ước tính)** | Hệ thống Production-Ready | **~$187.00** |

> [!WARNING]
> **CẢNH BÁO TÀI CHÍNH CỰC KỲ QUAN TRỌNG:** Nếu bạn đang thực hành Workshop này trên tài khoản AWS cá nhân để học tập, **BẠN BẮT BUỘC** phải làm theo mục **5.9 Dọn dẹp Tài nguyên (Cleanup)** ngay sau khi test xong. Việc quên tắt Aurora Multi-AZ và NAT Gateway có thể "đốt" sạch tiền trong thẻ tín dụng của bạn chỉ trong vài ngày!
