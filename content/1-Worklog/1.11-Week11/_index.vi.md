---
title: "Worklog Tuần 11"
date: 2026-07-20
weight: 11
chapter: false
pre: " <b> 1.11. </b> "
---

### Mục tiêu tuần 11:
- Hoàn thiện nghiệp vụ phức tạp nhất: **Vòng đời Ví định kỳ (Periodic Budget)**.
- Tự động hóa bằng Background Jobs và Unit Testing.

### Các công việc cần triển khai trong tuần này:

| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
|---|---|---|---|---|
| 2 | - **Snaptic - Income Refactor:** <br>&emsp; + Cập nhật và tối ưu lại toàn bộ luồng tạo Income Source <br>&emsp; + Kiểm tra luồng dữ liệu liên đới | 20/07/2026 | 20/07/2026 |  |
| 3 | - **Snaptic - Wallet Budget:** <br>&emsp; + Tối ưu hóa API Budget Controller <br>&emsp; + Kiểm tra và sửa lỗi Unit Tests cho Budget | 21/07/2026 | 21/07/2026 |  |
| 4 | - **Học AWS Database Protection:** <br>&emsp; + Tìm hiểu kiến trúc AWS Backup <br>&emsp; + Thực hành Create Backup plan bảo vệ dữ liệu | 22/07/2026 | 22/07/2026 | <a href="https://000013.awsstudygroup.com">000013.awsstudygroup.com</a> |
| 5 | - **Snaptic - Hangfire Auto-renew:** <br>&emsp; + Tích hợp Hangfire xử lý vòng đời ví (Wallet Budget) <br>&emsp; + Code logic tự động gia hạn (Auto-renew) khi qua tháng | 23/07/2026 | 23/07/2026 |  |
| 6 | - **Snaptic - Release Preparation:** <br>&emsp; + Review lại toàn bộ Codebase <br>&emsp; + Đóng gói mã nguồn chuẩn bị Release | 24/07/2026 | 24/07/2026 |  |

### Kết quả đạt được tuần 11:
*   **Hoàn thiện nghiệp vụ:** Giải quyết thành công bài toán nghiệp vụ phức tạp nhất của dự án: "Vòng đời Ví định kỳ (Periodic Budget)".
*   **Tự động hóa hoàn toàn:** Ứng dụng xuất sắc Hangfire để tự động hóa trọn vẹn quy trình Auto-renew: Tự chốt sổ ví cũ khi hết tháng, tự tạo ví mới, kế thừa các cài đặt (tên, isDefault), và đồng bộ chính xác nguồn thu định kỳ.
*   **Đảm bảo chất lượng (QA):** Đảm bảo chất lượng mã nguồn (Code Quality) và độ tin cậy của hệ thống bằng các bộ Unit Test đạt độ phủ cao trước khi tiến hành đóng gói Release.

