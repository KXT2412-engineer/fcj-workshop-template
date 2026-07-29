---
title: "Worklog Tuần 7"
date: 2026-06-22
weight: 7
chapter: false
pre: " <b> 1.7. </b> "
---

### Mục tiêu tuần 7:
- Hoàn thiện flow OTP bằng email.
- Phát triển AI Assistant (Trợ lý ảo tài chính).

### Các công việc cần triển khai trong tuần này:

| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
|---|---|---|---|---|
| 2 | - **Snaptic - Logic Quản trị & Dọn dẹp:** <br>&emsp; + Cập nhật Budget API <br>&emsp; + Code chức năng destroy AWS / Cleanup tài nguyên | 22/06/2026 | 22/06/2026 |  |
| 3 | - **Snaptic - Notification Flow:** <br>&emsp; + Viết logic dọn dẹp (Notification Cleanup Job) <br>&emsp; + Tách luồng tạo notification theo từng item | 23/06/2026 | 23/06/2026 |  |
| 4 | - **Học AWS Email Service:** <br>&emsp; + Tìm hiểu dịch vụ Amazon SES (Simple Email Service) <br>&emsp; + Setup Identity để phục vụ gửi mail OTP | 24/06/2026 | 24/06/2026 | <a href="https://docs.aws.amazon.com/ses/">Amazon SES Docs</a><br><a href="https://000077.awsstudygroup.com">000077.awsstudygroup.com</a> |
| 5 | - **Snaptic - OTP Flow:** <br>&emsp; + Hoàn thiện flow xác minh email bằng mã OTP <br>&emsp; + Cải thiện template email OTP đăng ký | 25/06/2026 | 25/06/2026 |  |
| 6 | - **Snaptic - AI Assistant:** <br>&emsp; + Thêm API AI assistant financial summary <br>&emsp; + Cập nhật prompt với `AllCategoriesThisMonth` | 26/06/2026 | 26/06/2026 |  |

### Kết quả đạt được tuần 7:
*   **Bảo mật tài khoản:** Nâng cấp hệ thống bảo mật người dùng bằng việc triển khai thành công luồng gửi và xác minh mã OTP qua Email một cách an toàn.
*   **Trợ lý ảo thông minh:** Tạo ra bước đột phá trong trải nghiệm người dùng với tính năng AI Assistant nhờ kỹ thuật Prompt Engineering (bổ sung context `AllCategoriesThisMonth`).
*   **Cá nhân hóa:** Trợ lý ảo AI đã đủ "thông minh" để đánh giá tổng quan, tóm tắt và đưa ra các Insight (lời khuyên) tài chính cá nhân hóa dựa trên mức độ chi tiêu thực tế.

