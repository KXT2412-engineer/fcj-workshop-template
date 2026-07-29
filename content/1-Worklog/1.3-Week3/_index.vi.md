---
title: "Worklog Tuần 3"
date: 2026-05-25
weight: 3
chapter: false
pre: " <b> 1.3. </b> "
---

### Mục tiêu tuần 3:
- Nắm vững các phương thức kết nối mạng nâng cao (Peering, VPN) và ELB.
- **Dự án Snaptic:** Chuẩn bị hạ tầng bảo mật, thiết kế hệ thống Authentication.

### Các công việc cần triển khai trong tuần này:

| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
|---|---|---|---|---|
| 2 | - **Học mạng nâng cao:** <br>&emsp; + Tìm hiểu VPC Peering <br>&emsp; + Phân tích AWS Transit Gateway | 25/05/2026 | 25/05/2026 | <a href="https://www.youtube.com/watch?v=sllYqAECBoM">YT: Set up VPC peering</a><br><a href="https://www.youtube.com/watch?v=ybLa49z7FFg">YT: Transit Gateway</a><br><a href="https://000019.awsstudygroup.com">000019.awsstudygroup.com</a><br><a href="https://000020.awsstudygroup.com">000020.awsstudygroup.com</a> |
| 3 | - **Mạng lai & Load Balancing:** <br>&emsp; + Mô hình VPN Site-to-Site <br>&emsp; + Phân biệt ALB và NLB | 26/05/2026 | 26/05/2026 | <a href="https://www.youtube.com/watch?v=CXU8D3kyxIc">YT: VPN & LoadBalancer</a><br><a href="https://000092.awsstudygroup.com">000092.awsstudygroup.com</a> |
| 4 | - **Quản lý cấu hình an toàn:** <br>&emsp; + Lưu Connection String với AWS Parameter Store <br>&emsp; + Thiết lập bảo mật biến môi trường | 27/05/2026 | 27/05/2026 | Tài liệu nội bộ |
| 5 | - **Snaptic - Auth Design:** <br>&emsp; + Viết Base Repository <br>&emsp; + Thiết kế sơ đồ luồng Token Service | 28/05/2026 | 28/05/2026 | Tài liệu nội bộ |
| 6 | - **Snaptic - Setup IAM:** <br>&emsp; + Cấu hình IAM Role riêng biệt <br>&emsp; + Chuẩn bị môi trường cấp quyền cho lập trình Backend | 29/05/2026 | 29/05/2026 | Tài liệu nội bộ |

### Kết quả đạt được tuần 3:
*   **Kiến thức AWS:** Nắm bắt được các phương thức kết nối mạng nâng cao trên AWS (Peering, Transit Gateway, VPN) và cơ chế cân bằng tải Elastic Load Balancing (ELB).
*   **Bảo mật hệ thống:** Xử lý trọn vẹn bài toán bảo mật thông tin (không hardcode) nhờ ứng dụng AWS Parameter Store để lưu trữ chuỗi kết nối an toàn.
*   **Thiết kế Authentication:** Hoàn thiện toàn bộ sơ đồ thiết kế hệ thống Auth, bao gồm cơ chế cấp phát JWT Token và phân quyền (Role-Based Access) chuẩn bị cho quá trình Sprint code thực tế.

