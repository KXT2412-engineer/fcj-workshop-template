---
title: "Database, Storage & Secrets"
date: 2024-01-01
weight: 4
chapter: false
pre: " <b> 5.4. </b> "
---

# Database, Storage & Secrets

In this module, we will set up the Data Storage Layer for both structured and unstructured data, as well as securely manage secrets.

## 1. Amazon RDS SQL Server
Snaptics relies on Microsoft SQL Server for transactional data.
- **DB Subnet Group:** Create `snaptics-db-subnet-group` and add the two **Private Subnets**.
- **Create Database:** 
  - **Engine:** Microsoft SQL Server (Express Edition for Free Tier).
  - **Identifier:** `snaptics-db`
  - **Credentials:** `admin` / `Snaptics@StrongPass123!`
  - **Connectivity:** `snaptics-vpc`, `snaptics-db-subnet-group`. **Public access: No**.
  - **Security group:** `snaptics-rds-sg`.
Wait for it to become **Available** and copy the **Endpoint**.

## 2. Amazon S3 for Uploads
User uploaded invoice images are stored in S3.
- **Create Bucket:** `s3-bucket-snaptics-123` in `ap-southeast-1`.
- **Block Public Access:** **ON** (Keep files secure).
- **CORS Configuration (Permissions tab):** Allows frontend applications to use Pre-signed URLs directly.
```json
[
    {
        "AllowedMethods": [ "GET", "PUT", "POST" ],
        "AllowedOrigins": [ "*" ],
        "AllowedHeaders": [ "*" ]
    }
]
```

## 3. Secrets Management (SSM Parameter Store)
Store environment variables in AWS Systems Manager instead of hardcoding them. Create the following as `SecureString`:
1. **SQL Server Connection String:** `/Snaptics/Production/ConnectionStrings:DefaultConnection` ➔ `Server=<ENDPOINT>,1433;Database=SnapticsDB;User Id=admin;Password=Snaptics@StrongPass123!;TrustServerCertificate=True;`
2. **JWT Secret Key:** `/Snaptics/Production/TokenKey`
3. **Google Gemini API:** `/Snaptics/Production/AiSettings:GeminiApiKey`
4. **Azure Document Intelligence:** `/Snaptics/Production/AiSettings:AzureDocIntelKey`

In .NET `Program.cs`, these are automatically loaded:
```csharp
builder.Configuration.AddSystemsManager(configureSource => {
    configureSource.Path = "/Snaptics/Production/";
    configureSource.ReloadAfter = TimeSpan.FromMinutes(5);
});
```
