---
title: "Database, Storage & Secrets"
date: 2024-01-01
weight: 4
chapter: false
pre: " <b> 5.4. </b> "
---


In this module, we will provision the data persistence layer. Because we are building a production-ready application, we replace standard databases and basic config files with AWS SQL Server and Parameter Store.

## 1. Amazon RDS for SQL Server (Multi-AZ)

Snaptics requires a robust, highly available database. SQL Server automatically replicates your data across multiple Availability Zones, ensuring zero data loss if a data center goes offline.

### A. Create DB Subnet Group
- Open **Amazon RDS ➔ Subnet groups ➔ Create DB subnet group**.
- **Name:** `snaptics-db-subnet-group`.
- **VPC:** `snaptics-vpc`.
- **Subnets:** Select your 2 Availability Zones and check ONLY the **2 Private Subnets** (`10.0.3.0/24` and `10.0.4.0/24`).

### B. Create SQL Server Cluster
- Open **RDS ➔ Databases ➔ Create database**.
- **Engine options:** Select **Amazon RDS for SQL Server**.
- **Edition:** Choose MySQL or PostgreSQL compatible (Depending on your EF Core provider in the `.NET` code).
- **Templates:** Production.
- **Settings:**
  - DB cluster identifier: `snaptics-aurora-cluster`
  - Master username: `admin`
  - Master password: Generate a strong password (e.g., `SnapticsAurora2024!`).
- **Instance configuration:** Choose a serverless or provisioned instance class (e.g., `db.t3.medium`).
- **Availability & Durability:** **Create an SQL Server Replica/Reader node in a different AZ** (Multi-AZ deployment).
- **Connectivity:**
  - VPC: `snaptics-vpc`
  - DB subnet group: `snaptics-db-subnet-group`
  - **Public access: No** (Crucial for security).
  - VPC security group: Choose the `snaptics-aurora-sg` created earlier.
- Click **Create database**. Wait ~15 minutes and copy the **Writer Endpoint**.

## 2. Secure Storage (Amazon S3)

Invoice images must be stored efficiently. Since we configured a **VPC Gateway Endpoint** in the previous step, our containers can save files to S3 internally without internet bandwidth costs.

- Open **Amazon S3 ➔ Create bucket**.
- **Bucket name:** `s3-bucket-snaptics-enterprise` (Must be globally unique).
- **Region:** `ap-southeast-1`.
- **Block Public Access:** **ON** (Keep invoices 100% private).
- **CORS Configuration (Permissions tab):** Allows frontend applications hosted on AWS Amplify to fetch pre-signed URLs directly.
```json
[
    {
        "AllowedMethods": [ "GET", "PUT", "POST" ],
        "AllowedOrigins": [ "https://your-amplify-app-url.com" ],
        "AllowedHeaders": [ "*" ]
    }
]
```

## 3. Secrets Management (AWS Systems Manager Parameter Store)

Never hardcode your SQL Server DB password or AI API Keys in your GitHub repo! Instead of SSM Parameter Store, Enterprise architectures favor AWS Systems Manager Parameter Store because it supports automatic password rotation.

- Go to **AWS Systems Manager Parameter Store ➔ Store a new secret**.
- **Secret type:** Choose **Other type of secret**.
- **Key/value pairs:** Add the following keys:
  - `DbConnectionString`: `Server=<AURORA_ENDPOINT>,3306;Database=SnapticsDB;Uid=admin;Pwd=SnapticsAurora2024!;`
  - `JwtKey`: `Enter_a_very_long_secure_string_here_for_token_signing`
  - `GeminiApiKey`: `Paste_your_google_ai_key`
  - `AzureDocIntelKey`: `Paste_your_azure_key`
  - `AzureDocIntelEndpoint`: `Paste_your_azure_url`
- **Secret name:** `/snaptics/prod/db-connection`
- Click **Next** and **Store**.

In your `.NET` `Program.cs`, install the `Amazon.Extensions.Configuration.SystemsManager` (Wait, for Parameter Store, install `Amazon.SecretsManager.Extensions.Caching` or use the AWS SDK) to automatically inject these secrets during application startup without exposing them in `appsettings.json`.
