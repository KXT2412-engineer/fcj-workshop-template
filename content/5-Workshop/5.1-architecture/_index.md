---
title: "Overview & Architecture"
date: 2024-01-01
weight: 1
chapter: false
pre: " <b> 5.1. </b> "
---

# Overview & Architecture

This module provides a comprehensive overview of the **Snaptics API** system architecture, diving deep into the technology services used, data flow, and operational cost estimation on AWS.

## 1. System Architecture Diagram

The Snaptics Multi-Stack network design strictly adheres to security principles: isolating Public and Private tiers, and controlling traffic flow through an Application Load Balancer and specific Security Groups.

![Snaptics System Architecture](/images/5.1.1snaptics-architecture.png)

### Data Flow Analysis
1. **User Request:** Users call the API or upload invoices via the Mobile App.
2. **Compute Routing:** ALB routes requests to the .NET Containers running on `ECS Fargate` located in the Private network.
3. **Data Persistence:** ECS processes business logic, saves physical files to `S3`, and stores financial transactions to `RDS SQL Server`.
4. **Asynchronous Processing:** ECS pushes a message to `SQS`. The `Hangfire Worker` picks up this message to process in the background.
5. **AI Integration:** ECS calls out through the `NAT Gateway` to communicate with `Azure Document Intelligence` or `Gemini API`.

## 2. Tech Stack & AWS Services
- **C# .NET 8 / 9:** Core API framework.
- **Entity Framework Core (EF Core):** ORM to communicate with SQL Server.
- **Hangfire & SignalR:** Background job processing and real-time WebSockets.
- **Amazon ECS Fargate:** Runs Docker containers without EC2 servers.
- **Amazon RDS & S3:** Managed Database and Object Storage.
- **Amazon SQS / SNS:** Message queue and notification system.
- **Google Gemini & Azure Document Intelligence:** Smart AI processing and OCR.

## 3. Cost Estimation
Estimated monthly cost for a **Basic Production** environment serving around 10,000 requests per month:

| AWS Service | Estimated Cost (USD/mo) | Note |
| :--- | :--- | :--- |
| **Amazon VPC (NAT Gateway)** | **~$35.00** | Hourly rate applies. Heaviest fixed cost. |
| **Amazon RDS (SQL Server)** | **~$22.00** | `db.t3.micro`, Single-AZ, Express Edition. |
| **Application Load Balancer** | **~$18.00** | Additional fees apply based on connections. |
| **Amazon ECS Fargate** | **~$10.00** | 1 Task (0.25 vCPU, 1 GB RAM). |
| **Total (Estimated)** | **~$86.50** | Ensure you **Cleanup** resources to avoid charges! |
