---
title: "Worklog Week 9"
date: 2026-07-06
weight: 9
chapter: false
pre: " <b> 1.9. </b> "
---

### Week 9 Objectives:
- **DevOps:** Package the Backend application with Docker (Dockerize).
- **Snaptic:** Upgrade Database structure and tighten Authorization.

### Tasks to be implemented this week:

| Day | Task | Start Date | End Date | Resources |
|---|---|---|---|---|
| Monday | - **Snaptic - Database Migration:** <br>&emsp; + Fix budget and transaction entities <br>&emsp; + Add DB migrations to update the environment | 06/07/2026 | 06/07/2026 |  |
| Tuesday | - **Learn AWS Container:** <br>&emsp; + Container concepts, AWS ECS (Elastic Container Service) <br>&emsp; + Explore AWS Fargate Serverless architecture | 07/07/2026 | 07/07/2026 | <a href="https://000015.awsstudygroup.com">000015.awsstudygroup.com</a><br><a href="https://000016.awsstudygroup.com">000016.awsstudygroup.com</a> |
| Wednesday | - **DevOps Practice:** <br>&emsp; + Write basic Dockerfile <br>&emsp; + Configure and build optimized Image for .NET Core | 08/07/2026 | 08/07/2026 |  |
| Thursday | - **Snaptic - Authorization:** <br>&emsp; + Add Dockerfile to Repository <br>&emsp; + Add `[Authorize]` for multiple controllers | 09/07/2026 | 09/07/2026 |  |
| Friday | - **Snaptic - Optimization & Exception:** <br>&emsp; + Upgrade budget management by user <br>&emsp; + Improve transaction details, handle global exceptions | 10/07/2026 | 10/07/2026 |  |

### Week 9 Results Achieved:
*   **Environment Packaging:** Bring the project closer to the Production environment (DevOps) by successfully writing a Dockerfile to package (Dockerize) the Backend application.
*   **Access Control:** Tighten the security armor at the API layer by comprehensively applying the `[Authorize]` Attribute on Controllers, while simultaneously updating the DB via EF Core Migrations.
*   **Query Optimization:** Upgrade Transaction retrieval API performance, allowing the system to return results along with details smoothly and optimally.
