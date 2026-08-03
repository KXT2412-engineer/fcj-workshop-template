---
title: "Worklog Tuần 12"
date: 2026-07-27
weight: 12
chapter: false
pre: " <b> 1.12. </b> "
---

### Mục tiêu tuần 12:
- Hoàn thiện toàn bộ các tính năng dành cho quản trị viên (Admin) và chế độ bảo trì hệ thống.
- Củng cố hệ thống logging nâng cao kết hợp giữa Serilog và Amazon CloudWatch.
- Chuẩn bị tài liệu kỹ thuật và báo cáo tổng kết giai đoạn 12 tuần.

### Các công việc cần triển khai trong tuần này:

| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
|---|---|---|---|---|
| 2 | - **Viết tài liệu API:** <br>&emsp; + Bổ sung comment và chuẩn hóa Swagger UI <br>&emsp; + Xuất tài liệu hướng dẫn tích hợp API | 27/07/2026 | 27/07/2026 | |
| 3 | - **Snaptic - Quản trị User & Bảo trì:** <br>&emsp; + Viết logic lấy danh sách User cho Admin <br>&emsp; + Cài đặt Middleware chế độ bảo trì (Maintenance Profile) | 28/07/2026 | 28/07/2026 | |
| 4 | - **Báo cáo 12 tuần:** <br>&emsp; + Tổng hợp các tính năng đã hoàn thiện của dự án Snaptic <br>&emsp; + Phác thảo báo cáo quá trình thực tập | 29/07/2026 | 29/07/2026 | |
| 5 | - **Review Kiến trúc Tổng thể:** <br>&emsp; + Đánh giá lại mô hình Cloud-Native <br>&emsp; + Kiểm tra quy trình mở rộng và bảo trì tương lai | 30/07/2026 | 30/07/2026 | <a href="https://000080.awsstudygroup.com">000080.awsstudygroup.com</a> |
| 6 | - **Snaptic - Logging & Fix bug:** <br>&emsp; + Tích hợp ghi log chuyên sâu (CloudWatch qua Serilog) <br>&emsp; + Fix lỗi logic phần đánh giá trạng thái | 31/07/2026 | 31/07/2026 | |

### Kết quả đạt được tuần 12:
*   **Hoàn thiện Tính năng:** Hoàn tất những mảnh ghép cuối cùng cho dự án, đặc biệt là hệ thống trang Quản trị (Admin) và khả năng kiểm soát truy cập khi hệ thống cần bảo trì (Maintenance Middleware).
*   **Sẵn sàng Vận hành:** Hệ thống đã được tích hợp chặt chẽ với CloudWatch để ghi log chuyên sâu, đảm bảo khả năng theo dõi sức khỏe ứng dụng (Health check) và truy vết lỗi khi có sự cố. Chuẩn bị đầy đủ tài liệu phục vụ báo cáo.
