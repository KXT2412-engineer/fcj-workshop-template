---
title: "Bản đề xuất"
date: 2026-05-18
weight: 2
chapter: false
pre: " <b> 2. </b> "
---

# ĐỀ XUẤT DỰ ÁN SNAPTICS

**Tên dự án:** SNAPTICS – AI-Powered Personal Expense Management and Receipt Scanning Platform
*Nền tảng quản lý, phân tích chi tiêu và quét hóa đơn ứng dụng trí tuệ nhân tạo trên AWS*

---

## 1. Tổng quan dự án
Snaptics là nền tảng quản lý tài chính cá nhân và gia đình, hỗ trợ người dùng ghi nhận, theo dõi và phân tích các khoản chi tiêu một cách trực quan. Thay vì phải nhập thủ công từng giao dịch, người dùng có thể chụp hoặc tải lên hình ảnh hóa đơn. Hệ thống sử dụng công nghệ OCR và trí tuệ nhân tạo để nhận diện thông tin trên hóa đơn, bao gồm tên cửa hàng, ngày giao dịch, tổng tiền, danh mục chi tiêu và các mặt hàng liên quan.

Sau khi dữ liệu được xử lý, Snaptics tự động lưu giao dịch, phân loại chi tiêu và cập nhật vào bảng điều khiển tài chính của người dùng. Hệ thống cung cấp biểu đồ, báo cáo, ngân sách, ví dùng chung và các gợi ý tài chính dựa trên thói quen chi tiêu.

Snaptics được xây dựng theo mô hình ứng dụng web SaaS và dự kiến triển khai trên nền tảng AWS. Kiến trúc hệ thống sử dụng các dịch vụ như AWS Amplify, Amazon CloudFront, Amazon ECS Fargate, Application Load Balancer, Amazon SQS, Amazon S3, Amazon ECR, Amazon CloudWatch và SQL Server theo mô hình Primary/Standby. Các tác vụ AI được tích hợp với Azure Document Intelligence, Gemini API và OpenAI API.

Hệ thống có hai nhóm người dùng chính:
- **User:** Quản lý giao dịch, hóa đơn, ngân sách, ví cá nhân hoặc ví gia đình, xem báo cáo và nhận gợi ý tài chính.
- **Admin:** Quản lý người dùng, thông báo, yêu cầu hỗ trợ (ticket), cấu hình hệ thống, theo dõi các tác vụ nền và giám sát hoạt động của ứng dụng.

---

## 2. Mục tiêu dự án

### 2.1. Mục tiêu tổng quát
Xây dựng một nền tảng quản lý chi tiêu thông minh, giúp người dùng giảm thời gian nhập liệu, kiểm soát ngân sách và hiểu rõ hơn về tình hình tài chính cá nhân thông qua dữ liệu và trí tuệ nhân tạo.

### 2.2. Mục tiêu cụ thể
- Tự động nhận diện thông tin từ hình ảnh hóa đơn bằng công nghệ OCR.
- Tự động tạo và phân loại giao dịch dựa trên nội dung hóa đơn.
- Cho phép người dùng nhập giao dịch thủ công khi không có hóa đơn.
- Quản lý nhiều ví, ngân sách cá nhân và ngân sách gia đình.
- Hỗ trợ nhiều thành viên cùng theo dõi một ngân sách hoặc ví dùng chung.
- Hiển thị báo cáo chi tiêu theo ngày, tuần, tháng và danh mục.
- Phân tích thói quen chi tiêu và cung cấp gợi ý tài chính bằng AI.
- Gửi cảnh báo khi người dùng sắp hoặc đã vượt ngân sách.
- Xây dựng hệ thống thông báo tập trung để truyền tải cảnh báo và lời khuyên.
- Cung cấp trang trò chuyện với AI và lưu lịch sử trao đổi.
- Xây dựng trang quản trị để theo dõi người dùng, yêu cầu hỗ trợ, thông báo và các tác vụ nền.
- Triển khai hệ thống trên AWS với khả năng mở rộng, bảo mật và giám sát tập trung.
- Xây dựng quy trình CI/CD nhằm tự động hóa việc kiểm thử và triển khai phiên bản mới.

