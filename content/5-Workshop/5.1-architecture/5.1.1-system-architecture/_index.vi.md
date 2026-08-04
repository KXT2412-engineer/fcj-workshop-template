---
title: "Sơ đồ Kiến trúc Hệ thống"
date: 2024-01-01
weight: 1
chapter: false
pre: " <b> 5.1.1. </b> "
---

# System Architecture Diagram

![Snaptics AWS Architecture](/fcj-workshop-template/images/5.1.1snaptics-architecture.png)

Thiết kế mạng Multi-Stack của Snaptics tuân thủ nghiêm ngặt nguyên tắc bảo mật: cô lập hoàn toàn tầng Public và Private, đồng thời kiểm soát luồng truy cập qua Application Load Balancer và các Security Groups đặc thù.

```mermaid
graph TD
    User((Người dùng Mobile/Web)) -->|HTTPS/WebSocket| IGW[Internet Gateway]
    IGW --> ALB[Application Load Balancer \n Public Subnet]
    
    subgraph "VPC: ap-southeast-1"
        ALB -->|Forward 8080| ECS[ECS Fargate: Snaptics Core API \n Private Subnet]
        
        subgraph "Application Layer"
            ECS -.->|Background processing| Hangfire[Hangfire Workers]
        end
        
        subgraph "Data Storage Layer"
            ECS -->|Entity Framework| RDS[(Amazon RDS SQL Server \n Private Subnet)]
            ECS -->|Presigned URLs| S3[Amazon S3 Bucket \n Hóa đơn & Avatar]
        end
        
        subgraph "Event-Driven & Messaging"
            ECS -->|Publish Event| SQS[Amazon SQS \n snaptics-main-queue]
            SQS --> Hangfire
            ECS -->|Push Alert| SNS[Amazon SNS \n snaptics-alerts]
        end
        
        subgraph "Security & Config"
            ECS -->|Fetch on Startup| SSM[SSM Parameter Store]
        end
        
        ECS -->|Outbound traffic| NAT[NAT Gateway \n Public Subnet]
    end
    
    NAT -->|HTTPS| ExternalAI
    
    subgraph "External AI Services"
        ExternalAI --> Gemini[Google Gemini API \n Tài chính thông minh]
        ExternalAI --> AzureDoc[Azure Document Intelligence \n OCR Hóa đơn]
    end
```

### Phân tích Luồng Hoạt động (Data Flow)

1. **User Request:** Người dùng gọi API hoặc tải hóa đơn lên thông qua Mobile App. Request đi qua `Internet Gateway` và được phân giải bởi `Application Load Balancer (ALB)`.
2. **Compute Routing:** ALB kiểm tra chứng chỉ SSL và định tuyến request vào các Container .NET đang chạy trên `ECS Fargate` nằm an toàn trong mạng Private.
3. **Data Persistance:** ECS xử lý logic kinh doanh, lưu trữ file vật lý lên `S3` và lưu trữ giao dịch tài chính (Transactions) vào `RDS SQL Server`.
4. **Asynchronous Processing:** Nếu có tác vụ tốn thời gian (ví dụ: tạo báo cáo tài chính tháng), ECS đẩy một message vào `SQS`. `Hangfire Worker` (chạy song song trong cùng container hoặc cluster) sẽ bốc message này ra xử lý ngầm.
5. **AI Integration:** Khi cần đọc hóa đơn, ECS gọi qua `NAT Gateway` ra ngoài Internet để giao tiếp với `Azure Document Intelligence` hoặc `Gemini API`. Thông tin trả về được trích xuất và lưu ngược lại vào RDS.
