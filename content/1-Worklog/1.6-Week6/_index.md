---
title: "Worklog Week 6"
date: 2026-06-15
weight: 6
chapter: false
pre: " <b> 1.6. </b> "
---

### Week 6 Objectives:
- **AWS:** Integrate Amazon S3 to handle files/images and solve the CORS problem.
- **Snaptic:** Change the image storage architecture, handle static resource security.

### Tasks to be implemented this week:

| Day | Task | Start Date | End Date | Resources |
|---|---|---|---|---|
| Monday | - **Learn AWS IAM & Network:** <br>&emsp; + Explore the Least Privilege principle <br>&emsp; + Explore CORS policies on the cloud | 15/06/2026 | 15/06/2026 | <a href="https://000002.awsstudygroup.com">000002.awsstudygroup.com</a> |
| Tuesday | - **Learn AWS Storage:** <br>&emsp; + Research Amazon S3, Object Storage mechanism <br>&emsp; + How to configure a static S3 Bucket | 16/06/2026 | 16/06/2026 | <a href="https://www.youtube.com/watch?v=7kmhQLYkrnI">YT: Create S3 Bucket</a><br><a href="https://www.youtube.com/watch?v=9Cd_dAUCh9o">YT: Enable Static Website</a><br><a href="https://www.youtube.com/watch?v=iw0qEi-PiOc">YT: Block Public Access & CORS</a><br><a href="https://000057.awsstudygroup.com">000057.awsstudygroup.com</a><br><a href="https://000069.awsstudygroup.com">000069.awsstudygroup.com</a> |
| Wednesday | - **Snaptic - AWS S3 Integration:** <br>&emsp; + Add measurement units <br>&emsp; + Install S3 SDK and generate Pre-signed URLs structure | 17/06/2026 | 17/06/2026 |  |
| Thursday | - **Snaptic - Data Security:** <br>&emsp; + Change data model from `ImageUrl` to `ImageKey` <br>&emsp; + Update budget, admin, notification enums | 18/06/2026 | 18/06/2026 |  |
| Friday | - **Snaptic - Upload & S3 API:** <br>&emsp; + Refactor image upload (AiController, TransactionController) <br>&emsp; + Add API to securely fetch images from S3 in S3Controller | 19/06/2026 | 19/06/2026 |  |

### Week 6 Results Achieved:
*   **Cloud-Native Architecture:** Successfully apply the Decoupling mindset by completely migrating physical file storage to the Amazon S3 cloud platform instead of Local storage.
*   **Static Data Security:** Completely solve the static resource security problem through the Pre-signed URL generation technique and change the management structure from `ImageUrl` to `ImageKey` for better safety.
*   **API Optimization:** Complete the S3Controller API allowing Frontend to fetch and display images smoothly, while completely resolving CORS errors at the browser level.