---

## 3. Vấn đề cần giải quyết

### 3.1. Việc ghi chép chi tiêu còn thủ công
Phần lớn người dùng vẫn ghi lại chi tiêu bằng sổ tay, Excel hoặc nhập thủ công vào ứng dụng. Quá trình này mất thời gian, dễ nhập sai số tiền và thường bị bỏ quên sau một thời gian sử dụng. Snaptics giải quyết vấn đề này bằng cách cho phép người dùng chụp hóa đơn và tự động trích xuất dữ liệu giao dịch.

### 3.2. Dữ liệu tài chính bị phân tán
Thông tin chi tiêu có thể nằm ở nhiều nguồn khác nhau như hóa đơn giấy, ứng dụng ngân hàng, ví điện tử hoặc ghi chú cá nhân. Người dùng khó có được một cái nhìn tổng quan về toàn bộ dòng tiền. Snaptics tập trung dữ liệu giao dịch vào một hệ thống duy nhất để người dùng có thể theo dõi và phân tích thuận tiện hơn.

### 3.3. Khó kiểm soát ngân sách
Người dùng thường chỉ nhận ra mình đã chi tiêu quá mức sau khi ngân sách đã bị vượt. Các công cụ quản lý thông thường chủ yếu hiển thị số liệu nhưng chưa đưa ra cảnh báo hoặc lời khuyên kịp thời. Snaptics theo dõi mức sử dụng ngân sách và gửi thông báo khi người dùng tiến gần đến giới hạn đã đặt.

### 3.4. Thiếu khả năng phân tích hành vi chi tiêu
Các giao dịch riêng lẻ không cung cấp nhiều giá trị nếu không được tổng hợp và phân tích. Người dùng cần biết mình đang chi tiêu nhiều nhất vào đâu, khoản chi nào đang tăng và có thể điều chỉnh như thế nào. Snaptics sử dụng AI để phân tích lịch sử giao dịch, phát hiện xu hướng và đưa ra các gợi ý phù hợp với tình hình tài chính của từng người dùng.

### 3.5. Khó quản lý chi tiêu gia đình
Trong một gia đình, các thành viên có thể cùng đóng góp và sử dụng một nguồn ngân sách. Nếu dữ liệu không được cập nhật tập trung, các thành viên khó biết tổng số tiền đã chi hoặc ngân sách còn lại. Snaptics cung cấp ví gia đình và ngân sách dùng chung, cho phép nhiều người dùng cùng theo dõi và ghi nhận giao dịch.

### 3.6. Khả năng mở rộng của hệ thống AI
Quá trình OCR và phân tích AI có thể mất nhiều thời gian hơn các API thông thường. Nếu xử lý trực tiếp trong cùng một request, hệ thống dễ xảy ra timeout hoặc quá tải khi có nhiều người dùng quét hóa đơn cùng lúc. Dự án sử dụng Amazon SQS để xử lý các tác vụ AI theo cơ chế bất đồng bộ, giúp giảm tải cho Backend API và tăng khả năng mở rộng.

---

## 4. Kiến trúc giải pháp
Snaptics sử dụng kiến trúc cloud-native trên AWS, kết hợp ứng dụng web, container, hàng đợi xử lý bất đồng bộ, cơ sở dữ liệu có khả năng dự phòng và các dịch vụ AI bên ngoài.

### 4.1. Frontend
Frontend của Snaptics được xây dựng dưới dạng Single Page Application (SPA) và triển khai bằng AWS Amplify.
AWS Amplify chịu trách nhiệm:
- Tự động build và deploy mã nguồn Frontend.
- Kết nối trực tiếp với GitHub Repository.
- Quản lý các phiên bản triển khai.
- Cung cấp HTTPS cho ứng dụng.
- Tự động triển khai lại khi có thay đổi trên nhánh được cấu hình.
Amazon Route 53 được sử dụng để quản lý tên miền. Amazon CloudFront phân phối nội dung thông qua hệ thống CDN, giúp cải thiện tốc độ truy cập của người dùng.

