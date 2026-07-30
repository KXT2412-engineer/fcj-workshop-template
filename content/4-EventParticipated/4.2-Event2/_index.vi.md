---
title: "Event 2"
date: 2026-07-25
weight: 2
chapter: false
pre: " <b> 4.2. </b> "
---

# sự kiện “FCAJ x Agentic AI Build Week: Show Up. Build. Pitch. WIN!”

### Mục Đích Của Sự Kiện
- Tạo ra một sân chơi thực chiến (Hackathon) để mình và các builder khác có cơ hội tự tay xây dựng các ứng dụng Agentic AI giải quyết những bài toán thực tế.
- Khuyến khích tinh thần "Show Up. Build. Pitch. WIN!" – dám xuất hiện, dám làm, dám trình bày ý tưởng và vượt qua giới hạn của bản thân trong một thời gian cực ngắn (24-48 giờ).
- Mang đến cho mình không gian để kết nối (networking), làm việc nhóm và học hỏi trực tiếp từ các chuyên gia kiến trúc giải pháp (Solution Architect) của AWS và các quỹ đầu tư (như JI Fund).

### Danh Sách Diễn Giả & Khách Mời
- **Mr. Joseph Marazota** – Head of Technology of ASEAN, AWS (Phát biểu truyền cảm hứng khởi động).
- **Mr. Nguyễn Gia Hưng** – Head of Solution Architect of Vietnam, AWS.
- Đại diện các đội thi xuất sắc chia sẻ giải pháp (One Team, Signal Scout, Team Plan, 3K, Six Pillar).

### Nội Dung Nổi Bật

#### Lời khuyên định hình tư duy từ chuyên gia AWS
Sự kiện mở đầu bằng những chia sẻ cực kỳ thấm thía từ Mr. Joseph Marazota. Mình nhận ra rằng thế hệ lập trình viên trẻ hiện tại đang có một lợi thế khổng lồ: không bị trói buộc bởi những "di sản" công nghệ cũ (legacy systems) từ 20 năm trước. Thay vì chỉ giữ tư duy "làm cho hệ thống chạy ổn định", tụi mình được khuyến khích liên tục thách thức giới hạn, ứng dụng AI Agent để tự động hóa mọi thứ và trở thành những người dẫn dắt kỷ nguyên công nghệ trong 2-3 năm tới.

#### Bữa tiệc ý tưởng AI Agent đột phá từ các đội thi
Điểm sáng nhất của sự kiện là phần Pitching (thuyết trình) và Demo của các đội thi. Mình thực sự choáng ngợp trước những gì họ có thể làm được chỉ trong 1-2 ngày:
- **Dự án Bot đặt hàng đa kênh (One Team):** Giải quyết nỗi đau người dùng lười tải App (App fatigue) bằng cách tạo ra AI Agent đặt KFC trực tiếp trên Zalo/WhatsApp cực kỳ mượt mà.
- **Hệ thống phân tích đối thủ (Signal Scout):** Sử dụng các AI Agent để tự động cào dữ liệu (crawling), phân tích chiến lược của đối thủ cạnh tranh và đưa ra dự báo doanh thu.
- **Trợ lý SA tự động (Team Plan):** Giải pháp giúp các Solution Architect tự động vẽ sơ đồ kiến trúc (Architecture Diagram) và sinh code Terraform/CloudFormation chỉ từ những dòng mô tả bằng ngôn ngữ tự nhiên.
- **Hệ thống giám sát đám đông (Team 3K):** Ứng dụng Computer Vision (YOLO) kết hợp Bedrock Agent để phân tích camera an ninh tại sân bay, siêu thị nhằm điều phối luồng người, tránh ùn tắc.
- **Phòng chống rửa tiền AML (Six Pillar):** Ứng dụng Agentic AI vào nghiệp vụ tài chính, tự động tra soát hồ sơ KYC, đối chiếu luật (legal/typology) và giảm thiểu các cảnh báo sai (false positive) cho ngân hàng.

#### Tầm quan trọng của Business Value (Giá trị kinh doanh)
Một điểm nổi bật xuyên suốt các bài thuyết trình là: Công nghệ xịn đến đâu cũng vô nghĩa nếu không giải quyết được "nỗi đau" (pain point) của thị trường. Việc vẽ ra Business Model Canvas và trả lời được câu hỏi "Ai sẽ dùng hệ thống này?" quan trọng không kém gì việc viết code.

### Những Gì Mình Học Được

