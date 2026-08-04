---
title: "E2E Testing"
date: 2024-01-01
weight: 8
chapter: false
pre: " <b> 5.8. </b> "
---


Test the data flow via REST API and WebSockets to ensure the system is fully operational.

## 1. API Testing (Swagger)
Access `http://<ALB_DNS_NAME>/swagger`.
1. **Auth:** Call `/api/Auth/register` then `/api/Auth/login` to get a JWT Token. Use it to authorize requests.
2. **Upload Invoice:** Call `/api/Transactions/scan-receipt` and upload an image file.
3. **Verify:** You should see the image uploaded to the S3 bucket, a background message pushed to SQS, and eventually, Azure OCR returning accurately extracted data in Swagger.

## 2. WebSocket Testing (SignalR)
1. Connect a WebSocket client to `ws://<ALB_DNS_NAME>/hubs/notification?access_token=<TOKEN>`.
2. Ensure you receive a `101 Switching Protocols` status.
3. Call `/api/Transactions` in Swagger to manually add a new spending transaction.
4. Verify the server pushes a real-time JSON event `{"type": "NEW_TRANSACTION_ADDED"}` to your WebSocket client. This confirms the ALB is properly routing WebSocket upgrades to Fargate containers.