### 4.2. Backend API
Backend API được đóng gói thành Docker Image và lưu trữ trên Amazon Elastic Container Registry – ECR.
Các container được triển khai trong Amazon ECS Cluster bằng AWS Fargate. Fargate cho phép hệ thống vận hành container mà không phải trực tiếp quản lý hạ tầng máy chủ. Các request từ người dùng được chuyển qua Application Load Balancer trước khi đến các Fargate Task. Load Balancer phân phối request giữa nhiều container, giúp tăng tính sẵn sàng và tránh phụ thuộc vào một máy chủ duy nhất. Hệ thống sử dụng Auto Scaling để tăng hoặc giảm số lượng Fargate Task dựa trên lưu lượng truy cập và tài nguyên sử dụng.

### 4.3. Cơ sở dữ liệu
Dữ liệu nghiệp vụ của hệ thống được lưu trong SQL Server, bao gồm:
- Thông tin người dùng.
- Giao dịch, Danh mục chi tiêu, Hóa đơn.
- Ví cá nhân và ví gia đình.
- Ngân sách và Thành viên ngân sách.
- Thông báo, Lịch sử trò chuyện với AI.
- Yêu cầu hỗ trợ (ticket) và Nhật ký hoạt động hệ thống.

Cơ sở dữ liệu được thiết kế theo mô hình SQL Server Primary/Standby và đặt trong các Private Subnet thuộc hai Availability Zone khác nhau. Cơ sở dữ liệu Primary xử lý các hoạt động chính. Cơ sở dữ liệu Standby được sử dụng để tăng khả năng dự phòng và hỗ trợ khôi phục khi hệ thống chính gặp sự cố.

### 4.4. Lưu trữ hình ảnh
Amazon S3 được sử dụng để lưu trữ:
- Hình ảnh hóa đơn do người dùng tải lên.
- Tệp dữ liệu liên quan đến giao dịch.
- Hình ảnh trước và sau quá trình xử lý.
- Các tệp cần lưu trữ lâu dài.
Việc tách hình ảnh khỏi cơ sở dữ liệu giúp giảm dung lượng lưu trữ trong database và hỗ trợ mở rộng không gian lưu trữ linh hoạt.

### 4.5. Xử lý OCR và AI
Khi người dùng tải lên một hóa đơn, Backend lưu hình ảnh vào S3 và gửi một thông điệp đến hàng đợi Amazon SQS `snaptics-ai-queue`. AI Worker chạy trên ECS Fargate sẽ lấy thông điệp từ hàng đợi và thực hiện các bước:
1. Đọc thông tin tệp hóa đơn.
2. Gửi hình ảnh đến Azure Document Intelligence để nhận diện nội dung.
3. Chuẩn hóa dữ liệu được trích xuất.
4. Sử dụng Gemini API hoặc OpenAI API để phân loại và phân tích giao dịch.
5. Lưu kết quả vào cơ sở dữ liệu.
6. Tạo thông báo hoặc gợi ý tài chính cho người dùng.

Các thông điệp xử lý thất bại nhiều lần sẽ được chuyển vào Dead Letter Queue. Điều này giúp đội ngũ phát triển kiểm tra lỗi mà không làm mất dữ liệu hoặc chặn toàn bộ hàng đợi chính.

### 4.6. Hệ thống thông báo
Thông báo trong ứng dụng được lưu trữ và quản lý tập trung trong cơ sở dữ liệu. Amazon SNS được sử dụng để hỗ trợ phân phối các cảnh báo hoặc thông báo cần gửi ra ngoài hệ thống. Thông báo có thể bao gồm:
- Kết quả xử lý hóa đơn, Cảnh báo sắp/đã vượt ngân sách.
- Gợi ý chi tiêu từ AI, Thông báo mời tham gia ví.
- Thông báo đánh giá sản phẩm hoặc đồ dùng, Thông báo hệ thống, Phản hồi từ bộ phận hỗ trợ.

