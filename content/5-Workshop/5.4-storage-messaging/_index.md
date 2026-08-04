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
- **Edition:** Choose SQL Server Express or Standard.
- **Templates:** Production.
- **Settings:**
  - DB cluster identifier: `snaptics-sql-server`
  - Master username: `admin`
  - Master password: Generate a strong password (e.g., `SnapticsAurora2024!`).
- **Instance configuration:** Choose a serverless or provisioned instance class (e.g., `db.t3.medium`).
- **Availability & Durability:** **Create an SQL Server Replica/Reader node in a different AZ** (Multi-AZ deployment).
- **Connectivity:**
  - VPC: `snaptics-vpc`
  - DB subnet group: `snaptics-db-subnet-group`
  - **Public access: No** (Crucial for security).
  - VPC security group: Choose the `snaptics-db-sg` created earlier.
- Click **Create database**. Wait ~15 minutes and copy the **Writer Endpoint**.

## 2. Secure Storage (Amazon S3)

Invoice images must be stored efficiently. Since we configured a **VPC Gateway Endpoint** in the previous step, our containers can save files to S3 internally without internet bandwidth costs.

- Open **Amazon S3 ➔ Create bucket**.
- **Bucket name:** `s3-bucket-snaptics` (Must be globally unique).
- **Region:** `ap-southeast-1`.
- **Block Public Access:** **ON** (Keep invoices 100% private).
- **CORS Configuration (Permissions tab):** Allows frontend applications hosted on AWS Amplify to fetch pre-signed URLs directly.
```json
[
    {
        "AllowedMethods": [ "GET", "PUT", "POST" ],
        "AllowedOrigins": [ "*" ],
        "AllowedHeaders": [ "*" ]
    }
]
```

## 3. Parameter Management (AWS Systems Manager Parameter Store)

Never hardcode your SQL Server DB password or AI API Keys in your GitHub repo! We use **AWS Systems Manager Parameter Store** to inject these securely at runtime.

- Go to **AWS Systems Manager -> Parameter Store -> Create parameter**.
- **Name:** `/Snaptics/Production/ConnectionStrings:DefaultConnection`
- **Type:** SecureString
- **Value:** Your actual database connection string.
- Repeat this for other required keys like `/Snaptics/Production/TokenKey`, `/Snaptics/Production/AiSettings:GeminiApiKey`, `/Snaptics/Production/AWS:AccessKey`, etc.