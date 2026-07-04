---
title: "Worklog Tuần 1"
date: 2026-05-18
weight: 1
chapter: false
pre: " <b> 1.1. </b> "
---

### Mục tiêu tuần 1:

- Nắm vững quy chế và hướng dẫn của đợt thực tập First Cloud Journey.
- Hiểu dịch vụ AWS cơ bản, làm quen với giao diện Console & AWS CLI.
- Định hình ý tưởng và chuẩn bị nền móng ban đầu cho dự án cá nhân (Snaptic).

### Các công việc cần triển khai trong tuần này:
| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| --- | --- | --- | --- | --- |
| 2 | - Làm quen với các thành viên FCJ <br> - Đọc và lưu ý các nội quy, quy định tại đơn vị thực tập | 18/05/2026 | 18/05/2026 | <a href="https://policies.fcjuni.com/">policies.fcjuni.com</a> |
| 3 | - Tìm hiểu AWS và các loại dịch vụ <br>&emsp; + Compute <br>&emsp; + Storage <br>&emsp; + Networking <br>&emsp; + Database <br>&emsp; + ... | 19/05/2026 | 19/05/2026 | <a href="https://cloudjourney.awsstudygroup.com/">AWS Study Group</a> <br> <a href="https://www.youtube.com/watch?v=HxYZAK1coOI&list=PLahN4TLWtox2a3vElknwzU_urND8hLn1i">Module 01-01 - Điện Toán Đám Mây Là Gì?</a> <br> <a href="https://www.youtube.com/watch?v=IK59Zdd1poE&list=PLahN4TLWtox2a3vElknwzU_urND8hLn1i">Module 01-02 - Điều Gì Tạo Nên Sự Khác Biệt Của AWS?</a> <br> <a href="https://www.youtube.com/watch?v=pjr5a-HYAjI&list=PLahN4TLWtox2a3vElknwzU_urND8hLn1i">Module 01-04 - Hạ Tầng Toàn Cầu Của AWS</a> <br> <a href="https://www.youtube.com/watch?v=2PQYqH_HkXw&list=PLahN4TLWtox2a3vElknwzU_urND8hLn1i">Module 01-05 - Công Cụ Quản Lý AWS Services</a> |
| 4 | - Tạo AWS Free Tier account <br> - Tìm hiểu AWS Console & AWS CLI <br> - **Thực hành:** <br>&emsp; + Tạo AWS account <br>&emsp; + Cài đặt & cấu hình AWS CLI <br> &emsp; + Các lệnh cơ bản với AWS CLI | 20/05/2026 | 20/05/2026 | <a href="https://000001.awsstudygroup.com">000001.awsstudygroup.com</a> <br> <a href="https://000011.awsstudygroup.com/">000011.awsstudygroup.com</a> <br> <a href="https://www.youtube.com/watch?v=waR5S_lljrk&list=PLahN4TLWtox2a3vElknwzU_urND8hLn1i">Module 01-Lab01-01 - Create an AWS account</a> <br> <a href="https://www.youtube.com/watch?v=2PQYqH_HkXw&list=PLahN4TLWtox2a3vElknwzU_urND8hLn1i">Module 01-05 - Công Cụ Quản Lý AWS Services (bao gồm Console)</a> |
| 5 | - Tìm hiểu EC2 cơ bản: <br>&emsp; + Instance types, AMI, EBS <br> - Các phương thức kết nối SSH vào EC2 <br> - Tìm hiểu về Elastic IP | 21/05/2026 | 21/05/2026 | <a href="https://000004.awsstudygroup.com/">000004.awsstudygroup.com</a> <br> <a href="https://www.youtube.com/watch?v=duJEdF_g1To&list=PLahN4TLWtox2a3vElknwzU_urND8hLn1i">Module 02-Lab03-04.1 - Create EC2 Instances in Subnets</a> <br> <a href="https://www.youtube.com/watch?v=wWu67GyrUNY&list=PLahN4TLWtox2a3vElknwzU_urND8hLn1i">Module 02-Lab03-04.2 - Test connection (SSH)</a> <br> <a href="https://www.youtube.com/watch?v=7NjNTnXon5s&list=PLahN4TLWtox2a3vElknwzU_urND8hLn1i">Module 02-Lab03-04.5 - EC2 Instance Connect Endpoint</a> |
| 6 | - **Thực hành Cloud:** <br>&emsp; + Tạo EC2 instance, gắn EBS volume <br>&emsp; + Kết nối SSH thành công <br> - **Dự án Snaptic:** <br>&emsp; + Chốt scope quản lý chi tiêu <br>&emsp; + Phác thảo sơ đồ Database ban đầu | 22/05/2026 | 22/05/2026 | <a href="https://www.youtube.com/watch?v=duJEdF_g1To&list=PLahN4TLWtox2a3vElknwzU_urND8hLn1i">Module 02-Lab03-04.1 - Create EC2 Instances</a> <br> <a href="https://www.youtube.com/watch?v=wWu67GyrUNY&list=PLahN4TLWtox2a3vElknwzU_urND8hLn1i">Module 02-Lab03-04.2 - Test connection</a> |

### Kết quả đạt được tuần 1:

- Hiểu AWS là gì và nắm được các nhóm dịch vụ cơ bản:
  - Compute (EC2)
  - Storage (S3, EBS)
  - Networking (VPC)
  - Database (RDS, DynamoDB)

- Đã tạo và cấu hình AWS Free Tier account thành công, sẵn sàng môi trường thực hành.

- Làm quen với AWS Management Console và biết cách tìm, truy cập, sử dụng dịch vụ từ giao diện web.

- Cài đặt và cấu hình AWS CLI trên máy tính bao gồm:
  - Access Key & Secret Key
  - Region mặc định

- Sử dụng AWS CLI để thực hiện các thao tác cơ bản như:
  - Kiểm tra thông tin tài khoản & cấu hình
  - Lấy danh sách region, xem dịch vụ EC2 đang chạy
  - Tạo và quản lý key pair

- Khởi tạo thành công máy chủ ảo EC2 đầu tiên, thao tác gắn ổ cứng EBS và kết nối SSH từ xa.
- Định hình rõ ràng lộ trình phát triển cho dự án cá nhân Snaptic để chuẩn bị cho tuần sau.