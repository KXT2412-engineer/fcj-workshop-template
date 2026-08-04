---
title: "Background Jobs (Hangfire)"
date: 2024-01-01
weight: 3
chapter: false
pre: " <b> 5.5.3. </b> "
---

# Background Jobs with Hangfire

Financial systems require periodic tasks that run without user intervention (e.g., closing the books at 23:59 on the 30th, or sending an expense report email). Snaptics solves this problem excellently with the **Hangfire** library.

### Configuration in Snaptics

The actual code in Snaptics' `Program.cs` file configures Hangfire to use the RDS SQL Server itself to store Jobs (to prevent Job loss when the Container restarts).

```csharp
// Register Hangfire
builder.Services.AddHangfire(config => config
    .UseSqlServerStorage(builder.Configuration.GetConnectionString("DefaultConnection")));
builder.Services.AddHangfireServer();
```

When the application boots up on ECS Fargate, Hangfire automatically creates a series of tables prefixed with `[HangFire].*` in the RDS Database. 

### Initializing Recurring Jobs (Cron Jobs)

At the application startup, Snaptics schedules several Recurring Jobs:

```csharp
// Runs every day at 8 AM to remind users to review transactions
RecurringJob.AddOrUpdate<IReviewService>(
    "daily-review-reminder",
    service => service.SendRemindersAsync(),
    "0 8 * * *"); // Cron expression

// Calculates AI financial report at the end of each month
RecurringJob.AddOrUpdate<IAiInsightService>(
    "monthly-ai-insight",
    service => service.GenerateMonthlyInsightAsync(),
    Cron.Monthly());
```

> [!TIP]
> **SignalR Integration:** When a Hangfire Job finishes (e.g., finishes scanning an invoice from the SQS queue), it calls the SignalR `IHubContext` to push a WebSocket event to the Frontend. The user's mobile app will "Ping" immediately without them having to press F5 to reload the page!
