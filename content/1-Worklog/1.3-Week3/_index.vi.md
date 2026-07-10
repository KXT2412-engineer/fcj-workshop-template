---
title: "Worklog Tuần 3"
date: 2024-01-01
weight: 1
chapter: false
pre: " <b> 1.3. </b> "
---

### Mục tiêu tuần 3:

- Nắm vững các phương pháp kết nối mạng nâng cao trên AWS (VPC Peering, VPN, Transit Gateway).
- Tìm hiểu chuyên sâu về Elastic Load Balancing (ALB, NLB).
- **Dự án Snaptic:** Xây dựng hệ thống định danh người dùng, bảo mật API bằng JWT và OTP qua Email.

### Các công việc cần triển khai trong tuần này:

| Thứ | Công việc                                                                                                                                                                                                                                   | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu                                                                                                                                                                          |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2   | **Kết nối mạng nâng cao:** <br>&emsp; + Học về VPC Peering (Kết nối trực tiếp 2 VPC) <br>&emsp; + Tìm hiểu Transit Gateway                                                                                                                  | 01/06/2026   | 01/06/2026      | <a href="https://cloudjourney.awsstudygroup.com/">AWS Study Group</a> <br> <a href="https://www.youtube.com/playlist?list=PLahN4TLWtox2a3vElknwzU_urND8hLn1i">FCJ Bootcamp Playlist</a> |
| 3   | - **Mạng lai (Hybrid Cloud) & VPN:** <br>&emsp; + Học về Direct Connect Gateway <br>&emsp; + VPN Site-to-Site (VGW, CGW) <br>&emsp; + VPN Client-to-Site                                                                                    | 02/06/2026   | 02/06/2026      | <a href="https://cloudjourney.awsstudygroup.com/">AWS Study Group</a> <br> <a href="https://www.youtube.com/playlist?list=PLahN4TLWtox2a3vElknwzU_urND8hLn1i">FCJ Bootcamp Playlist</a> |
| 4   | **Elastic Load Balancing (ELB) & EC2:** <br>&emsp; + Phân biệt ALB, NLB, CLB, GWLB <br>&emsp; + Thực hành tạo EC2 instance nâng cao <br>&emsp; + Test kết nối qua EC2 Instance Connect Endpoint                                             | 03/06/2026   | 03/06/2026      | <https://cloudjourney.awsstudygroup.com/>                                                                                                                                               |
| 5   | - **Dự án Snaptic - Authentication:** <br>&emsp; + Cài đặt thư viện Microsoft.AspNetCore.Authentication.JwtBearer <br>&emsp; + Viết logic cấp phát JWT Token (Login/Register) <br>&emsp; + Bảo vệ các endpoint bằng attribute `[Authorize]` | 04/06/2026   | 04/06/2026      | <https://cloudjourney.awsstudygroup.com/>                                                                                                                                               |
| 6   | - **Dự án Snaptic - OTP & Security:** <br>&emsp; + Tích hợp SMTP gửi email mã OTP xác thực <br>&emsp; + Test luồng đăng nhập toàn vẹn qua Postman/Swagger <br>&emsp; + Chuẩn bị kịch bản đẩy API lên EC2 sau này                            | 05/06/2026   | 05/06/2026      | <https://cloudjourney.awsstudygroup.com/>                                                                                                                                               |

### Kết quả đạt được tuần 3:

- Hiểu AWS là gì và nắm được các nhóm dịch vụ cơ bản:
  - Compute
  - Storage
  - Networking
  - Database
  - ...

- Đã tạo và cấu hình AWS Free Tier account thành công.

- Làm quen với AWS Management Console và biết cách tìm, truy cập, sử dụng dịch vụ từ giao diện web.

- Cài đặt và cấu hình AWS CLI trên máy tính bao gồm:
  - Access Key
  - Secret Key
  - Region mặc định
  - ...

- Sử dụng AWS CLI để thực hiện các thao tác cơ bản như:
  - Kiểm tra thông tin tài khoản & cấu hình
  - Lấy danh sách region
  - Xem dịch vụ EC2
  - Tạo và quản lý key pair
  - Kiểm tra thông tin dịch vụ đang chạy
  - ...

- Có khả năng kết nối giữa giao diện web và CLI để quản lý tài nguyên AWS song song.
- ...
