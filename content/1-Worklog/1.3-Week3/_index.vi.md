---
title: "Worklog Tuần 3"
date: 2026-05-25
weight: 3
chapter: false
pre: " <b> 1.3. </b> "
---

### Mục tiêu tuần 3:

- Nắm vững các phương pháp kết nối mạng nâng cao trên AWS (VPC Peering, VPN, Transit Gateway).
- **Dự án Snaptic:** Xây dựng hệ thống định danh người dùng, bảo mật API bằng JWT và OTP qua Email.

### Các công việc cần triển khai trong tuần này:

| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| --- | --- | --- | --- | --- |
| 2 | **Kết nối mạng nâng cao:** Học về VPC Peering và Transit Gateway | 25/05/2026 | 25/05/2026 | AWS Study Group |
| 3 | **Mạng lai & ELB:** Tìm hiểu VPN Site-to-Site, phân biệt ALB/NLB | 26/05/2026 | 26/05/2026 | AWS Study Group |
| 4 | **Snaptic - Systems Manager:** Lưu Connection String an toàn bằng AWS Parameter Store | 27/05/2026 | 27/05/2026 | AWS Docs |
| 5 | **Snaptic - Auth Design:** Viết Base Repository và thiết kế kiến trúc Token Service | 28/05/2026 | 28/05/2026 | Tài liệu nội bộ |
| 6 | **Snaptic - Setup IAM:** Cấu hình IAM Role riêng biệt chuẩn bị cho lập trình backend | 29/05/2026 | 29/05/2026 | AWS Docs |

### Kết quả đạt được tuần 3:

*   **Kiến thức AWS:** Nắm bắt được các phương thức kết nối mạng nâng cao trên AWS (Peering, Transit Gateway, VPN) và cơ chế cân bằng tải Elastic Load Balancing (ELB).
*   **Bảo mật hệ thống:** Xử lý trọn vẹn bài toán bảo mật thông tin (không hardcode) nhờ ứng dụng AWS Parameter Store để lưu trữ chuỗi kết nối an toàn.
*   **Thiết kế Authentication:** Hoàn thiện toàn bộ sơ đồ thiết kế hệ thống Auth, bao gồm cơ chế cấp phát JWT Token và phân quyền (Role-Based Access) chuẩn bị cho quá trình Sprint code thực tế.
