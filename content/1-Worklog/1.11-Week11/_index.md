---
title: "Worklog Week 11"
date: 2026-07-20
weight: 11
chapter: false
pre: " <b> 1.11. </b> "
---

### Week 11 Objectives:
- Complete the most complex business logic: **Periodic Budget Lifecycle**.
- Automate with Background Jobs and Unit Testing.

### Tasks to be implemented this week:

| Day | Task | Start Date | End Date | Resources |
|---|---|---|---|---|
| Monday | - **Snaptic - Income Refactor:** <br>&emsp; + Update and optimize the entire flow for the Income table <br>&emsp; + Check associated data flows | 20/07/2026 | 20/07/2026 |  |
| Tuesday | - **Snaptic - Hangfire Auto-renew:** <br>&emsp; + Enable/disable Hangfire, add auto-renewal <br>&emsp; + Income source fetch/create flow logic, commit test fixes | 21/07/2026 | 21/07/2026 |  |
| Wednesday | - **Learn AWS Database Protection:** <br>&emsp; + Explore AWS Backup <br>&emsp; + Set up automatic RDS data protection mechanism | 22/07/2026 | 22/07/2026 | <a href="https://000013.awsstudygroup.com">000013.awsstudygroup.com</a> |
| Thursday | - **Snaptic - API Backdoor:** <br>&emsp; + Build trigger API to force test the Rollover flow <br>&emsp; + Run simulation directly on Swagger | 23/07/2026 | 23/07/2026 |  |
| Friday | - **Snaptic - Release Preparation:** <br>&emsp; + Review all Unit Tests for Budget Service <br>&emsp; + Package source code in preparation for Release | 24/07/2026 | 24/07/2026 |  |

### Week 11 Results Achieved:
*   **Business Logic Completion:** Successfully solve the project's most complex business problem: "Periodic Budget Lifecycle".
*   **Full Automation:** Excellently apply Hangfire to fully automate the Auto-renew process: Automatically close the old budget at the end of the month, create a new budget, inherit settings (name, isDefault), and accurately synchronize recurring income.
*   **Quality Assurance (QA):** Ensure Code Quality and system reliability with high-coverage Unit Test suites before packaging for Release.

