---
title: "Messaging & AI"
date: 2024-01-01
weight: 5
chapter: false
pre: " <b> 5.5. </b> "
---

# AI & Background Tasks (Messaging)

Snaptics offloads heavy tasks (OCR, AI Insights) to background queues using SQS and Hangfire to provide a snappy User Experience.

## 1. SQS Queues & SNS Topics
- **SQS Queue:** Create a Standard queue named `snaptics-main-queue` with a 1-minute visibility timeout.
- **SNS Topic:** Create a Standard topic named `snaptics-alerts` and add an Email subscription to receive emergency alerts.

**Integration in .NET:**
When a user uploads an invoice, the API drops a message into SQS rather than processing it synchronously:
```csharp
var requestMessage = new SendMessageRequest {
    QueueUrl = "https://sqs.ap-southeast-1.amazonaws.com/123/snaptics-main-queue",
    MessageBody = JsonSerializer.Serialize(new { InvoiceId = invoice.Id, S3FilePath = s3Key })
};
await _sqsClient.SendMessageAsync(requestMessage);
```

## 2. Artificial Intelligence (AI)
Snaptics communicates with Azure and Google via their REST APIs.
**Azure Document Intelligence (OCR):**
```csharp
var client = new DocumentAnalysisClient(new Uri(_config["AiSettings:AzureDocIntelEndpoint"]), new AzureKeyCredential(azureKey));
AnalyzeDocumentOperation operation = await client.AnalyzeDocumentFromUriAsync(WaitUntil.Completed, "prebuilt-receipt", new Uri(preSignedUrl));
// Extracts merchant name and total
string merchantName = operation.Value.Documents[0].Fields["MerchantName"].Value.AsString();
```

**Google Gemini (Smart Consulting):**
```csharp
var requestBody = new { contents = new[] { new { parts = new[] { new { text = "My budget is 50000. Advice?" } } } } };
var response = await _httpClient.PostAsJsonAsync($"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key={geminiKey}", requestBody);
```

## 3. Background Jobs (Hangfire)
Hangfire manages background execution and uses RDS SQL Server for storage. It handles scheduled tasks like end-of-month processing.
```csharp
builder.Services.AddHangfire(config => config.UseSqlServerStorage(connectionString));
builder.Services.AddHangfireServer();

// Schedule a monthly job
RecurringJob.AddOrUpdate<IAiInsightService>("monthly-ai-insight", service => service.GenerateMonthlyInsightAsync(), Cron.Monthly());
```
