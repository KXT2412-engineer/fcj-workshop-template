---
title: "Worklog Tuần 8"
date: 2026-08-10
weight: 1
chapter: false
pre: " <b> 1.8. </b> "
---
{{% notice warning %}}
⚠️ **Lưu ý:** Các thông tin dưới đây chỉ nhằm mục đích tham khảo, vui lòng **không sao chép nguyên văn** cho bài báo cáo của bạn kể cả warning này.
{{% /notice %}}


### Mục tiêu tuần 8:
- **AWS:** Nắm vững hệ sinh thái Database (RDS, Aurora, ElastiCache) và AWS Systems Manager (Parameter Store).
- **Dự án Snaptic:** Chuyển Database lên Cloud, phát triển các tính năng Filter, Pagination.

### Các công việc cần triển khai trong tuần này:
| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| :--- | :--- | :--- | :--- | :--- |
| 2 | **AWS Database Services:**<br>+ Tìm hiểu kiến trúc Amazon RDS (Multi-AZ).<br>+ Cấu hình Security Group cho Database. | 10/08/2026 | 10/08/2026 | AWS Study Group |
| 3 | **Dự án - DB Migration:**<br>+ Provision một instance RDS PostgreSQL/SQL Server.<br>+ Trỏ Connection String từ Local lên AWS RDS. | 11/08/2026 | 11/08/2026 | AWS Docs |
| 4 | **AWS Parameter Store:**<br>+ Lưu chuỗi Connection String an toàn vào SSM.<br>+ Config .NET để đọc secret từ AWS thay vì `appsettings`. | 12/08/2026 | 12/08/2026 | AWS Docs |
| 5 | **Dự án - Advanced APIs:**<br>+ Cài đặt tính năng Phân trang (Pagination) cho danh sách hóa đơn.<br>+ Implement Lọc (Filtering) theo Date, Status. | 13/08/2026 | 13/08/2026 | Tài liệu nội bộ |
| 6 | **Dự án - Audit Logging:**<br>+ Lưu vết lịch sử chỉnh sửa giá của User.<br>+ Testing toàn bộ flow với DB trên Cloud. | 14/08/2026 | 14/08/2026 | Tài liệu nội bộ |


### Kết quả đạt được tuần 8:
- Chuyển đổi thành công môi trường Database từ Localhost lên Amazon RDS.
- Đảm bảo an toàn bảo mật thông tin cấu hình nhờ AWS Systems Manager.
- Tối ưu hóa API truy xuất dữ liệu lớn bằng cơ chế phân trang.


