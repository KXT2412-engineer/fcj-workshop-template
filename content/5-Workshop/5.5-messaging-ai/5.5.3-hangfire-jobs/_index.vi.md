---
title: "Background Jobs (Hangfire)"
date: 2024-01-01
weight: 3
chapter: false
pre: " <b> 5.5.3. </b> "
---

# Tác vụ nền (Background Jobs) với Hangfire

Hệ thống tài chính yêu cầu phải có những tác vụ chạy định kỳ mà không cần người dùng can thiệp (ví dụ: Chốt sổ cuối tháng lúc 23:59 ngày 30, hoặc gửi email báo cáo chi tiêu). Snaptics giải quyết bài toán này cực tốt bằng thư viện **Hangfire**.

### Cấu hình trong Snaptics

Code thực tế trong file `Program.cs` của Snaptics đã cấu hình Hangfire sử dụng chính SQL Server RDS làm nơi lưu trữ các Job (để tránh mất Job khi Container bị restart).

```csharp
// Đăng ký Hangfire
builder.Services.AddHangfire(config => config
    .UseSqlServerStorage(builder.Configuration.GetConnectionString("DefaultConnection")));
builder.Services.AddHangfireServer();
```

Khi ứng dụng chạy lên trên ECS Fargate, Hangfire sẽ tự động tạo một loạt các bảng có tiền tố `[HangFire].*` trong Database RDS. 

### Khởi tạo Tác vụ Định kỳ (Cron Jobs)

Ở hàm khởi chạy ứng dụng, Snaptics lên lịch một số Recurring Jobs (chạy lặp lại):

```csharp
// Chạy mỗi ngày lúc 8 giờ sáng để nhắc người dùng review giao dịch
RecurringJob.AddOrUpdate<IReviewService>(
    "daily-review-reminder",
    service => service.SendRemindersAsync(),
    "0 8 * * *"); // Cron expression

// Tính toán báo cáo tài chính AI mỗi cuối tháng
RecurringJob.AddOrUpdate<IAiInsightService>(
    "monthly-ai-insight",
    service => service.GenerateMonthlyInsightAsync(),
    Cron.Monthly());
```

> [!TIP]
> **Tích hợp SignalR:** Khi một Job của Hangfire chạy xong (ví dụ scan xong hóa đơn từ hàng đợi SQS), nó gọi vào `IHubContext` của SignalR để đẩy sự kiện WebSocket về Frontend. App di động của người dùng sẽ kêu "Ting" ngay lập tức mà họ không cần bấm nút F5 tải lại trang!