### 4.7. Bảo mật
Thông tin nhạy cảm như chuỗi kết nối cơ sở dữ liệu, API Key và các thông số cấu hình được lưu trong AWS Systems Manager Parameter Store. Các thành phần Backend và Database được đặt trong Private Subnet. Chỉ Application Load Balancer được phép tiếp nhận request từ Internet.
Hệ thống áp dụng các biện pháp:
- Xác thực và phân quyền bằng access token.
- Phân chia quyền Admin và User.
- Không lưu API Key trực tiếp trong mã nguồn.
- Mã hóa kết nối bằng HTTPS.
- Giới hạn quyền truy cập theo nguyên tắc least privilege.
- Kiểm tra định dạng và kích thước tệp tải lên.
- Ghi nhận lịch sử hoạt động quan trọng, Sao lưu cơ sở dữ liệu định kỳ.

### 4.8. CI/CD
Quy trình CI/CD của Snaptics được thực hiện thông qua GitHub và GitHub Actions.
Quy trình Backend:
1. Developer đẩy mã nguồn lên GitHub Repository.
2. GitHub Actions kiểm tra và build dự án.
3. Docker Image được tạo và đẩy lên Amazon ECR.
4. ECS Service được cập nhật.
5. Fargate Task mới kéo Docker Image từ ECR.
6. Hệ thống thay thế phiên bản cũ bằng phiên bản mới.

Đối với Frontend, AWS Amplify tự động build và deploy khi phát hiện thay đổi trên GitHub Repository.

### 4.9. Giám sát và quản lý chi phí
Amazon CloudWatch được sử dụng để:
- Thu thập log của Backend và AI Worker.
- Theo dõi CPU và bộ nhớ của Fargate Task.
- Theo dõi số lượng thông điệp trong SQS.
- Phát hiện request lỗi, Thiết lập cảnh báo khi hệ thống gặp sự cố.
AWS Budgets được sử dụng để theo dõi chi phí và gửi cảnh báo khi chi phí AWS vượt quá giới hạn được thiết lập.

### 4.10. Luồng xử lý chính
Luồng xử lý quét hóa đơn được thực hiện như sau:
1. Người dùng đăng nhập vào Snaptics.
2. Người dùng chụp hoặc tải lên hình ảnh hóa đơn.
3. Frontend gửi hình ảnh đến Backend API.
4. Backend lưu hình ảnh vào Amazon S3.
5. Backend tạo thông điệp trong Amazon SQS.
6. AI Worker nhận thông điệp từ SQS.
7. Hình ảnh được xử lý bằng Azure Document Intelligence.
8. Gemini API hoặc OpenAI API phân loại và phân tích dữ liệu.
9. Kết quả được lưu vào SQL Server.
10. Backend tạo giao dịch và thông báo cho người dùng.
11. Dashboard và báo cáo chi tiêu được cập nhật.

### 4.11. Sơ đồ kiến trúc tổng thể
![Architecture Diagram](/fcj-workshop-template/images/2-Proposal/architecture_diagram.jpg)

---

## 5. Timeline dự án
Thời gian thực hiện dự kiến là 12 tuần.

**Tuần 1–2: Phân tích yêu cầu và thiết kế hệ thống**
- Xác định đối tượng người dùng, Phân tích yêu cầu chức năng và phi chức năng.
- Xây dựng Use Case và User Flow, Thiết kế cơ sở dữ liệu, Thiết kế kiến trúc AWS.
- Xác định công nghệ Frontend, Backend và AI.
*Kết quả kỳ vọng:* Tài liệu yêu cầu, Database Schema và sơ đồ kiến trúc tổng thể.

**Tuần 3–5: Phát triển chức năng nền tảng**
- Xây dựng chức năng đăng ký/đăng nhập, phân quyền Admin và User.
- Quản lý giao dịch, danh mục chi tiêu, ví.
- Ngân sách cá nhân và ngân sách gia đình, Phát triển Dashboard tổng quan.
*Kết quả kỳ vọng:* Người dùng có thể quản lý giao dịch, ví và ngân sách trên hệ thống.

