---
title: "Chuẩn bị Môi trường"
date: 2024-01-01
weight: 2
chapter: false
pre: " <b> 5.2. </b> "
---

# Chuẩn bị Môi trường (Prerequisites)

Để quá trình triển khai diễn ra suôn sẻ, bạn cần chuẩn bị công cụ ở Local và phân quyền IAM hợp lệ trên AWS.

## 1. Thiết lập Môi trường Local

Cài đặt các công cụ sau trên máy tính của bạn:

- **AWS CLI v2:** Bắt buộc để tương tác với tài nguyên AWS qua terminal, nhất là khi chạy script `deploy.ps1`.
  ```bash
  aws configure
  ```
  Nhập Access Key, Secret Key, đặt region mặc định là `ap-southeast-1`, format là `json`.
- **Docker Desktop:** Để đóng gói ứng dụng .NET thành Image trước khi đưa lên ECS Fargate.
- **.NET 8 / 9 SDK:** Hỗ trợ chạy Entity Framework Migrations tại máy.
- **AI API Keys:** 
  - Lấy Google Gemini API Key từ Google AI Studio.
  - Lấy Endpoint và Key của Azure Document Intelligence từ Azure Portal.

## 2. Phân quyền IAM Roles

Trong AWS Console, truy cập vào **IAM ➔ Roles ➔ Create role** và tạo 2 Role:

### A. ECS Task Execution Role (`ecsTaskExecutionRole`)
Cấp quyền cho nền tảng ECS tự động pull Docker image từ ECR và tạo log trong CloudWatch.
- **Trusted Entity:** `Elastic Container Service Task`
- **Managed Policy:** `AmazonECSTaskExecutionRolePolicy`

### B. Snaptics ECS Task Role (`snaptics-ecs-task-role`)
Cấp quyền cho chính đoạn code C# .NET của bạn đang thực thi bên trong container.
- **Trusted Entity:** `Elastic Container Service Task`
- **Inline Policy (JSON):** Cấp quyền truy cập S3, SQS, SNS và SSM Parameter Store.
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [ "ssm:GetParameters", "ssm:GetParametersByPath" ],
            "Resource": "arn:aws:ssm:ap-southeast-1:*:parameter/Snaptics/Production/*"
        },
        {
            "Effect": "Allow",
            "Action": [ "s3:PutObject", "s3:GetObject", "s3:DeleteObject", "s3:ListBucket" ],
            "Resource": [ "arn:aws:s3:::s3-bucket-snaptics", "arn:aws:s3:::s3-bucket-snaptics/*" ]
        },
        {
            "Effect": "Allow",
            "Action": [ "sqs:SendMessage", "sqs:ReceiveMessage", "sqs:DeleteMessage", "sns:Publish" ],
            "Resource": "*"
        }
    ]
}
```
