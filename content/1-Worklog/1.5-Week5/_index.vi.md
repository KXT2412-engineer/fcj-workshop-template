---
title: "Worklog Tuần 5"
date: 2026-06-08
weight: 5
chapter: false
pre: " <b> 1.5. </b> "
---

### Mục tiêu tuần 5:
- Tìm hiểu các dịch vụ gửi thông báo và email của AWS (Amazon SES và Amazon SNS).
- Làm quen với quản lý cấu hình tập trung bằng AWS Parameter Store và cơ bản về DevOps (Dockerfile).
- **Snaptic**: Refactor và tối ưu hóa luồng API cốt lõi, đặc biệt là các Job xử lý dữ liệu ngầm.

### Các công việc cần triển khai trong tuần này:

| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
|---|---|---|---|---|
| 2 | - **Dịch vụ Email (SES):** <br>&emsp; + Tìm hiểu Amazon SES (Simple Email Service) <br>&emsp; + Cấu hình Identity để gửi email | 08/06/2026 | 08/06/2026 | <a href="https://000077.awsstudygroup.com">000077.awsstudygroup.com</a> |
| 3 | - **Dịch vụ Thông báo (SNS):** <br>&emsp; + Tìm hiểu Amazon SNS (Simple Notification Service) <br>&emsp; + Tạo Topic và Subscriptions | 09/06/2026 | 09/06/2026 | <a href="https://000077.awsstudygroup.com">000077.awsstudygroup.com</a> |
| 4 | - **Quản lý Cấu hình an toàn:** <br>&emsp; + Tìm hiểu AWS Systems Manager Parameter Store <br>&emsp; + Lưu trữ thông tin nhạy cảm (Connection Strings) | 10/06/2026 | 10/06/2026 | <a href="https://000076.awsstudygroup.com">000076.awsstudygroup.com</a> |
| 5 | - **Thực hành DevOps cơ bản:** <br>&emsp; + Viết Dockerfile cơ bản để đóng gói ứng dụng <br>&emsp; + Build Image tối ưu cho dự án .NET Core | 11/06/2026 | 11/06/2026 | |
| 6 | - **Snaptic - Refactor luồng API:** <br>&emsp; + Refactor toàn bộ API Flow 3 (ConfirmPrices) <br>&emsp; + Cập nhật logic cho MissingPriceJob | 12/06/2026 | 12/06/2026 | |

### Kết quả đạt được tuần 5:
*   **Hạ tầng AWS:** Làm quen với các dịch vụ tương tác người dùng của AWS (SES, SNS) và cách bảo mật các biến môi trường thông qua Parameter Store. Đóng gói thành công ứng dụng bằng Docker.
*   **Tối ưu Snaptic:** Refactor thành công các API cốt lõi, giải quyết triệt để các luồng dữ liệu phức tạp (như xác nhận giá và các tác vụ ngầm) giúp ứng dụng hoạt động ổn định và mượt mà hơn.
