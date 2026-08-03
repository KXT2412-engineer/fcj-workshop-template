---
title: "Worklog Tuần 8"
date: 2026-06-29
weight: 8
chapter: false
pre: " <b> 1.8. </b> "
---

### Mục tiêu tuần 8:
- Tìm hiểu các dịch vụ điều phối luồng sự kiện và hàng đợi của AWS (EventBridge, SQS).
- **Snaptic**: Tích hợp hệ thống ghi log chuyên nghiệp (Serilog) với Amazon CloudWatch, hoàn thiện giao diện và API cho trang Dashboard tổng quan.

### Các công việc cần triển khai trong tuần này:

| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
|---|---|---|---|---|
| 2 | - **Điều phối sự kiện (Events):** <br>&emsp; + Tìm hiểu kiến trúc Event-Driven <br>&emsp; + Khám phá Amazon EventBridge | 29/06/2026 | 29/06/2026 | <a href="https://000077.awsstudygroup.com">000077.awsstudygroup.com</a> |
| 3 | - **Hệ thống hàng đợi (Messaging):** <br>&emsp; + Tìm hiểu Amazon SQS (Simple Queue Service) <br>&emsp; + Phân biệt SQS và SNS trong kiến trúc thực tế | 30/06/2026 | 30/06/2026 | <a href="https://000077.awsstudygroup.com">000077.awsstudygroup.com</a> |
| 4 | - **Snaptic - Tích hợp CloudWatch:** <br>&emsp; + Cài đặt Serilog và kết nối tới Amazon CloudWatch <br>&emsp; + Thiết lập inheritance (kế thừa) cho các Controllers | 01/07/2026 | 01/07/2026 | |
| 5 | - **Ôn tập Kiến trúc Cloud:** <br>&emsp; + Review lại các mô hình kiến trúc serverless cơ bản <br>&emsp; + Đánh giá mô hình Backend hiện tại | 02/07/2026 | 02/07/2026 | <a href="https://000101.awsstudygroup.com">000101.awsstudygroup.com</a> |
| 6 | - **Snaptic - Hoàn thiện Dashboard:** <br>&emsp; + Cập nhật toàn diện trang Dashboard (theo Ngày/Tháng/Năm) <br>&emsp; + Refactor lại mã nguồn phần Budget | 03/07/2026 | 03/07/2026 | |

### Kết quả đạt được tuần 8:
*   **Hạ tầng AWS:** Có cái nhìn sâu sắc về kiến trúc hướng sự kiện (Event-driven) thông qua các dịch vụ SQS và EventBridge, phục vụ cho việc mở rộng dự án sau này.
*   **Giám sát & Quản trị:** Tích hợp thành công thư viện Serilog để đẩy thẳng toàn bộ log hoạt động của hệ thống lên Amazon CloudWatch, giúp quá trình theo dõi lỗi (tracking) trở nên dễ dàng và chuyên nghiệp hơn.
*   **Tính năng ứng dụng:** Hoàn thành trang Dashboard với dữ liệu tổng hợp trực quan, mang lại giá trị cốt lõi cho người dùng cuối.
