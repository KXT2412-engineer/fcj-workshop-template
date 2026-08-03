---
title: "Event 3"
date: 2026-08-03
weight: 3
chapter: false
pre: " <b> 4.3. </b> "
---

# Sự kiện “AWS FCAJ Agent Forge - Deepdive”

### Mục Đích Của Sự Kiện
- Tiếp cận kiến thức chuyên sâu cấp độ nâng cao (L300) dành cho doanh nghiệp về cách xây dựng một hệ thống Trí tuệ nhân tạo Tự chủ (Agentic AI) thực tế (production-ready).
- Hiểu sâu về kiến trúc và cách thức hoạt động của dịch vụ Amazon Bedrock Agent Core thông qua 3 thành phần cốt lõi: Runtime, Identity và Gateway.
- Nắm bắt các giao thức giao tiếp mới của AI như MCP (Model Context Protocol) và A2A (Agent to Agent).
- Trải nghiệm thực hành (hands-on lab) ngay sau phần lý thuyết để áp dụng kiến thức vào việc tự tay xây dựng hệ thống Agentic AI một cách bài bản.

### Danh Sách Diễn Giả
- **Anh Nghĩa** - Chuyên gia từ AWS Study Group, diễn giả chính dẫn dắt buổi workshop với kiến thức cực kỳ uyên thâm về kiến trúc đám mây.

### Nội Dung Nổi Bật

#### Bức tranh toàn cảnh về Agentic AI
Mình nhận ra Agentic AI không chỉ dừng lại ở mức trả lời câu hỏi đơn giản (Simple Assistant) hay chạy theo một kịch bản định sẵn do lập trình viên cấu hình (deterministic workflow). Sự kiện đã chỉ ra rằng Agentic AI thực thụ là một hệ thống đa tác vụ (multi-agent), nơi các Agent có khả năng tự hiểu yêu cầu, lên kế hoạch (plan), tự đưa ra quyết định, giao tiếp và phân bổ công việc cho nhau. Điều này hoàn toàn thay đổi cách mình nhìn nhận về năng lực của Trí tuệ nhân tạo.

#### Định hình nhân vật và giao tiếp qua MCP
Mình đặc biệt chú ý đến thành phần cơ bản của 1 Agent: bộ não LLM, System Prompt (để định hình nhân vật/nhiệm vụ), và quan trọng nhất là các công cụ (Tools) để kết nối dữ liệu. Giao thức MCP (Model Context Protocol) và A2A (Agent to Agent) được giới thiệu như một chuẩn mực mới, giúp Agent giao tiếp với Tools và nói chuyện với các Agent khác một cách trơn tru, mở ra tiềm năng tự động hóa vô tận.

#### Giải pháp toàn diện: Amazon Bedrock Agent Core
Thay vì phải chật vật tự xây dựng hệ thống từ con số không (build from scratch), anh Nghĩa đã giới thiệu Amazon Bedrock Agent Core. Nó đóng vai trò như một giải pháp toàn diện giúp doanh nghiệp quản lý và triển khai Agentic AI dễ dàng, an toàn và dễ mở rộng, xoay quanh 3 trụ cột chính:

1. **Môi trường Runtime (Runtime Environment):**
   - Hoạt động hoàn toàn Serverless (không cần quản lý máy chủ, trả tiền theo mức sử dụng thực tế).
   - Được bảo vệ bằng công nghệ Firecracker Micro VM, phân lập (isolate) từng phiên chat của người dùng để ngăn ngừa tuyệt đối rò rỉ dữ liệu.
   - Hỗ trợ Versioning giúp dễ dàng roll-back khi có sự cố trên production và tích hợp khả năng xử lý bất đồng bộ (async) cho những tác vụ tốn thời gian.

2. **Lớp Identity (Định danh và Bảo mật):**
   - Trả lời bài toán hóc búa: "Ai được phép kết nối?" và "Agent được quyền truy cập công cụ nào?". 
   - Thông qua cơ chế quy đổi token JWT sang WAT (Workload Access Token) kết hợp OAuth, hệ thống không bao giờ dùng trực tiếp token của người dùng. Các mã truy cập được lưu trữ cực kỳ an toàn ngay trên Agent Core thông qua Token Vault.

3. **Lớp Gateway (Cổng kết nối đa năng):**
   - Đóng vai trò "người đứng giữa" (middleware), Gateway giúp chuẩn hóa luồng giao tiếp giữa hàng trăm Agent và hàng nghìn công cụ.
   - Tính năng "Human in the loop" (Sự can thiệp của con người) làm mình cực kỳ tâm đắc. Quản trị viên (admin) hoàn toàn có thể nhúng tay phê duyệt hoặc từ chối các quyết định nhạy cảm của Agent (ví dụ: mặc định từ chối hoàn tiền cho đơn hàng > 100$, nhưng admin có thể xem xét và bấm phê duyệt ngoại lệ).
   - Hỗ trợ Semantic Search (tìm kiếm ngữ nghĩa) thông minh để Agent tự biết cách "nhặt" đúng công cụ hữu ích nhất cho từng tác vụ.

### Những Gì Học Được
Thông qua đoạn video kéo dài hơn 1 giờ lý thuyết vô cùng đồ sộ, mình đã tích lũy được:
- Tư duy thiết kế kiến trúc AI cấp độ doanh nghiệp (Enterprise-scale), vượt xa những project đồ án nhỏ lẻ.
- Tầm quan trọng của việc bảo mật, phân quyền và cách ly dữ liệu trong hệ thống AI - những thứ mà các framework lập trình bình thường thường hay bỏ sót.
- Nắm vững chu trình giao tiếp và luồng dữ liệu khép kín từ Người dùng -> Gateway -> Agent -> Identity -> Tools.

### Ứng Dụng Vào Công Việc
- Mình sẽ áp dụng thử mô hình "Human in the loop" vào các dự án cá nhân, tạo ra một Agent xử lý tác vụ nhưng vẫn cần sự phê duyệt của con người trước khi can thiệp vào Database.
- Thiết kế hệ thống Backend vững chắc hơn thông qua tư duy bảo mật bằng Token (JWT sang internal token) như cách Identity layer của Bedrock Agent Core hoạt động.
- Tìm hiểu sâu hơn về giao thức MCP để mở rộng tính năng cho các hệ thống chatbot hiện tại.

### Trải nghiệm trong event
Dù đây là một chủ đề L300 (rất nặng về kiến trúc đám mây), nhưng cách truyền đạt thực tế và trực quan của anh Nghĩa đã giúp mình không bị "ngợp". Ngay sau phần lý thuyết chuyên sâu, việc được nhấn mạnh sẽ bắt tay ngay vào phần thực hành (hands-on lab) thực sự là một phương pháp tuyệt vời, giúp mình và những người tham dự có thể hệ thống hóa lại toàn bộ kiến thức và tự tin hơn rất nhiều khi triển khai hệ thống Agentic AI vào thực tế.


#### Hình ảnh sự kiện 
![](/fcj-workshop-template/images/4-EventParticipated/4.3-Event3/event3.jpg)
![](/fcj-workshop-template/images/4-EventParticipated/4.3-Event3/event3.1.jpg)


