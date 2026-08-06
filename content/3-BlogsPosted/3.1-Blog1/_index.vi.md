---
title: "Blog 1"
date: 2024-01-01
weight: 1
chapter: false
pre: " <b> 3.1. </b> "
---

# NHỮNG BÀI HỌC TỪ KIẾN TRÚC TÍCH HỢP AI ĐỂ XÂY DỰNG CHATBOT TRÊN AWS

Chào các bạn,

Dựa trên bài đăng về việc xây dựng Chatbot tích hợp Generative AI trên AWS, mình đã đúc kết được rất nhiều kiến thức quý giá về cách triển khai một ứng dụng AI Serverless thực tế. Dưới đây là những gì mình đã học được:

![Kiến trúc chatbot tích hợp AI trên AWS](/fcj-workshop-template/images/3-BlogsPosted/3.1-Blog1/blog1.png)

## 1. Tư duy xây dựng kiến trúc Serverless AI
- **Kiến thức tiếp thu:** Thay vì tự quản lý máy chủ để chạy các mô hình ngôn ngữ lớn (LLMs), AWS cung cấp một hệ sinh thái Serverless cho phép tích hợp AI một cách dễ dàng và tiết kiệm chi phí.
- **Bài học rút ra:** Việc kết hợp **Amazon API Gateway** và **AWS Lambda** giúp hệ thống dễ dàng mở rộng, tự động xử lý hàng ngàn yêu cầu mà không cần lo lắng về việc duy trì hạ tầng.

## 2. Sức mạnh của Amazon Bedrock
- **Kiến thức tiếp thu:** Amazon Bedrock là dịch vụ trung tâm để phát triển các ứng dụng Generative AI.
- **Bài học rút ra:** Mình học được cách ứng dụng gọi API đến Bedrock thông qua Lambda để xử lý logic, tạo ra phản hồi tự nhiên cho Chatbot. Việc tách rời logic kinh doanh và AI API giúp kiến trúc trở nên linh hoạt hơn.

## 3. Quản lý luồng tương tác với Amazon DynamoDB
- **Kiến thức tiếp thu:** Chatbot cần lưu trữ lịch sử cuộc hội thoại để hiểu ngữ cảnh.
- **Bài học rút ra:** Việc sử dụng DynamoDB để lưu trữ Session State và lịch sử tin nhắn là một giải pháp hoàn hảo vì tốc độ truy xuất cực nhanh và khả năng tự mở rộng.

## 4. Bảo mật và quản lý định danh người dùng
- **Kiến thức tiếp thu:** Bảo mật luôn là ưu tiên hàng đầu trong các ứng dụng Enterprise.
- **Bài học rút ra:** Thông qua bài đăng, mình nhận thấy tầm quan trọng của việc sử dụng **Amazon Cognito** để xác thực người dùng và **AWS WAF** để bảo vệ API Gateway khỏi các cuộc tấn công web.

**Tổng kết:** Bài đăng này không chỉ cung cấp một sơ đồ kiến trúc mà còn giúp mình hình dung rõ ràng vòng đời của một tin nhắn từ người dùng đến AI và ngược lại. Nó mở ra cho mình hướng đi mới trong việc ứng dụng Cloud-Native vào AI.

---

### Bài viết tham khảo:
- 📌 **[AWS Blog: Build a Serverless Generative AI Chatbot](https://aws.amazon.com/blogs/machine-learning/build-a-serverless-generative-ai-chatbot-using-amazon-bedrock-and-aws-lambda/)**
- 📌 **[AWS Blog: Amazon Cognito unlocks new capabilities...](https://aws.amazon.com/blogs/security/amazon-cognito-unlocks-new-capabilities-for-customer-identity-and-access-management/)**
