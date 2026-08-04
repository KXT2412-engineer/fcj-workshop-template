---
title: "Dọn dẹp Tài nguyên (Cleanup)"
date: 2024-01-01
weight: 9
chapter: false
pre: " <b> 5.9. </b> "
---

# Dọn dẹp Tài nguyên (Cleanup)

Bước dọn dẹp rất quan trọng để tránh bị trừ tiền oan. Hãy thực hiện tuần tự để tránh lỗi khóa chéo tài nguyên.

1. **ECS Fargate:** Vào cụm Cluster, sửa `Desired tasks` của Service về 0. Đợi task tắt hẳn. Xóa Service. Xóa Cluster.
2. **Load Balancer:** Xóa Load Balancer (ALB). Xóa Target Group.
3. **Database RDS:** Xóa Database, nhớ BỎ tick tạo snapshot backup cuối cùng và gõ chữ `delete me`.
4. **NAT Gateway & Elastic IP:** Xóa NAT Gateway. Chờ 3 phút cho nó biến mất hẳn, sau đó phải vào mục Elastic IP ấn Release IP (nếu quên AWS sẽ thu phí giữ IP).
5. **Tài nguyên rời:** Xóa sạch (Empty) các file trong bucket S3 rồi mới xóa bucket. Xóa ECR repository, queue SQS, topic SNS và các Parameter Store.
6. **VPC:** Xóa mạng `snaptics-vpc`. Hành động này sẽ tự động dọn dẹp sạch sẽ toàn bộ Subnets, Route Tables, Internet Gateways và Security Groups chỉ trong 1 cú click.
