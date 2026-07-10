---
title: "Worklog Tuần 6"
date: 2026-07-27
weight: 1
chapter: false
pre: " <b> 1.6. </b> "
---
{{% notice warning %}}
⚠️ **Lưu ý:** Các thông tin dưới đây chỉ nhằm mục đích tham khảo, vui lòng **không sao chép nguyên văn** cho bài báo cáo của bạn kể cả warning này.
{{% /notice %}}


### Mục tiêu tuần 6:
- **AWS:** Tìm hiểu AWS Backup, nguyên lý IAM Roles/Policies.
- **Dự án Snaptic:** Xây dựng hệ thống Role-Based Access Control (RBAC) và cơ chế cô lập dữ liệu người dùng (Data Isolation).

### Các công việc cần triển khai trong tuần này:
| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| :--- | :--- | :--- | :--- | :--- |
| 2 | **AWS Security & Backup:**<br>+ Cấu hình AWS Backup Plan.<br>+ Phân quyền IAM theo nguyên tắc đặc quyền tối thiểu. | 27/07/2026 | 27/07/2026 | AWS Study Group |
| 3 | **Dự án - RBAC:**<br>+ Ánh xạ Roles từ Cognito sang `.NET Claims`.<br>+ Viết Custom Authorization Policies. | 28/07/2026 | 28/07/2026 | Tài liệu nội bộ |
| 4 | **Dự án - Data Isolation:**<br>+ Sửa Repository, thêm điều kiện `.Where(x => x.UserId == currentUserId)`. | 29/07/2026 | 29/07/2026 | Tài liệu nội bộ |
| 5 | **Dự án - Refactor Controllers:**<br>+ Áp dụng Data Isolation cho Budget & Transaction.<br>+ Xóa mock data, lấy UserID từ Token thực. | 30/07/2026 | 30/07/2026 | Tài liệu nội bộ |
| 6 | **Dự án - API Testing:**<br>+ Tạo 2 user khác nhau test chéo API.<br>+ Bắt lỗi 403 Forbidden và 401 Unauthorized. | 31/07/2026 | 31/07/2026 | Postman/Swagger |


### Kết quả đạt được tuần 6:
- Đảm bảo tính bảo mật dữ liệu tuyệt đối: Dữ liệu của user nào chỉ user đó được truy cập thông qua luồng Claims Extraction từ JWT.
- Hệ thống Backup AWS được thiết lập tự động hóa.


