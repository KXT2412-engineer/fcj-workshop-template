---
title: "Worklog Week 8"
date: 2026-06-29
weight: 8
chapter: false
pre: " <b> 1.8. </b> "
---

### Week 8 Objectives:
- **AWS:** Deploy Amazon SNS (Simple Notification Service).
- **Snaptic:** Complete Dashboard and spending alert logic.

### Tasks to be implemented this week:

| Day | Task | Start Date | End Date | Resources |
|---|---|---|---|---|
| Monday | - **Snaptic - Dashboard & AWS SNS:** <br>&emsp; + Populate Analytics data to Dashboard Controller <br>&emsp; + Send Email notifications via AWS SNS | 29/06/2026 | 29/06/2026 | <a href="https://000077.awsstudygroup.com">000077.awsstudygroup.com</a><br><a href="https://docs.aws.amazon.com/sns/">Amazon SNS Docs</a> |
| Tuesday | - **Learn AWS Monitoring:** <br>&emsp; + Explore Amazon CloudWatch Dashboard <br>&emsp; + Practice creating metrics and system monitoring | 30/06/2026 | 30/06/2026 | <a href="https://000008.awsstudygroup.com">000008.awsstudygroup.com</a><br><a href="https://docs.aws.amazon.com/cloudwatch/">CloudWatch Docs</a> |
| Wednesday | - **Snaptic - System Cleanup:** <br>&emsp; + Fix email verification login error <br>&emsp; + Remove old scheduled job configuration in Program.cs | 01/07/2026 | 01/07/2026 |  |
| Thursday | - **Learn AWS Compute Scale:** <br>&emsp; + Explore Auto Scaling architecture <br>&emsp; + Apply EC2 Auto Scaling Groups | 02/07/2026 | 02/07/2026 | <a href="https://000006.awsstudygroup.com">000006.awsstudygroup.com</a> |
| Friday | - **Snaptic - Budget Updates:** <br>&emsp; + Update dashboard <br>&emsp; + Add logic to create multiple budgets and auto-deduct | 03/07/2026 | 03/07/2026 |  |

### Week 8 Results Achieved:
*   **Alert System:** Master the Amazon SNS service to build an industry-standard communication system, capable of sending Email notifications.
*   **Background Job Optimization:** Successfully clean up old logic (scheduled jobs) to make room for the Hangfire system to operate more optimally and focused.
*   **Data Analytics:** The Dashboard API handles the problem of concurrent money deduction routing across multiple Budgets very well and returns highly detailed Data Analytics statistics.
