---
title: "Worklog Week 6"
date: 2026-06-15
weight: 6
chapter: false
pre: " <b> 1.6. </b> "
---

### Week 6 Objectives:
- Optimize costs with AWS Cost Management and practice data backup with AWS Backup.
- Review configuration management and parameter security.
- **Snaptic**: Update Budget management logic, restructure the image storage system, and standardize database relationships.

### Tasks to be implemented this week:

| Day | Task | Start Date | End Date | Resources |
|---|---|---|---|---|
| Monday | - **Cost Management:** <br>&emsp; + Explore AWS Cost Optimization <br>&emsp; + Practice creating Budget Alerts | 15/06/2026 | 15/06/2026 | <a href="https://000007.awsstudygroup.com">000007.awsstudygroup.com</a> |
| Tuesday | - **Configuration Management Review:** <br>&emsp; + Review how Parameter Store works <br>&emsp; + Apply strict authorization for configurations | 16/06/2026 | 16/06/2026 | <a href="https://000076.awsstudygroup.com">000076.awsstudygroup.com</a> |
| Wednesday | - **Data Protection (AWS Backup):** <br>&emsp; + Explore AWS Backup architecture <br>&emsp; + Practice creating Backup plan for data protection | 17/06/2026 | 17/06/2026 | <a href="https://000013.awsstudygroup.com">000013.awsstudygroup.com</a> |
| Thursday | - **Snaptic - Budget Update:** <br>&emsp; + Update AWS admin functions for Budget <br>&emsp; + Change image storage structure from `ImageUrl` to `ImageKey` | 18/06/2026 | 18/06/2026 | |
| Friday | - **Snaptic - DB Relation Standardization:** <br>&emsp; + Map User to Notification, Transaction, Item <br>&emsp; + Fix secure image upload flow | 19/06/2026 | 19/06/2026 | |

### Week 6 Results Achieved:
*   **Cloud Optimization:** Deployed cost alert tools (Budget Alerts) and scheduled automatic backups (AWS Backup), ensuring data and budget safety for the project.
*   **Snaptic Upgrade:** Standardized all data tables to tightly bind them to User identities (User mapping). Redesigned the secure image storage mechanism via Key format instead of plain URLs.
