---
title: "Worklog Tuần 11"
date: 2026-07-20
weight: 11
chapter: false
pre: " <b> 1.11. </b> "
---

### Mục tiêu tuần 11:
- Khởi tạo quy trình triển khai ứng dụng (CI/CD) cơ bản trên đám mây.
- **Snaptic**: Giải quyết các bài toán hóc búa về tự động hóa nghiệp vụ (gia hạn ví định kỳ) sử dụng Hangfire và xây dựng cổng hỗ trợ người dùng (Support Ticket).

### Các công việc cần triển khai trong tuần này:

| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
|---|---|---|---|---|
| 2 | - **CI/CD & Deployment:** <br>&emsp; + Tìm hiểu quy trình đóng gói ứng dụng <br>&emsp; + Lên kịch bản Release lên AWS | 20/07/2026 | 20/07/2026 | <a href="https://000017.awsstudygroup.com">000017.awsstudygroup.com</a> |
| 3 | - **Snaptic - Tối ưu Ví (Wallet):** <br>&emsp; + Cập nhật ngân sách ví <br>&emsp; + Bật/tắt thư viện Hangfire cho các tác vụ ngầm | 21/07/2026 | 21/07/2026 | |
| 4 | - **Thực hành CI/CD:** <br>&emsp; + Khái niệm về Continuous Integration / Continuous Deployment <br>&emsp; + Thiết lập luồng triển khai tự động (lý thuyết) | 22/07/2026 | 22/07/2026 | <a href="https://000152.awsstudygroup.com">000152.awsstudygroup.com</a> |
| 5 | - **Snaptic - Thuật toán Auto-renew:** <br>&emsp; + Xây dựng thuật toán tự động gia hạn (Renew) ngân sách <br>&emsp; + Áp dụng cho đối tượng BudgetIncomeSource | 23/07/2026 | 23/07/2026 | |
| 6 | - **Snaptic - Hỗ trợ Khách hàng:** <br>&emsp; + Xây dựng bộ API Support Ticket dành riêng cho Admin <br>&emsp; + Quản lý trạng thái và mức độ ưu tiên của Ticket | 24/07/2026 | 24/07/2026 | |

### Kết quả đạt được tuần 11:
*   **Vận hành & Triển khai:** Định hình rõ ràng quy trình đưa sản phẩm từ môi trường phát triển (Dev) lên môi trường thực tế (Production) bằng các kiến thức CI/CD.
*   **Xử lý Nghiệp vụ Phức tạp:** Áp dụng xuất sắc thư viện Hangfire để giải quyết bài toán cốt lõi của ứng dụng - tự động chốt sổ và cấp phát ngân sách (Auto-renew) khi qua tháng mới mà không cần sự can thiệp của người dùng. Khởi tạo thành công hệ thống chăm sóc khách hàng (Support Ticket).
