---
title: "Prerequisites"
date: 2024-01-01
weight: 2
chapter: false
pre: " <b> 5.2. </b> "
---

# Prerequisites

To ensure the deployment of Snaptics goes smoothly, you must set up your Local Environment and configure IAM Permissions.

## 1. Local Environment Setup

Install the following tools on your computer:

- **AWS CLI v2:** Required to interact with AWS resources from the terminal.
  ```bash
  aws configure
  ```
  Provide your Access Key, Secret Key, set default region to `ap-southeast-1`, and format to `json`.
- **Docker Desktop:** Required to build container images for ECS Fargate.
- **.NET 10 SDK:** Useful for running EF Migrations locally.
- **AI API Keys:** 
  - Get a Google Gemini API Key from Google AI Studio.
  - Get an Azure Document Intelligence Endpoint and Key from the Azure Portal.

## 2. IAM Roles Configuration

Go to **IAM ➔ Roles ➔ Create role** and create 2 Roles:

### A. ECS Task Execution Role (`ecsTaskExecutionRole`)
Grants permissions to the ECS platform to pull Docker images from ECR and create logs in CloudWatch.
- **Trusted Entity:** `Elastic Container Service Task`
- **Managed Policy:** `AmazonECSTaskExecutionRolePolicy`

### B. Snaptics ECS Task Role (`snaptics-ecs-task-role`)
Grants permissions to your own C# .NET code executing inside the container.
- **Trusted Entity:** `Elastic Container Service Task`
- **Inline Policy (JSON):**
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [ "ssm:GetParameters", "ssm:GetParametersByPath" ],
            "Resource": "arn:aws:ssm:ap-southeast-1:*:parameter/Snaptics/Production/*"
        },
        {
            "Effect": "Allow",
            "Action": [ "s3:PutObject", "s3:GetObject", "s3:DeleteObject", "s3:ListBucket" ],
            "Resource": [ "arn:aws:s3:::s3-bucket-snaptics", "arn:aws:s3:::s3-bucket-snaptics/*" ]
        },
        {
            "Effect": "Allow",
            "Action": [ "sqs:SendMessage", "sqs:ReceiveMessage", "sqs:DeleteMessage", "sns:Publish" ],
            "Resource": "*"
        }
    ]
}
```
