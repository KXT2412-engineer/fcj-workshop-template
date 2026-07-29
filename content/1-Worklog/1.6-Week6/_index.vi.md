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
| 2 | - **Học AWS IAM & Network:** <br>&emsp; + Tìm hiểu quản lý truy cập (Access Management) <br>&emsp; + Nguyên tắc Đặc quyền tối thiểu | 15/06/2026 | 15/06/2026 | <a href="https://000002.awsstudygroup.com">000002.awsstudygroup.com</a><br><a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/">AWS IAM Docs</a> |
| 3 | - **Học AWS Storage (S3):** <br>&emsp; + Thực hành Create S3 Bucket, Enable static website <br>&emsp; + Cấu hình Public Access Block / CORS | 16/06/2026 | 16/06/2026 | <a href="https://000057.awsstudygroup.com">000057.awsstudygroup.com</a><br><a href="https://000069.awsstudygroup.com">000069.awsstudygroup.com</a> |
| 4 | - **Snaptic - AWS S3 Integration:** <br>&emsp; + Tích hợp AWS S3 storage vào hệ thống lõi <br>&emsp; + Code chức năng sinh Pre-signed URLs | 17/06/2026 | 17/06/2026 | <a href="https://aws.amazon.com/sdk-for-net/">AWS SDK for .NET</a><br><a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/ShareObjectPreSignedURL.html">S3 Pre-signed URLs Docs</a> |
| 5 | - **Snaptic - Admin & Budget Refactor:** <br>&emsp; + Cập nhật hàm quản trị AWS cho Budget <br>&emsp; + Đổi cấu trúc lưu ảnh từ `ImageUrl` sang `ImageKey` | 18/06/2026 | 18/06/2026 |  |
| 6 | - **Snaptic - Update relations:** <br>&emsp; + Bổ sung User mapping vào Notification, Transaction, Item <br>&emsp; + Sửa luồng upload ảnh an toàn | 19/06/2026 | 19/06/2026 |  |

### Kết quả đạt được tuần 6:
*   **Kiến trúc Cloud-Native:** Áp dụng thành công tư duy phân tách hệ thống (Decoupling) bằng cách chuyển hoàn toàn việc lưu trữ file vật lý lên nền tảng đám mây Amazon S3 thay vì lưu ở Local.
*   **Bảo mật dữ liệu tĩnh:** Giải quyết trọn vẹn bài toán bảo mật tài nguyên tĩnh thông qua kỹ thuật sinh Pre-signed URL và đổi cấu trúc quản lý từ `ImageUrl` sang `ImageKey` an toàn hơn.
*   **Tối ưu API:** Hoàn thiện API S3Controller cho phép Frontend lấy và hiển thị ảnh mượt mà, đồng thời khắc phục triệt để lỗi CORS ở tầng trình duyệt.

