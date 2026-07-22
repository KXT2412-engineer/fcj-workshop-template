---
title: "Worklog Week 6"
date: 2026-06-15
weight: 6
chapter: false
pre: " <b> 1.6. </b> "
---

### Week 6 Objectives:

- **AWS:** Integrate Amazon S3 to handle files and images.
- **Snaptic:** Change the image storage architecture and secure static resources.

### Tasks to be carried out this week:
| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 3 | Snaptic - AWS S3 Integration: install the S3 SDK and move image storage to the cloud instead of local storage. | 16/06/2026 | 17/06/2026 | AWS Docs |
| 4 | Snaptic - S3 Pre-signed URL: handle secure link sharing with Pre-signed URLs; change the data model from `ImageUrl` to `ImageKey`. | 18/06/2026 | 18/06/2026 | AWS Docs |
| 5 | Snaptic - Refactor AI Upload: fix the image upload flow in AiController and TransactionController. | 19/06/2026 | 19/06/2026 | Snaptic Git |
| 6 | Snaptic - Secure Download: configure S3Controller to retrieve images securely from the cloud; improve exception handling. | 20/06/2026 | 21/06/2026 | Snaptic Git |

### Week 6 Achievements:

*   **Cloud-native architecture:** Successfully applied a decoupled system design by moving all physical file storage to Amazon S3 instead of keeping it local.
*   **Static data security:** Fully solved the static resource security problem through Pre-signed URLs and by switching the management model from `ImageUrl` to the safer `ImageKey` approach.
*   **API optimization:** Completed the S3Controller API so the frontend can fetch and display images smoothly, while also improving exception handling in the upload flow.
