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
| --- | --- | --- | --- | --- |
| 2 | **Snaptic - Income Flow:** Cập nhật và tối ưu lại toàn bộ luồng Income. | 20/07/2026 | 20/07/2026 | Snaptic Git |
| 3 | **Snaptic - Hangfire Auto-renew:** Code cơ chế Bật/Tắt Hangfire. Xây dựng logic tự động gia hạn ví (Auto-renew) khi qua tháng. | 21/07/2026 | 21/07/2026 | Hangfire Docs |
| 4 | **Snaptic - Budget Inheritance:** Kế thừa cài đặt ví (tên, isDefault, auto-renew) từ tháng cũ sang tháng mới. | 21/07/2026 | 21/07/2026 | Snaptic Git |
| 5 | **Snaptic - Sync Income:** Tự động lấy/tạo income source theo user và bơm tiền vào ví định kỳ mới. | 21/07/2026 | 21/07/2026 | Snaptic Git |
| 6 | **Snaptic - Unit Testing:** Viết Unit Test cho Budget Service, chốt lại 1 commit sửa test case cuối cùng. | 21/07/2026 | 21/07/2026 | Snaptic Git |

### Kết quả đạt được tuần 11:

*   **Hoàn thiện nghiệp vụ:** Giải quyết thành công bài toán nghiệp vụ phức tạp nhất của dự án: "Vòng đời Ví định kỳ (Periodic Budget)".
*   **Tự động hóa hoàn toàn:** Ứng dụng xuất sắc Hangfire để tự động hóa trọn vẹn quy trình Auto-renew: Tự chốt sổ ví cũ khi hết tháng, tự tạo ví mới, kế thừa các cài đặt (tên, isDefault), và đồng bộ chính xác nguồn thu định kỳ.
*   **Đảm bảo chất lượng (QA):** Đảm bảo chất lượng mã nguồn (Code Quality) và độ tin cậy của hệ thống bằng các bộ Unit Test đạt độ phủ cao trước khi tiến hành đóng gói Release.
