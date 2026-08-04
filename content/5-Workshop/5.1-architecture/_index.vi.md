---
title: "Tổng quan & Kiến trúc"
date: 2024-01-01
weight: 1
chapter: false
pre: " <b> 5.1. </b> "
---

# Tổng quan & Kiến trúc

Phân hệ này cung cấp cái nhìn toàn cảnh về kiến trúc hệ thống của **Snaptics API**, phân tích sâu vào các dịch vụ công nghệ được sử dụng, luồng dữ liệu (Data flow) và dự toán chi phí vận hành trên AWS.

## 1. Sơ đồ Kiến trúc Hệ thống

Thiết kế mạng Multi-Stack của Snaptics tuân thủ nghiêm ngặt các nguyên tắc bảo mật: tách biệt tầng Public và Private, kiểm soát luồng truy cập thông qua Application Load Balancer.

![Snaptics System Architecture](/images/5.1.1snaptics-architecture.png)

### Phân tích Luồng Hoạt động (Data Flow)
1. **User Request:** Người dùng gọi API hoặc tải hóa đơn lên thông qua Mobile App.
2. **Compute Routing:** ALB định tuyến request vào các Container .NET đang chạy trên `ECS Fargate` nằm trong mạng Private.
3. **Data Persistance:** ECS xử lý logic, lưu trữ file lên `S3` và giao dịch vào `RDS SQL Server`.
4. **Asynchronous Processing:** ECS đẩy message vào `SQS`. `Hangfire Worker` bốc message này ra xử lý ngầm.
5. **AI Integration:** ECS gọi qua `NAT Gateway` ra ngoài Internet để giao tiếp với `Azure Document Intelligence` hoặc `Gemini API`.

## 2. Tech Stack & AWS Services
- **C# .NET 8 / 9:** Framework lõi xây dựng API.
- **Entity Framework Core (EF Core):** ORM giao tiếp với cơ sở dữ liệu.
- **Hangfire & SignalR:** Chạy tác vụ nền (Background Jobs) và đẩy thông báo thời gian thực (WebSockets).
- **Amazon ECS Fargate:** Đóng gói ứng dụng thành container và chạy không cần EC2.
- **Amazon RDS & S3:** Database quản lý và kho lưu trữ file tĩnh.
- **Amazon SQS / SNS:** Hàng đợi xử lý bất đồng bộ và hệ thống cảnh báo.
- **Google Gemini & Azure Document Intelligence:** Tích hợp OCR và AI tư vấn.

## 3. Phân tích Chi phí (Cost Estimation)
Bảng dự toán chi phí hàng tháng cho môi trường **Production mức cơ bản** tại Region `ap-southeast-1`:

| Dịch vụ AWS | Chi phí dự kiến (USD/tháng) | Lưu ý |
| :--- | :--- | :--- |
| **Amazon VPC (NAT Gateway)** | **~$35.00** | Tính phí theo giờ ($0.059/hr), là chi phí cố định nặng nhất. |
| **Amazon RDS (SQL Server)** | **~$22.00** | Bản Express `db.t3.micro`, Single-AZ. |
| **Application Load Balancer** | **~$18.00** | Tính thêm phụ phí theo số lượng kết nối (LCU). |
| **Amazon ECS Fargate** | **~$10.00** | 1 Task (0.25 vCPU, 1 GB RAM). |
| **Tổng cộng (Ước tính)** | **~$86.50** | **Lưu ý:** Nếu không chạy Workshop nữa, phải dọn dẹp để tránh bị trừ tiền! |