**Tuần 6–8: Tích hợp OCR và AI**
- Xây dựng giao diện quét hóa đơn, Tích hợp Azure Document Intelligence.
- Xây dựng quy trình tải hình ảnh lên S3, Thiết lập SQS và Dead Letter Queue.
- Tích hợp Gemini API và OpenAI API, Tự động phân loại giao dịch.
- Xây dựng chức năng AI Insight và hệ thống thông báo.
*Kết quả kỳ vọng:* Hệ thống có thể tự động xử lý hóa đơn và cung cấp gợi ý chi tiêu.

**Tuần 9–10: Hoàn thiện chức năng quản trị**
- Trang quản lý người dùng, yêu cầu hỗ trợ, thông báo.
- Cấu hình và kiểm tra các tác vụ nền, Trang cài đặt hệ thống.
- Hoàn thiện giao diện responsive trên điện thoại.
*Kết quả kỳ vọng:* Admin có thể theo dõi và quản lý các hoạt động chính của hệ thống.

**Tuần 11: Triển khai AWS và CI/CD**
- Cấu hình VPC, Public/Private Subnet.
- Triển khai SQL Server Primary/Standby.
- Tạo S3 Bucket, SQS, DLQ và SNS.
- Build Docker Image và đẩy lên ECR, Triển khai Backend và AI Worker trên ECS Fargate.
- Cấu hình ALB, Triển khai Frontend bằng AWS Amplify.
- Cấu hình Route 53 và CloudFront, Thiết lập GitHub Actions.
*Kết quả kỳ vọng:* Hệ thống được triển khai trên môi trường AWS.

**Tuần 12: Kiểm thử và hoàn thiện**
- Kiểm thử chức năng, tích hợp, giao diện trên nhiều thiết bị.
- Kiểm thử quy trình OCR và AI, Kiểm tra bảo mật.
- Kiểm tra khả năng xử lý lỗi của SQS và DLQ.
- Theo dõi log bằng CloudWatch.
- Hoàn thiện tài liệu và chuẩn bị demo.
*Kết quả kỳ vọng:* Phiên bản thử nghiệm của Snaptics được hoàn thiện, sẵn sàng trình bày, kiểm thử và thu thập phản hồi.

---

## 6. Ngân sách dự kiến
Chi phí thực tế phụ thuộc vào lượng người dùng, số hóa đơn được xử lý, dung lượng hình ảnh, thời gian chạy của container và số lượng request đến các AI API.

### 6.1. Môi trường phát triển và demo
| Hạng mục | Chi phí dự kiến mỗi tháng |
| --- | --- |
| AWS Amplify, CloudFront và Route 53 | 5–15 USD |
| Amazon S3 | 1–5 USD |
| ECS Fargate cho Backend và AI Worker | 20–50 USD |
| Application Load Balancer | 18–25 USD |
| SQL Server môi trường phát triển | 30–80 USD |
| Amazon SQS, SNS và ECR | 2–10 USD |
| CloudWatch và AWS Budgets | 2–10 USD |
| Azure Document Intelligence, Gemini và OpenAI | Phụ thuộc số lượt sử dụng |
| **Tổng dự kiến** | **80–200 USD/tháng** |

### 6.2. Môi trường Production Multi-AZ
| Hạng mục | Chi phí dự kiến mỗi tháng |
| --- | --- |
| ECS Fargate và Application Load Balancer | 60–150 USD |
| SQL Server Primary/Standby | 150–300 USD |
| Hai NAT Gateway và chi phí truyền dữ liệu | 70–120 USD |
| S3, CloudFront, SQS, SNS, ECR và CloudWatch | 20–60 USD |
| Dịch vụ AI bên ngoài | Phụ thuộc số lượt sử dụng |
| **Tổng dự kiến** | **300–600 USD/tháng** |

Trong giai đoạn phát triển và demo, dự án có thể sử dụng cấu hình nhỏ, mô hình Single-AZ hoặc giới hạn thời gian chạy của một số dịch vụ để tối ưu chi phí. Khi triển khai Production, hệ thống dự kiến chuyển sang kiến trúc Multi-AZ và Auto Scaling.

