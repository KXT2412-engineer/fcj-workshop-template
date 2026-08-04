---
title: "Kiểm thử Hệ thống (E2E Testing)"
date: 2024-01-01
weight: 8
chapter: false
pre: " <b> 5.8. </b> "
---


Kiểm thử đảm bảo luồng dữ liệu HTTP và WebSockets đi đúng thiết kế.

## 1. Kiểm thử API (Swagger)
Truy cập `http://<ALB_DNS_NAME>/swagger`.
1. **Đăng nhập (Auth):** Dùng Endpoint `/api/Auth/register` rồi `/api/Auth/login` lấy token JWT. Nhập token vào nút Authorize.
2. **Upload Hóa đơn:** Dùng Endpoint `/api/Transactions/scan-receipt` tải lên một bức ảnh hóa đơn.
3. **Xác thực:** Bạn sẽ thấy file ảnh hiện trong Bucket S3, một message nhảy lên ở hàng đợi SQS, và Swagger trả về chuỗi JSON bóc tách chính xác tên cửa hàng nhờ Azure OCR.

## 2. Kiểm thử WebSocket (SignalR)
1. Dùng công cụ Client kết nối tới `ws://<ALB_DNS_NAME>/hubs/notification?access_token=<TOKEN>`.
2. Kiểm tra log thấy báo `101 Switching Protocols` là thành công.
3. Quay lại Swagger, gọi Endpoint tạo 1 giao dịch thủ công (Ví dụ: Ăn sáng 50.000đ).
4. Ngay lập tức màn hình WebSocket Client nhận được một chuỗi JSON đẩy về: `{"type": "NEW_TRANSACTION_ADDED"}`. Chứng minh tính năng Real-time Notification thông qua ALB hoạt động hoàn hảo!
