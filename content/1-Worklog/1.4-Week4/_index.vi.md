---
title: "Worklog Tuần 4"
date: 2026-06-08
weight: 4
chapter: false
pre: " <b> 1.4. </b> "
---

{{% notice warning %}}
⚠️ **Lưu ý:** Các thông tin dưới đây chỉ nhằm mục đích tham khảo, vui lòng **không sao chép nguyên văn** cho bài báo cáo của bạn kể cả warning này.
{{% /notice %}}

### Mục tiêu tuần 4:

- **AWS:** Nắm vững dịch vụ phân giải tên miền Route 53 và Infrastructure as Code (IaC) với CloudFormation.
- **Dự án Snaptic:** Tích hợp AWS S3 lưu trữ file hóa đơn, xây dựng module đọc và xác thực XML.

### Các công việc cần triển khai trong tuần này:

| Thứ | Công việc                                                                         | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu  |
| --- | --------------------------------------------------------------------------------- | ------------ | --------------- | --------------- |
| 2   | **AWS Route 53:** Hosted Zones, Routing Policies, CloudFormation cơ bản           | 08/06/2026   | 08/06/2026      | AWS Study Group |
| 3   | **AWS S3 Integration:** Cấu hình IAM lấy Access Key, cài `AWSSDK.S3`              | 09/06/2026   | 09/06/2026      | AWS Docs        |
| 4   | **Dự án - Upload API:** Viết Service upload file hóa đơn lên S3 Bucket            | 10/06/2026   | 10/06/2026      | Tài liệu nội bộ |
| 5   | **Dự án - XML Module:** Phân tích cấu trúc XML chuẩn, dùng `XDocument` parse data | 11/06/2026   | 11/06/2026      | Tài liệu nội bộ |
| 6   | **Dự án - Validation:** Map dữ liệu XML vào Entity, bắt lỗi định dạng             | 12/06/2026   | 12/06/2026      | Tài liệu nội bộ |

### Kết quả đạt được tuần 4:

- Cấu hình thành công Record DNS cơ bản trên Route 53.
- Tích hợp thành công SDK AWS, cho phép nhận file và đẩy an toàn lên Amazon S3.
- Xử lý thành công luồng đọc/bóc tách dữ liệu hóa đơn định dạng XML.
