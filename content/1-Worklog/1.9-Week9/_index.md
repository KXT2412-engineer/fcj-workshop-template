---
title: "Worklog Week 9"
date: 2026-07-06
weight: 9
chapter: false
pre: " <b> 1.9. </b> "
---

### Week 9 Objectives:

- Package the backend application with Docker (Dockerize).
- Upgrade the Snaptic database structure and tighten Authorization.

### Tasks to be carried out this week:
| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 2 | Snaptic - DB Upgrade: update the Budget and Transaction schema. Add new DB migrations to the environment. | 06/07/2026 | 06/07/2026 | EF Core Docs |
| 4 | Snaptic - Docker & Auth: write a standardized Dockerfile. Add `[Authorize]` to all controllers. | 08/07/2026 | 09/07/2026 | Docker Docs |
| 5 | Snaptic - Data Details: improve the transaction API to return detailed information. | 09/07/2026 | 09/07/2026 | Snaptic Git |
| 6 | Snaptic - Error Handling: upgrade the global exception handling system for the API. | 10/07/2026 | 10/07/2026 | Snaptic Git |

### Week 9 Achievements:

*   **Environment packaging:** Moved the project closer to the Production environment (DevOps) by successfully writing a Dockerfile to package the backend application (Dockerize).
*   **Access control:** Tightened the security layer at the API level by applying the `[Authorize]` attribute across controllers, while also updating the database through EF Core Migrations.
*   **Query optimization:** Improved the performance of the Transaction API so the system can return results with detailed information smoothly and efficiently.
