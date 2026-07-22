---
title: "Worklog Week 5"
date: 2026-06-08
weight: 5
chapter: false
pre: " <b> 1.5. </b> "
---

### Week 5 Objectives:

- Integrate artificial intelligence (AI) services into invoice analysis.
- Develop the Review and Budget modules of Snaptic.

### Tasks to be carried out this week:
| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 2 | Snaptic - AI & Budget: add the Budget entity; configure the AI service to analyze images and read invoices. | 08/06/2026 | 08/06/2026 | Snaptic Git |
| 3 | Snaptic - Auto-Transaction: write logic to create transactions directly from the invoice returned by AI. | 09/06/2026 | 09/06/2026 | Snaptic Git |
| 4 | Snaptic - Core Logic: update TransactionService and add the `need-review` API to the system. | 10/06/2026 | 11/06/2026 | Snaptic Git |
| 5 | Snaptic - Machine Learning: implement the Levenshtein algorithm to calculate similarity for item matching. | 12/06/2026 | 12/06/2026 | Snaptic Git |
| 6 | Snaptic - Hangfire: add a background notification scanning job using Hangfire. | 13/06/2026 | 13/06/2026 | Hangfire Docs |

### Week 5 Achievements:

*   **AI integration:** Took the first step in bringing AI into the real application by integrating invoice image data extraction and automatic transaction creation (Auto-Transaction).
*   **Algorithm processing:** Upgraded the system with machine learning through the Levenshtein algorithm to calculate similarity for item matching in a smarter way.
*   **System optimization:** Integrated Hangfire as a background job to run the notification scanning process in the background, improving performance instead of processing synchronously.
