---
title: "Worklog Week 5"
date: 2026-06-08
weight: 5
chapter: false
pre: " <b> 1.5. </b> "
---

### Week 5 Objectives:
- Integrate Artificial Intelligence (AI) service for invoice analysis.
- Develop the Review and Budget modules of Snaptic.

### Tasks to be implemented this week:

| Day | Task | Start Date | End Date | Resources |
|---|---|---|---|---|
| Monday | - **Snaptic - AI & Entities:** <br>&emsp; + Add Budget, Notification entities <br>&emsp; + Configure AI service for image analysis and invoice reading | 08/06/2026 | 08/06/2026 | Snaptic Git |
| Tuesday | - **Snaptic - Auto-Transaction:** <br>&emsp; + Write logic to create transactions from bills returned by AI <br>&emsp; + Expand AI service to create/manage categories | 09/06/2026 | 09/06/2026 | Snaptic Git |
| Wednesday | - **Snaptic - Refactor:** <br>&emsp; + Update TransactionService <br>&emsp; + Optimize the Transaction processing flow | 10/06/2026 | 10/06/2026 | Snaptic Git |
| Thursday | - **Snaptic - Review Flow:** <br>&emsp; + Add need-review API <br>&emsp; + Update item inventory review flow | 11/06/2026 | 11/06/2026 | Snaptic Git |
| Friday | - **Snaptic - Algorithm & Job:** <br>&emsp; + Add missing-prices, Levenshtein logic for item matching <br>&emsp; + Add background job for scan notification using Hangfire | 12/06/2026 | 12/06/2026 | Snaptic Git |

### Week 5 Results Achieved:
*   **AI Integration:** Take the first step in bringing AI into practical application by integrating a service to extract data from invoice images and automatically create transactions (Auto-Transaction).
*   **Algorithm Processing:** Upgrade the system with Machine Learning through the Levenshtein algorithm to intelligently calculate similarity for item matching.
*   **System Optimization:** Integrate Hangfire as a Background Job to run the notification scan process in the background, helping to optimize performance instead of synchronous processing.