#### Hệ Sinh Thái Các Dịch Vụ AWS Đã Nắm Bắt
Qua việc phân tích kiến trúc (Architecture) của các đội thi, mình đã gom nhặt và hệ thống hóa được cách kết hợp các dịch vụ AWS cho các bài toán thực tế:
- **Core AI & LLM:** `Amazon Bedrock` (trái tim của hệ thống Agent), `Bedrock Guardrails` (kiểm soát hallucination), `Bedrock Knowledge Bases` (dành cho RAG).
- **Compute & Integration:** `AWS Lambda` (xử lý logic linh hoạt), `AWS Step Functions` (điều phối luồng của các Multi-Agent).
- **Data & Streaming:** `Amazon Kinesis Video Streams` (thu thập video realtime cho AI Vision), `Amazon DynamoDB` (lưu trữ metadata, lịch sử chat của Agent).
- **Security & Front-end:** `AWS WAF`, `Amazon Cognito` (xác thực), và `AWS Amplify` (triển khai frontend nhanh chóng).

#### Tư Duy Thiết Kế & Quản trị rủi ro AI
- Mình học được cách thiết kế **Human-in-the-loop** (Luôn có con người ở bước cuối). Ví dụ như team Six Pillar khi làm về tài chính, AI Agent chỉ làm nhiệm vụ tổng hợp chứng cứ, còn quyền quyết định "Escalate" (Báo cáo) hay "Dismiss" (Bỏ qua) vẫn thuộc về con người. 
- Sử dụng nhiều Sub-agent (Agent con) chuyên biệt thay vì một Agent mẹ gánh mọi tác vụ để dễ debug và tăng độ chính xác.

#### Kỹ Năng "Sinh Tồn" Trong Hackathon
- **Kiểm soát Scope (Phạm vi):** Đừng tham lam làm quá nhiều tính năng. Hãy tập trung làm ra một MVP (Minimum Viable Product) vừa đủ để có thể Demo live cho Ban giám khảo xem. Sản phẩm trên giấy sẽ không bao giờ chiến thắng.

### Cách Mình Ứng Dụng Vào Công Việc
- Mình sẽ lấy động lực từ sự kiện này để mạnh dạn đăng ký tham gia một giải Hackathon trong thời gian gần nhất, không quan trọng giải thưởng mà để rèn luyện kỹ năng code dưới áp lực cao.
- Khi triển khai đồ án môn học sắp tới, mình sẽ áp dụng quy trình rõ ràng: Phác thảo Business Value -> Chốt Scope -> Vẽ Architecture diagram -> Phân chia task -> Code và Deploy.
- Thử nghiệm tích hợp hệ thống Multi-Agent bằng Amazon Bedrock vào các dự án cá nhân.

### Trải nghiệm thực tế của mình trong event

#### Học hỏi từ những câu chuyện "Cười ra nước mắt"
Những chia sẻ phía sau hậu trường của các đội thi làm mình thấy rất đồng cảm và thực tế. Từ chuyện tranh cãi nảy lửa vì cái tôi quá cao, code chạy không được phải rủ nhau đi dạo lúc 1 giờ sáng, thức tới 4-5 giờ sáng uống Redbull, cho đến những pha "tự hủy" như push nhầm file `.env` lên GitHub hay bị cạn kiệt API Token ngay lúc sắp thi. Tất cả tạo nên một bức tranh cực kỳ sống động về nghề lập trình.

#### Trải nghiệm kỹ thuật thực tế
Được tận mắt chứng kiến những màn live demo (như việc AI tự động nhận diện và đếm người qua camera theo thời gian thực) mang lại cho mình cảm giác rất phấn khích. Việc nhìn thấy kiến trúc trên slide biến thành một phần mềm chạy thật ngay trên sân khấu đã truyền cho mình một nguồn cảm hứng to lớn.

#### Kết nối và thấu hiểu giá trị của Teamwork
Mình nhận ra rằng, trong kỷ nguyên AI, không ai có thể học và làm mọi thứ một mình. Kỹ năng quan trọng nhất không phải là code giỏi nhất, mà là khả năng dẹp bỏ cái tôi, tin tưởng đồng đội, phân chia công việc (người làm frontend, người thiết kế kiến trúc, người lo thuyết trình) để cùng hướng tới một mục tiêu chung.

#### Bài học rút ra
"Chỉ cần dám bắt đầu, bạn đã chiến thắng chính mình". Sự kiện FCAJ x Agentic AI Build Week không chỉ cho mình kiến thức về Cloud hay AI, mà còn trao cho mình sự dũng cảm để bước ra khỏi vùng an toàn. Công nghệ luôn phát triển, và cách tốt nhất để không bị bỏ lại phía sau là xắn tay áo lên, tìm những người đồng đội chung chí hướng và bắt tay vào "Build".

#### Một số hình ảnh khi tham gia sự kiện

![](6C7A2983.jpg)
![](6C7A2921.JPG)


