---
title: "Worklog Tuần 6"
date: 2026-06-15
weight: 6
chapter: false
pre: " <b> 1.6. </b> "
---

### Mục tiêu tuần 6:
- **AWS:** Tích hợp Amazon S3 để xử lý file/ảnh và giải quyết bài toán CORS.
- **Snaptic:** Thay đổi kiến trúc lưu trữ ảnh, xử lý bảo mật tài nguyên tĩnh.

### Các công việc cần triển khai trong tuần này:

| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
|---|---|---|---|---|
| 2 | - **Học AWS IAM & Network:** <br>&emsp; + Tìm hiểu nguyên tắc Least Privilege <br>&emsp; + Tìm hiểu chính sách CORS trên hệ thống đám mây | 15/06/2026 | 15/06/2026 | AWS Docs |
| 3 | - **Học AWS Storage:** <br>&emsp; + Nghiên cứu Amazon S3, cơ chế Object Storage <br>&emsp; + Cách cấu hình S3 Bucket tĩnh | 16/06/2026 | 16/06/2026 | AWS Docs |
| 4 | - **Snaptic - AWS S3 Integration:** <br>&emsp; + Thêm đơn vị đo <br>&emsp; + Cài SDK S3 và sinh cấu trúc Pre-signed URLs | 17/06/2026 | 17/06/2026 | Snaptic Git |
| 5 | - **Snaptic - Data Security:** <br>&emsp; + Đổi data model `ImageUrl` sang `ImageKey` <br>&emsp; + Cập nhật budget, admin, notification enum | 18/06/2026 | 18/06/2026 | Snaptic Git |
| 6 | - **Snaptic - Upload & S3 API:** <br>&emsp; + Refactor upload ảnh (AiController, TransactionController) <br>&emsp; + Thêm API lấy ảnh an toàn từ S3 ở S3Controller | 19/06/2026 | 19/06/2026 | Snaptic Git |

### Kết quả đạt được tuần 6:
*   **Kiến trúc Cloud-Native:** Áp dụng thành công tư duy phân tách hệ thống (Decoupling) bằng cách chuyển hoàn toàn việc lưu trữ file vật lý lên nền tảng đám mây Amazon S3 thay vì lưu ở Local.
*   **Bảo mật dữ liệu tĩnh:** Giải quyết trọn vẹn bài toán bảo mật tài nguyên tĩnh thông qua kỹ thuật sinh Pre-signed URL và đổi cấu trúc quản lý từ `ImageUrl` sang `ImageKey` an toàn hơn.
*   **Tối ưu API:** Hoàn thiện API S3Controller cho phép Frontend lấy và hiển thị ảnh mượt mà, đồng thời khắc phục triệt để lỗi CORS ở tầng trình duyệt.
