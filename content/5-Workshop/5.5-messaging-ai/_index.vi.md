---
title: "AI & Tác vụ nền (Messaging)"
date: 2024-01-01
weight: 5
chapter: false
pre: " <b> 5.5. </b> "
---

# AI & Tác vụ nền (Messaging)

Trái tim sức mạnh của Snaptics nằm ở khả năng xử lý bất đồng bộ. Thay vì bắt người dùng chờ, các tác vụ nặng (như OCR) được ném vào hàng đợi (Queue) xử lý ngầm.

## 1. Hàng đợi SQS & Thông báo SNS
- **SQS Queue:** Tạo queue Standard tên là `snaptics-main-queue`, đặt Visibility timeout là 1 phút.
- **SNS Topic:** Tạo topic Standard tên `snaptics-alerts` và cấu hình Subscription gửi Email cho Admin.

**Tích hợp vào .NET:**
Thay vì gọi thẳng hàm quét ảnh mất thời gian, API chỉ đơn giản quăng message vào SQS:
```csharp
var requestMessage = new SendMessageRequest {
    QueueUrl = "https://sqs.ap-southeast-1.amazonaws.com/123/snaptics-main-queue",
    MessageBody = JsonSerializer.Serialize(new { InvoiceId = invoice.Id, S3FilePath = s3Key })
};
await _sqsClient.SendMessageAsync(requestMessage);
```

## 2. Tích hợp Trí tuệ Nhân tạo (AI)
**Azure Document Intelligence (Quét Hóa Đơn OCR):**
```csharp
var client = new DocumentAnalysisClient(new Uri(_config["AiSettings:AzureDocIntelEndpoint"]), new AzureKeyCredential(azureKey));
AnalyzeDocumentOperation operation = await client.AnalyzeDocumentFromUriAsync(WaitUntil.Completed, "prebuilt-receipt", new Uri(preSignedUrl));
// Bóc tách tự động tên cửa hàng
string merchantName = operation.Value.Documents[0].Fields["MerchantName"].Value.AsString();
```

**Google Gemini (Tư vấn Tài chính):**
```csharp
var requestBody = new { contents = new[] { new { parts = new[] { new { text = "Ngân sách tháng này là 5 triệu. Khuyên tôi đi." } } } } };
var response = await _httpClient.PostAsJsonAsync($"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key={geminiKey}", requestBody);
```

## 3. Tác vụ nền (Hangfire)
Hangfire dùng chính SQL Server để lưu thông tin các Job đang xử lý.
```csharp
builder.Services.AddHangfire(config => config.UseSqlServerStorage(connectionString));
builder.Services.AddHangfireServer();

// Chạy tác vụ báo cáo định kỳ mỗi tháng
RecurringJob.AddOrUpdate<IAiInsightService>("monthly-ai-insight", service => service.GenerateMonthlyInsightAsync(), Cron.Monthly());
```
