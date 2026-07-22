---
title: "Worklog Week 11"
date: 2026-07-20
weight: 11
chapter: false
pre: " <b> 1.11. </b> "
---

### Week 11 Objectives:

- Complete the most complex business flow: **Periodic Budget lifecycle**.
- Automate with Background Jobs and Unit Testing.

### Tasks to be carried out this week:
| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 2 | Snaptic - Income Flow: update and optimize the entire Income flow. | 20/07/2026 | 20/07/2026 | Snaptic Git |
| 3 | Snaptic - Hangfire Auto-renew: code a Hangfire on/off mechanism; build auto-renew budget logic when the month changes. | 21/07/2026 | 21/07/2026 | Hangfire Docs |
| 4 | Snaptic - Budget Inheritance: inherit budget settings (name, isDefault, auto-renew) from the previous month into the new month. | 21/07/2026 | 21/07/2026 | Snaptic Git |
| 5 | Snaptic - Sync Income: automatically fetch or create an income source per user and inject money into the new periodic budget. | 21/07/2026 | 21/07/2026 | Snaptic Git |
| 6 | Snaptic - Unit Testing: write unit tests for Budget Service and finalize one last commit to fix the test case. | 21/07/2026 | 21/07/2026 | Snaptic Git |

### Week 11 Achievements:

*   **Business completion:** Successfully solved the project's most complex business problem: the "Periodic Budget lifecycle." 
*   **Full automation:** Used Hangfire effectively to fully automate the auto-renew workflow: close the old budget at month-end, create a new budget, inherit settings (name, isDefault), and sync the recurring income source accurately.
*   **Quality assurance (QA):** Ensured code quality and system reliability with high-coverage unit tests before packaging the release.
