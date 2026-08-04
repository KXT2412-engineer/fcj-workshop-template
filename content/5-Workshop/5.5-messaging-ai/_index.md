---
title: "Messaging & AI"
date: 2024-01-01
weight: 5
chapter: false
pre: " <b> 5.5. </b> "
---


The core strength of Snaptics lies in its asynchronous processing capabilities. By utilizing Amazon SQS and AI services, Snaptics provides a seamless user experience even during heavy analytical tasks.

## 1. Amazon SQS and Dead Letter Queue (DLQ)

In a production environment, simply having a queue is not enough. What happens if the AI API is temporarily down and an invoice fails to process? The message would bounce back into the queue and loop endlessly. To prevent this, we implement a **Dead Letter Queue (DLQ)**.

### A. Create the DLQ (For failed messages)
- Open **Amazon SQS ➔ Create queue**.
- **Type:** Standard.
- **Name:** `snaptics-ai-queue-dlq` (Notice the `-dlq` suffix).
- Keep default settings and click Create.

### B. Create the Main Queue
- Go back and **Create queue**.
- **Type:** Standard.
- **Name:** `snaptics-ai-queue` (Must match the architecture diagram).
- **Visibility timeout:** `1 minutes`.
- **Dead-letter queue:** Expand this section, check **Enabled**.
- Select the `snaptics-ai-queue-dlq` you just created.
- **Maximum receives:** `3`. *(This means if the ECS container fails to process an invoice 3 times, the message is automatically banished to the DLQ to stop the looping failure).*
- Click Create.

## 2. Artificial Intelligence (AI) Implementation

The `.NET` container pulls messages from `snaptics-ai-queue` and calls external AI APIs.

### Azure Document Intelligence (OCR)
When a user uploads a receipt, Azure extracts specific fields (Merchant, Total, Tax) automatically.
```csharp
// Fetch the secure key injected from Parameter Store
var credential = new AzureKeyCredential(_secrets["AzureDocIntelKey"]);
var client = new DocumentAnalysisClient(new Uri(_secrets["AzureDocIntelEndpoint"]), credential);

// Analyze the S3 Image via the Gateway Endpoint pre-signed URL
AnalyzeDocumentOperation operation = await client.AnalyzeDocumentFromUriAsync(WaitUntil.Completed, "prebuilt-receipt", new Uri(preSignedUrl));
var result = operation.Value;

// Save extracted fields to SQL Server
string merchantName = result.Documents[0].Fields["MerchantName"].Value.AsString();
double total = result.Documents[0].Fields["Total"].Value.AsDouble();
```

### Google Gemini (Smart Consulting)
Users can ask the system: "Based on my receipts, how can I save money?"
Snaptics queries the Gemini 2.5 model to provide instant insights:
```csharp
var requestBody = new {
    contents = new[] { new { parts = new[] { new { text = userPrompt } } } }
};

var response = await _httpClient.PostAsJsonAsync(
    $"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key={_secrets["GeminiApiKey"]}", 
    requestBody);
```

## 3. Background Jobs with Hangfire

For scheduled tasks (like rolling over budget limits at midnight), Snaptics uses Hangfire running concurrently inside the Fargate containers.

```csharp
// Hangfire uses the same SQL Server Database for job storage
builder.Services.AddHangfire(config => config
    .UseSqlServerStorage(builder.Configuration.GetConnectionString("DefaultConnection")));
builder.Services.AddHangfireServer();

// Automatically send financial reports on the 1st of every month
RecurringJob.AddOrUpdate<IReportService>(
    "monthly-ai-insight",
    job => job.GenerateMonthlyInsightsAsync(),
    "0 0 1 * *"); // Cron expression
```

By combining SQS for event-driven tasks and Hangfire for cron jobs, the Snaptics backend remains incredibly responsive!
