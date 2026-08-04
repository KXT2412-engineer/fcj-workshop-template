---
title: "Compute & Load Balancing (ECS)"
date: 2024-01-01
weight: 6
chapter: false
pre: " <b> 5.6. </b> "
---


Deploy the Snaptics .NET codebase as Serverless Containers using **Amazon ECS Fargate** and an Application Load Balancer.

## 1. Dockerizing the .NET API
Use this multi-stage `Dockerfile` to build a lightweight image:
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
**Push to ECR:** Create a Private repository `snaptics-api` on Amazon ECR and push the image via AWS CLI/Docker CLI.

## 2. Application Load Balancer (ALB)
ALB sits in the Public Subnet to route incoming traffic to Private containers.
- **Target Group:** Create `snaptics-tg`. Must choose **IP addresses** as the target type. Protocol HTTP 8080.
- **Load Balancer:** Create `snaptics-alb` (Internet-facing). Select both Public Subnets. Apply `snaptics-alb-sg`. Set the listener (Port 80) to forward traffic to `snaptics-tg`.

## 3. ECS Cluster & Task Definition
- **Create Cluster:** Name it `Snaptics-Cluster` (Infrastructure: AWS Fargate).
- **Task Definition:** Create `snaptics-api-task`. Set CPU (1 vCPU) and RAM (2 GB). Assign `snaptics-ecs-task-role` and `ecsTaskExecutionRole`. Point the container to your ECR Image URI at port 8080.
- **Deploy Service:** Create a Service inside the cluster. Set **Desired tasks** to 2. Place it in the 2 Private Subnets (Turn off Public IP). Apply `snaptics-ecs-sg`. Link it to the ALB and Target Group created earlier.
