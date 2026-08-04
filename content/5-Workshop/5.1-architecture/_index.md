---
title: "Overview & Architecture"
date: 2024-01-01
weight: 1
chapter: false
pre: " <b> 5.1. </b> "
---


Before getting hands-on with the AWS Console, it is crucial to thoroughly understand the architecture diagram. This Enterprise architecture applies multiple AWS best practices regarding Security, High Availability, and Cost Optimization.

## 1. Enterprise System Architecture Diagram

![Snaptics System Architecture](/fcj-workshop-template/images/5.1.1snaptics-architecture.jpg)

### Deep Dive into the Data Flow

Take a close look at the numbered black circles in the diagram above. They represent the lifecycle of a user's request:

1. **DNS Resolution (Route 53):** When a user enters the domain `app.snaptics.com` in their browser, the request hits **Amazon Route 53**. Route 53 resolves the domain and points it to the CloudFront distribution.
2. **CDN & Firewall (CloudFront + WAF):** Traffic enters the AWS Global Network via **CloudFront**. At this edge location, **AWS WAF** inspects the request to block malicious payloads (SQL Injection, DDoS). If valid, CloudFront checks its cache. For frontend assets (HTML/JS/CSS), it fetches them from **AWS Amplify**.
3. **VPC Ingress (IGW to ALB):** For dynamic API requests, CloudFront routes traffic through the **Internet Gateway** down to the **Application Load Balancer** residing in the `Public Subnet`.
4. **Compute Layer (ECS Fargate):** The ALB forwards the request to the `.NET Containers` running on **ECS Fargate**, safely isolated within the `Private Subnet`.
5. **Secure Storage (VPC Gateway Endpoint):** When the ECS container needs to save an uploaded invoice image to the **S3 Bucket**, it routes traffic directly through a **Gateway Endpoint**. This keeps the traffic within the internal AWS network, avoiding the expensive NAT Gateway.
6. **Database Persistence (Aurora):** Structured transaction data is saved to the **Aurora & RDS** cluster. The cluster operates in a **Primary/Standby** configuration across two Availability Zones for extreme fault tolerance.
7. **Asynchronous Messaging (SQS):** To keep the API response time lightning fast, AI processing tasks are published to the `snaptics-ai-queue` (Amazon SQS). If a task fails repeatedly, it gets moved to a **Dead Letter Queue (DLQ)** for manual inspection.
8. **NAT Gateway Routing:** For tasks that truly require external internet access, the private ECS containers route traffic through the **NAT Gateway** located in the Public Subnet.
9. **Internet Egress:** The NAT Gateway passes the traffic to the Internet Gateway.
10. **External AI Integration:** The request finally leaves the AWS Cloud to hit **External AI APIs** (Google Gemini, Azure Document Intelligence) to perform OCR and smart financial analysis.

### CI/CD Pipeline Flow 
- **Developer** commits code to the **GitHub Repo**.
- **GitHub Actions** triggers automatically.
- It builds the Docker Image and pushes it to the **Elastic Container Registry (ECR)**.
- It then executes a command to update the ECS Fargate service without any downtime.
- For the frontend, GitHub Actions triggers a build in **AWS Amplify**.

### Observability & Security
- **CloudWatch** aggregates logs from ECS and RDS.
- **AWS Secrets Manager** securely stores database passwords and AI API keys.
- **SNS & AWS Budgets** work together to alert administrators via email if the infrastructure cost exceeds the monthly limit.

---

## 2. Tech Stack Summary

- **Frontend:** Angular/ Hosted on AWS Amplify.
- **Backend Core:** C# .NET 10 / Entity Framework Core / SignalR (WebSockets).
- **Database:** Amazon Aurora & RDS Multi-AZ.
- **Containerization:** Docker / Amazon Elastic Container Registry (ECR).
- **Compute:** Amazon ECS (Fargate) Serverless.
- **Networking:** Route 53, CloudFront, WAF, ALB, VPC Endpoints.
- **CI/CD:** GitHub Actions.
- **AI Services:** Google Gemini API, Azure Document Intelligence.

---

## 3. Advanced Cost Estimation

Because we are deploying an Enterprise-grade architecture, the costs are significantly higher than a basic setup. Below is the estimated monthly cost if left running 24/7 in the `ap-southeast-1` region:

| AWS Service | Configuration | Estimated Cost (USD/mo) |
| :--- | :--- | :--- |
| **Amazon Aurora (RDS)** | db.t3.medium (Primary & Standby Multi-AZ) | **~$100.00** |
| **NAT Gateway** | 1 NAT Gateway, 10 GB Data Processed | **~$35.00** |
| **Application Load Balancer** | 1 ALB running continuously | **~$18.00** |
| **AWS WAF** | 1 Web ACL + Rule evaluations | **~$15.00** |
| **Amazon ECS Fargate** | 1 Task (0.5 vCPU, 2 GB RAM) | **~$15.00** |
| **Secrets Manager** | ~5 Secrets + API calls | **~$2.00** |
| **VPC Endpoint** | Gateway Endpoint for S3 | **Free** |
| **AWS Amplify / CloudFront**| Basic traffic | **~$2.00** |
| **Total (Estimated)** | Production-Ready Environment | **~$187.00** |

> [!WARNING]
> **Extremely Important:** If you are running this workshop for learning purposes on your personal account, **YOU MUST** execute the steps in the **5.9 Cleanup** section immediately after testing to destroy the resources. Leaving Aurora Multi-AZ and NAT Gateway running will drain your credit card rapidly!
