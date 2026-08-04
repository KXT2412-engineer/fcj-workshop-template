---
title: "Cleanup"
date: 2024-01-01
weight: 9
chapter: false
pre: " <b> 5.9. </b> "
---

# Resources Cleanup

Clean up resources strictly in this order to avoid AWS charges and dependency lock errors.

1. **ECS Fargate:** Go to the cluster, update the service desired tasks to 0. Wait for them to stop. Delete the Service. Delete the Cluster.
2. **Load Balancer:** Delete the ALB. Delete the Target Group.
3. **RDS Database:** Delete RDS without a final snapshot (type `delete me`).
4. **NAT Gateway & EIP:** Delete the NAT Gateway. Wait 3 minutes, then explicitly Release the Elastic IP (otherwise you get charged $1/month).
5. **Storage & Queues:** Empty and delete the S3 bucket. Delete the ECR repository, SQS queue, SNS topic, and SSM parameters.
6. **VPC:** Delete `snaptics-vpc`. This will automatically clean up all Subnets, Route Tables, IGW, and Security Groups.
