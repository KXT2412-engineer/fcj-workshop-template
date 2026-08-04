---
title: "CI/CD Automation"
date: 2024-01-01
weight: 7
chapter: false
pre: " <b> 5.7. </b> "
---


Snaptics uses a local PowerShell script to automate the deployment process, eliminating manual steps.

## 1. Deployment Script (`deploy.ps1`)
Whenever you complete a feature, simply run `.\deploy.ps1`:
```powershell
$ECR_REGISTRY = "<ACCOUNT_ID>.dkr.ecr.ap-southeast-1.amazonaws.com"
$IMAGE_NAME = "snaptics-api"
$CLUSTER_NAME = "Snaptics-Cluster"
$SERVICE_NAME = "snaptics-backend-service"

# Log into AWS ECR
aws ecr get-login-password --region ap-southeast-1 | docker login --username AWS --password-stdin $ECR_REGISTRY
# Build and Push Image
docker build -t ${IMAGE_NAME}:latest .
docker tag ${IMAGE_NAME}:latest ${ECR_REGISTRY}/${IMAGE_NAME}:latest
docker push ${ECR_REGISTRY}/${IMAGE_NAME}:latest

# Force ECS to pull new code
aws ecr update-service --cluster $CLUSTER_NAME --service $SERVICE_NAME --force-new-deployment
```

## 2. Zero-Downtime Deployment
The `--force-new-deployment` flag triggers a **Rolling Update** in ECS, resulting in zero downtime:
1. **Provision New Tasks:** ECS pulls the new image and starts new tasks.
2. **Health Check:** ALB pings port 8080 until they are healthy.
3. **Traffic Routing:** ALB shifts incoming user traffic to the new tasks.
4. **Draining:** Old tasks are safely terminated without dropping active requests.
