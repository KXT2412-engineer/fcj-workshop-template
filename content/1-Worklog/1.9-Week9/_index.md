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
| Monday | - **Snaptic - Database Migration:** <br>&emsp; + Fix Budget and Transaction schemas <br>&emsp; + Run commands to create new DB Migrations | 06/07/2026 | 06/07/2026 |  |
| Tuesday | - **Learn AWS Container:** <br>&emsp; + Explore Docker, AWS ECS <br>&emsp; + AWS Fargate Serverless architecture concepts | 07/07/2026 | 07/07/2026 | <a href="https://000015.awsstudygroup.com">000015.awsstudygroup.com</a><br><a href="https://000016.awsstudygroup.com">000016.awsstudygroup.com</a><br><a href="https://docs.aws.amazon.com/ecs/">Amazon ECS Docs</a> |
| Wednesday | - **DevOps Practice:** <br>&emsp; + Write basic Dockerfile to package application <br>&emsp; + Build optimized Image for .NET Core project | 08/07/2026 | 08/07/2026 | <a href="https://docs.docker.com/">Docker Documentation</a> |
| Thursday | - **Snaptic - Security & Auth:** <br>&emsp; + Add Authorization to multiple Controllers <br>&emsp; + Optimize Transaction Details retrieval | 09/07/2026 | 09/07/2026 |  |
| Friday | - **Snaptic - System Refactor:** <br>&emsp; + Upgrade budget management by user <br>&emsp; + Handle global exceptions (Global Exception Handling) | 10/07/2026 | 10/07/2026 |  |

### Week 9 Results Achieved:
*   **Environment Packaging:** Bring the project closer to the Production environment (DevOps) by successfully writing a Dockerfile to package (Dockerize) the Backend application.
*   **Access Control:** Tighten the security armor at the API layer by comprehensively applying the `[Authorize]` Attribute on Controllers, while simultaneously updating the DB via EF Core Migrations.
*   **Query Optimization:** Upgrade Transaction retrieval API performance, allowing the system to return results along with details smoothly and optimally.
