---
title: "Worklog Tuần 10"
date: 2026-07-13
weight: 10
chapter: false
pre: " <b> 1.10. </b> "
---

### Mục tiêu tuần 10:
- Cung cấp các công cụ phân tích xu hướng (Trend Analysis).
- Khởi tạo luồng nghiệp vụ **Thu nhập định kỳ (Recurring Income)**.

### Các công việc cần triển khai trong tuần này:

| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
|---|---|---|---|---|
| 2 | - **Snaptic - Analytics & Reporting:** <br>&emsp; + Thêm endpoint category summary <br>&emsp; + Phản hồi DTO hỗ trợ phân tích tài chính | 13/07/2026 | 13/07/2026 |  |
| 3 | - **Học AWS Services (Events):** <br>&emsp; + Messaging Systems với Amazon SQS & SNS <br>&emsp; + Khám phá EventBridge | 14/07/2026 | 14/07/2026 | <a href="https://000077.awsstudygroup.com">000077.awsstudygroup.com</a><br><a href="https://docs.aws.amazon.com/eventbridge/">EventBridge Docs</a><br><a href="https://docs.aws.amazon.com/sqs/">Amazon SQS Docs</a> |
| 4 | - **Snaptic - Recurring Income:** <br>&emsp; + Xử lý luồng thu nhập định kỳ hàng tháng <br>&emsp; + Thêm cờ `isExpense`, endpoint so sánh & trend summary | 15/07/2026 | 15/07/2026 |  |
| 5 | - **Học AWS Cost Management:** <br>&emsp; + AWS Cost Optimization <br>&emsp; + Thực hành tạo Budget Alert quản lý ngân sách | 16/07/2026 | 16/07/2026 | <a href="https://000007.awsstudygroup.com">000007.awsstudygroup.com</a> |
| 6 | - **Snaptic - API Testing:** <br>&emsp; + Code Refactor toàn bộ luồng Income mới <br>&emsp; + Chạy giả lập và API Testing qua Swagger | 17/07/2026 | 17/07/2026 |  |

### Kết quả đạt được tuần 10:
*   **Phân tích tài chính:** Xây dựng hệ thống Báo cáo (Analytics) cực kỳ mạnh mẽ với các endpoint thống kê danh mục, so sánh chi tiêu theo tháng và phân tích xu hướng (Trend Summary).
*   **Cấu trúc dữ liệu:** Mở rộng nghiệp vụ quản lý dòng tiền bằng cách phân tách rõ ràng luồng Thu/Chi trong bảng thông qua cờ `isExpense`.
*   **Nguồn thu tự động:** Triển khai thành công logic hệ thống cốt lõi xử lý luồng Thu nhập định kỳ (Recurring Income), làm tiền đề cho vòng đời Ví định kỳ.

