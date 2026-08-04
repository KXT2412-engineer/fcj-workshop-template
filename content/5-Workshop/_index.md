---
title: "Workshop"
date: 2024-01-01
weight: 5
chapter: false
pre: " <b> 5. </b> "
---

# Deploy Snaptics API on AWS (Multi-Stack Pattern)

**Snaptics** is a smart financial core system built on **.NET 8/9**. The system integrates leading AI services (Google Gemini, Azure Document Intelligence) to extract invoice data, combining an Event-Driven architecture with AWS SQS/SNS and background processing via Hangfire.

In this advanced workshop, we will apply the **Multi-Stack Architecture** model to deploy the entire Snaptics system on AWS. The Backend API deployment will be executed as Serverless Containers on **Amazon ECS Fargate**, eliminating the burden of managing EC2 infrastructure.

#### Workshop Structure

1. **Overview & Architecture**: System design, tech stack, and cost estimation.
2. **Prerequisites**: Local environment setup and IAM permissions.
3. **VPC & Security**: Secure networking with Public/Private Subnets.
4. **Database, Storage & Secrets**: Deploying Amazon RDS SQL Server, S3, and SSM Parameter Store.
5. **Messaging & AI**: Integrating AI Insights and configuring SQS/SNS queues.
6. **Compute & Load Balancing (ECS)**: Containerizing the .NET application and running on Fargate.
7. **CI/CD Automation**: Blue/Green Deployment with PowerShell scripts.
8. **E2E Testing**: Real-time data flow validation via SignalR and Swagger.
9. **Cleanup**: AWS resource termination.
