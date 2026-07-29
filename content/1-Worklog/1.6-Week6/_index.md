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
| Monday | - **Learn AWS IAM & Network:** <br>&emsp; + Explore Access Management <br>&emsp; + Least Privilege principle | 15/06/2026 | 15/06/2026 | <a href="https://000002.awsstudygroup.com">000002.awsstudygroup.com</a><br><a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/">AWS IAM Docs</a> |
| Tuesday | - **Learn AWS Storage (S3):** <br>&emsp; + Practice Create S3 Bucket, Enable static website <br>&emsp; + Configure Public Access Block / CORS | 16/06/2026 | 16/06/2026 | <a href="https://000057.awsstudygroup.com">000057.awsstudygroup.com</a><br><a href="https://000069.awsstudygroup.com">000069.awsstudygroup.com</a> |
| Wednesday | - **Snaptic - AWS S3 Integration:** <br>&emsp; + Integrate AWS S3 storage into the core system <br>&emsp; + Code Pre-signed URLs generation function | 17/06/2026 | 17/06/2026 | <a href="https://aws.amazon.com/sdk-for-net/">AWS SDK for .NET</a><br><a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/ShareObjectPreSignedURL.html">S3 Pre-signed URLs Docs</a> |
| Thursday | - **Snaptic - Admin & Budget Refactor:** <br>&emsp; + Update AWS admin functions for Budget <br>&emsp; + Change image storage structure from `ImageUrl` to `ImageKey` | 18/06/2026 | 18/06/2026 |  |
| Friday | - **Snaptic - Update relations:** <br>&emsp; + Add User mapping to Notification, Transaction, Item <br>&emsp; + Fix secure image upload flow | 19/06/2026 | 19/06/2026 |  |

### Week 6 Results Achieved:
*   **Cloud-Native Architecture:** Successfully apply the Decoupling mindset by completely migrating physical file storage to the Amazon S3 cloud platform instead of Local storage.
*   **Static Data Security:** Completely solve the static resource security problem through the Pre-signed URL generation technique and change the management structure from `ImageUrl` to `ImageKey` for better safety.
*   **API Optimization:** Complete the S3Controller API allowing Frontend to fetch and display images smoothly, while completely resolving CORS errors at the browser level.
