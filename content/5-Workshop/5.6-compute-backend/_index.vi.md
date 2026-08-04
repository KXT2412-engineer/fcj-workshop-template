---
title: "Compute & Load Balancing (ECS)"
date: 2024-01-01
weight: 6
chapter: false
pre: " <b> 5.6. </b> "
---

# Compute & Load Balancing (ECS)

Đưa mã nguồn .NET của Snaptics lên chạy trực tiếp trên Đám mây qua mô hình Serverless Containers sử dụng **Amazon ECS Fargate** và Load Balancer.

## 1. Đóng gói (Dockerizing) .NET API
Sử dụng `Dockerfile` multi-stage cực nhẹ sau:
```dockerfile
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 8080

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["API/API.csproj", "API/"]
RUN dotnet restore "API/API.csproj"
COPY . .
WORKDIR "/src/API"
RUN dotnet build "API.csproj" -c Release -o /app/build
RUN dotnet publish "API.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "API.dll"]
```
**Push Image lên ECR:** Tạo repository Private tên `snaptics-api` trên Amazon ECR. Dùng lệnh `docker push` đẩy image lên.

## 2. Application Load Balancer (ALB)
ALB đứng ở ngoài Public Subnet để nhận request và phân tải vào mạng Private.
- **Target Group:** Tạo `snaptics-tg`. Bắt buộc chọn loại Target là **IP addresses**. Cổng HTTP 8080.
- **Load Balancer:** Tạo `snaptics-alb` (Internet-facing). Chọn 2 mạng Public Subnet. Gắn Security Group `snaptics-alb-sg`. Listener cổng 80 Forward vào `snaptics-tg`.

## 3. ECS Cluster & Task Definition
- **Khởi tạo Cluster:** Tạo `Snaptics-Cluster` (Hạ tầng: AWS Fargate).
- **Task Definition:** Tạo `snaptics-api-task`. Cấp 1 vCPU, 2 GB RAM. Gắn 2 Role IAM (`snaptics-ecs-task-role` và Execution Role). Khai báo Image URI từ ECR, port 8080.
- **Triển khai Service:** Mở Cluster tạo Service mới. Chạy 2 bản sao (Tasks). Đặt vào 2 mạng **Private Subnets** (Tắt Public IP). Gắn `snaptics-ecs-sg`. Cấu hình kết nối ALB và Target Group đã tạo. Đợi 3 phút để hệ thống lên trạng thái RUNNING.
