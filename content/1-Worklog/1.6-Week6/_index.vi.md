---
title: "Worklog Tuần 6"
date: 2026-06-15
weight: 6
chapter: false
pre: " <b> 1.6. </b> "
---

### Mục tiêu tuần 6:

- **AWS:** Tích hợp Amazon S3 để xử lý file và ảnh.
- **Snaptic:** Thay đổi kiến trúc lưu trữ ảnh, xử lý bảo mật tài nguyên tĩnh.

### Các công việc cần triển khai trong tuần này:

| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| --- | --- | --- | --- | --- |
| 3 | **Snaptic - AWS S3 Integration:** Cài SDK S3, tích hợp lưu trữ ảnh lên Cloud thay vì Local. | 16/06/2026 | 17/06/2026 | AWS Docs |
| 4 | **Snaptic - S3 Pre-signed URL:** Xử lý chia sẻ link an toàn qua Pre-signed URL. Đổi Data Model `ImageUrl` thành `ImageKey`. | 18/06/2026 | 18/06/2026 | AWS Docs |
| 5 | **Snaptic - Refactor AI Upload:** Sửa luồng upload ảnh trong AiController & TransactionController. | 19/06/2026 | 19/06/2026 | Snaptic Git |
| 6 | **Snaptic - Secure Download:** Cấu hình S3Controller để lấy ảnh bảo mật từ Cloud. Cải thiện xử lý lỗi (Exception). | 20/06/2026 | 21/06/2026 | Snaptic Git |

### Kết quả đạt được tuần 6:

*   **Kiến trúc Cloud-Native:** Áp dụng thành công tư duy phân tách hệ thống (Decoupling) bằng cách chuyển hoàn toàn việc lưu trữ file vật lý lên nền tảng đám mây Amazon S3 thay vì lưu ở Local.
*   **Bảo mật dữ liệu tĩnh:** Giải quyết trọn vẹn bài toán bảo mật tài nguyên tĩnh thông qua kỹ thuật sinh Pre-signed URL và đổi cấu trúc quản lý từ `ImageUrl` sang `ImageKey` an toàn hơn.
*   **Tối ưu API:** Hoàn thiện API S3Controller cho phép Frontend lấy và hiển thị ảnh mượt mà, đồng thời nâng cấp hệ thống bắt lỗi (Exception Handling) trong luồng Upload.
