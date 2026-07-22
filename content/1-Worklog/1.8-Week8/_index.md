---
title: "Worklog Week 8"
date: 2026-06-29
weight: 8
chapter: false
pre: " <b> 1.8. </b> "
---

### Week 8 Objectives:

- Deploy Amazon SNS (Simple Notification Service).
- Complete the Dashboard and spending alert logic for Snaptic.

### Tasks to be carried out this week:
| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 2 | Snaptic & AWS SNS: integrate email notifications via SNS for Budget and Spending Insights. | 29/06/2026 | 29/06/2026 | AWS Docs |
| 4 | Snaptic - System Cleanup: revise the email verification content and fully remove the old scheduled jobs by switching completely to Hangfire. | 01/07/2026 | 01/07/2026 | Snaptic Git |
| 5 | Snaptic - Multi-Budget: update the logic for creating multiple budgets and automatically moving money between funds. | 04/07/2026 | 05/07/2026 | Snaptic Git |
| 6 | Snaptic - Dashboard: expose Data Analytics data through the Dashboard Controller. | 05/07/2026 | 05/07/2026 | Snaptic Git |

### Week 8 Achievements:

*   **Alert system:** Mastered Amazon SNS (Simple Notification Service) to build a standard industry communication system that can send proactive and reactive email notifications to users.
*   **Background job optimization:** Successfully cleaned up the old scheduled-job logic to make room for a more focused and efficient Hangfire-based workflow.
*   **Data Analytics:** The Dashboard API handled parallel fund deduction across multiple budgets and returned highly detailed Data Analytics statistics.
