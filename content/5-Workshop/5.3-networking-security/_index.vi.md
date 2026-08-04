---
title: "Mạng & Bảo mật"
date: 2024-01-01
weight: 3
chapter: false
pre: " <b> 5.3. </b> "
---


Để cô lập Snaptics khỏi rủi ro từ Internet, chúng ta sẽ xây dựng một kiến trúc Virtual Private Cloud (VPC) phân tầng.

## 1. Thiết kế VPC & Subnets

Tạo một VPC làm biên giới mạng cho hệ thống.
- **Name tag:** `snaptics-vpc`
- **IPv4 CIDR block:** `10.0.0.0/16`

**Quy hoạch Subnet (tại `ap-southeast-1`):**
Tạo 4 Subnet:
1. **`snaptics-public-1a`**: `10.0.1.0/24` (Chứa ALB và NAT Gateway)
2. **`snaptics-public-1b`**: `10.0.2.0/24` (Chứa ALB)
3. **`snaptics-private-1a`**: `10.0.3.0/24` (Chứa ECS Task 1 & RDS)
4. **`snaptics-private-1b`**: `10.0.4.0/24` (Chứa ECS Task 2 & RDS)

> [!IMPORTANT]
> Đối với 2 mạng Public, hãy vào Edit subnet settings và bật **Enable auto-assign public IPv4 address**.

## 2. Gateways & Định tuyến

- **Internet Gateway (IGW):** Tạo `snaptics-igw` và Attach vào `snaptics-vpc`.
- **NAT Gateway:** Tạo `snaptics-nat-gw` nằm ở mạng `snaptics-public-1a` và cấp một Elastic IP tĩnh. Nó giúp container ở mạng Private có đường gọi ra API AI bên ngoài.
- **Route Tables (Bảng định tuyến):**
  - Tạo `snaptics-public-rt`, trỏ `0.0.0.0/0` ra `snaptics-igw`, gắn vào 2 mạng Public.
  - Tạo `snaptics-private-rt`, trỏ `0.0.0.0/0` ra `snaptics-nat-gw`, gắn vào 2 mạng Private.

## 3. Cấu hình Security Groups

Vào EC2 thiết lập tường lửa chặt chẽ theo từng lớp:
- **ALB SG (`snaptics-alb-sg`):** Mở Inbound HTTP (80) và HTTPS (443) từ `0.0.0.0/0`.
- **ECS SG (`snaptics-ecs-sg`):** Mở Inbound TCP (8080) CHỈ TỪ `snaptics-alb-sg`. (Container không được phép nhận request trực tiếp).
- **RDS SG (`snaptics-rds-sg`):** Mở Inbound MS SQL (1433) CHỈ TỪ `snaptics-ecs-sg`.