---

## 7. Rủi ro dự án

### 7.1. Sai lệch trong quá trình nhận diện hóa đơn
- **Mức độ:** Cao.
- **Biện pháp giảm thiểu:** Cho phép người dùng xem lại và chỉnh sửa kết quả nhận diện, Hiển thị hình ảnh gốc bên cạnh dữ liệu, Kiểm tra tính hợp lệ của ngày/số tiền, Đưa các trường độ tin cậy thấp vào trạng thái cần xác nhận.

### 7.2. Phụ thuộc vào dịch vụ AI bên ngoài
- **Mức độ:** Cao.
- **Biện pháp giảm thiểu:** Xử lý AI thông qua SQS, Áp dụng Retry với Exponential Backoff, Chuyển tác vụ thất bại vào Dead Letter Queue, Xây dựng lớp AI Service dễ thay đổi nhà cung cấp, Cho phép nhập thủ công.

### 7.3. Rò rỉ dữ liệu tài chính
- **Mức độ:** Rất cao.
- **Biện pháp giảm thiểu:** Sử dụng HTTPS, Lưu secret trong Parameter Store, Phân quyền rõ ràng Admin/User, Kiểm tra quyền sở hữu dữ liệu, Mã hóa dữ liệu lưu trữ.

### 7.4. Chi phí AWS và AI tăng ngoài dự kiến
- **Mức độ:** Trung bình đến cao.
- **Biện pháp giảm thiểu:** Thiết lập AWS Budgets và cảnh báo, Nén hình ảnh, Thiết lập Lifecycle Policy cho S3, Giới hạn kích thước hóa đơn, Cache kết quả.

### 7.5. Quá tải khi có nhiều yêu cầu quét hóa đơn
- **Mức độ:** Trung bình.
- **Biện pháp giảm thiểu:** Sử dụng Amazon SQS, Tự động tăng số lượng AI Worker dựa trên Queue Depth, Giới hạn số task tối đa, Tách riêng Backend API và AI Worker.

### 7.6. Lỗi trong quá trình triển khai phiên bản mới
- **Mức độ:** Trung bình.
- **Biện pháp giảm thiểu:** Tự động build và kiểm tra thông qua CI/CD, Quản lý biến môi trường riêng, Triển khai rolling update trên ECS, Kiểm tra health check, Lưu lại Docker Image ổn định để rollback.

### 7.7. Kết quả phân tích AI chưa phù hợp
- **Mức độ:** Trung bình.
- **Biện pháp giảm thiểu:** Chỉ sử dụng dữ liệu đã được xác nhận, Trình bày AI Insight dưới dạng gợi ý tham khảo, Cải thiện prompt dựa trên phản hồi.

---

## 8. Kỳ vọng của dự án
Với phạm vi và kiến trúc đã đề xuất, nhóm kỳ vọng Snaptics sẽ tạo ra một phiên bản thử nghiệm có thể vận hành xuyên suốt từ ghi nhận hóa đơn đến phân tích và hiển thị kết quả cho người dùng. Các kết quả kỳ vọng gồm:
- Hoàn thiện các chức năng cốt lõi gồm quản lý giao dịch, ví, ngân sách cá nhân và gia đình, quét hóa đơn, thông báo, AI Insight và trang quản trị.
- Giảm thao tác nhập liệu thủ công thông qua quy trình OCR có bước xác nhận và chỉnh sửa dữ liệu trước khi lưu.
- Hỗ trợ người dùng theo dõi chi tiêu tập trung, nhận biết xu hướng và kiểm soát ngân sách chủ động hơn.
- Chứng minh khả năng vận hành của kiến trúc cloud-native trên AWS, bao gồm xử lý bất đồng bộ, giám sát, dự phòng và CI/CD.
- Tạo nền tảng để nhóm thử nghiệm với người dùng, thu thập phản hồi và tiếp tục cải thiện độ chính xác cũng như trải nghiệm sử dụng.
