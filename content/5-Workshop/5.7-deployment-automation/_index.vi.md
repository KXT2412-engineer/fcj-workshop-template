---
title: "Tự động hóa Triển khai (CI/CD)"
date: 2024-01-01
weight: 7
chapter: false
pre: " <b> 5.7. </b> "
---


Snaptics áp dụng phương pháp tự động hóa bằng Script cục bộ (Local CI/CD) để tiết kiệm thời gian và tránh lỗi con người.

## 1. Script Triển khai (`deploy.ps1`)
Khi làm xong tính năng mới, bạn chỉ cần gõ 1 lệnh `.\deploy.ps1` trong terminal:
```powershell
$ECR_REGISTRY = "<ACCOUNT_ID>.dkr.ecr.ap-southeast-1.amazonaws.com"
$IMAGE_NAME = "snaptics-api"
$CLUSTER_NAME = "Snaptics-Cluster"
$SERVICE_NAME = "snaptics-backend-service"

# Đăng nhập AWS ECR
aws ecr get-login-password --region ap-southeast-1 | docker login --username AWS --password-stdin $ECR_REGISTRY
# Build và Đẩy Image lên Đám mây
docker build -t ${IMAGE_NAME}:latest .
docker tag ${IMAGE_NAME}:latest ${ECR_REGISTRY}/${IMAGE_NAME}:latest
docker push ${ECR_REGISTRY}/${IMAGE_NAME}:latest

# Ra lệnh ECS cập nhật phiên bản (Force New Deployment)
aws ecr update-service --cluster $CLUSTER_NAME --service $SERVICE_NAME --force-new-deployment
```

## 2. Cơ chế Zero-Downtime
Lệnh `--force-new-deployment` kích hoạt tính năng **Rolling Update (Cập nhật cuốn chiếu)**, giúp hệ thống không bị gián đoạn (Zero downtime):
1. **Khởi tạo Task mới:** ECS kéo image mới về và bật lên.
2. **Kiểm tra Sức khỏe:** ALB liên tục ping cổng 8080, đến khi Task khỏe 100% (200 OK) thì mới cấp phép hoạt động.
3. **Chuyển luồng:** ALB điều hướng request của người dùng vào Task mới.
4. **Hủy Task cũ (Draining):** ALB ngừng ném request vào Task cũ, đợi xử lý xong request tồn đọng rồi mới ra lệnh tiêu diệt Task cũ.
