---
title: "Proposal"
date: 2026-05-18
weight: 2
chapter: false
pre: " <b> 2. </b> "
---

# SNAPTICS PROJECT PROPOSAL

**Project Name:** SNAPTICS – AI-Powered Personal Expense Management and Receipt Scanning Platform
*An AI-powered personal finance, expense analysis, and receipt scanning platform on AWS*

---

## 1. Project Overview
Snaptics is a personal and family financial management platform that helps users record, track, and analyze expenses intuitively. Instead of manually entering each transaction, users can capture or upload images of receipts. The system utilizes OCR and Artificial Intelligence to recognize information on the receipt, including store name, transaction date, total amount, expense category, and related items.

Once the data is processed, Snaptics automatically saves the transaction, categorizes the expense, and updates the user's financial dashboard. The system provides charts, reports, budgets, shared wallets, and financial suggestions based on spending habits.

Snaptics is built as a SaaS web application and is planned for deployment on the AWS platform. The system architecture leverages services such as AWS Amplify, Amazon CloudFront, Amazon ECS Fargate, Application Load Balancer, Amazon SQS, Amazon S3, Amazon ECR, Amazon CloudWatch, and SQL Server following a Primary/Standby model. AI tasks are integrated with Azure Document Intelligence, Gemini API, and OpenAI API.

The system has two main user groups:
- **User:** Manages transactions, receipts, budgets, personal or shared family wallets, views reports, and receives financial suggestions.
- **Admin:** Manages users, notifications, support tickets, system configurations, tracks background tasks, and monitors application activity.

---

## 2. Project Objectives

### 2.1. General Objectives
Build an intelligent expense management platform that reduces manual data entry time, helps users control budgets, and provides a clearer understanding of personal finances through data and AI.

### 2.2. Specific Objectives
- Automatically extract information from receipt images using OCR technology.
- Automatically create and categorize transactions based on receipt content.
- Allow manual transaction entry when receipts are unavailable.
- Manage multiple wallets, personal budgets, and family budgets.
- Support multiple members in tracking a shared budget or wallet.
- Display expense reports by day, week, month, and category.
- Analyze spending habits and provide AI-driven financial suggestions.
- Send alerts when users approach or exceed their budgets.
- Build a centralized notification system to deliver alerts and advice.
- Provide a chat interface with AI and save conversation history.
- Build an administration page to monitor users, support requests, notifications, and background tasks.
- Deploy the system on AWS with high scalability, security, and centralized monitoring.
- Build a CI/CD pipeline to automate testing and deployment of new versions.

---

## 3. Problems to Solve

### 3.1. Manual Expense Recording
Most users still record their expenses using notebooks, Excel, or by manually typing them into apps. This process is time-consuming, prone to errors (e.g., typos in amounts), and often abandoned after a short period. Snaptics solves this by allowing users to take a photo of their receipts and automatically extracting transaction data.

### 3.2. Scattered Financial Data
Spending information may be scattered across various sources such as paper receipts, banking apps, e-wallets, or personal notes. Users struggle to get a comprehensive view of their overall cash flow. Snaptics centralizes transaction data into a single system so users can track and analyze it more conveniently.

### 3.3. Difficulty in Controlling Budgets
Users often only realize they have overspent after their budget has already been exceeded. Standard management tools primarily display numbers but do not provide timely warnings or advice. Snaptics tracks budget utilization and sends notifications when users are nearing their set limits.

### 3.4. Lack of Spending Behavior Analysis
Individual transactions do not provide much value unless they are aggregated and analyzed. Users need to know where they spend the most, which expenses are increasing, and how to adjust. Snaptics uses AI to analyze transaction history, detect trends, and offer suggestions tailored to each user's financial situation.

### 3.5. Difficulty in Managing Family Expenses
In a family, members may contribute to and use a single budget pool. If data is not updated centrally, it is hard for members to know the total amount spent or the remaining budget. Snaptics provides family wallets and shared budgets, allowing multiple users to track and record transactions together.

### 3.6. AI System Scalability
OCR and AI analysis processes can take significantly longer than standard APIs. If processed directly within the same request, the system is prone to timeouts or overloads when many users scan receipts simultaneously. The project uses Amazon SQS to process AI tasks asynchronously, reducing the load on the Backend API and increasing scalability.

---

## 4. Solution Architecture
Snaptics utilizes a cloud-native architecture on AWS, combining a web application, containers, asynchronous processing queues, redundant databases, and external AI services.

### 4.1. Frontend
The Frontend of Snaptics is built as a Single Page Application (SPA) and deployed using AWS Amplify.
AWS Amplify is responsible for:
- Automatically building and deploying the Frontend source code.
- Connecting directly to the GitHub Repository.
- Managing deployment versions.
- Providing HTTPS for the application.
- Automatically redeploying when changes are detected on the configured branch.
Amazon Route 53 is used for domain management. Amazon CloudFront distributes content via its CDN, improving access speed for users.

### 4.2. Backend API
The Backend API is packaged into a Docker Image and stored on Amazon Elastic Container Registry (ECR).
Containers are deployed in an Amazon ECS Cluster using AWS Fargate. Fargate allows the system to run containers without having to directly manage server infrastructure. User requests are routed through an Application Load Balancer before reaching the Fargate Tasks. The Load Balancer distributes requests across multiple containers, ensuring high availability and avoiding reliance on a single server. The system uses Auto Scaling to increase or decrease the number of Fargate Tasks based on traffic and resource utilization.

### 4.3. Database
Business data is stored in SQL Server, including:
- User information.
- Transactions, Expense categories, Receipts.
- Personal and family wallets.
- Budgets and Budget members.
- Notifications, AI Chat history.
- Support requests (tickets) and System activity logs.

The database is designed with a SQL Server Primary/Standby model and deployed in Private Subnets across two different Availability Zones. The Primary database handles main operations. The Standby database is used for redundancy and to support recovery in case the primary system fails.

### 4.4. Image Storage
Amazon S3 is used to store:
- Receipt images uploaded by users.
- Data files related to transactions.
- Images before and after processing.
- Files requiring long-term storage.
Separating images from the database reduces storage volume in the database and enables flexible storage scaling.

### 4.5. OCR and AI Processing
When a user uploads a receipt, the Backend saves the image to S3 and sends a message to the Amazon SQS queue `snaptics-ai-queue`. An AI Worker running on ECS Fargate retrieves the message from the queue and performs the following steps:
1. Reads receipt file information.
2. Sends the image to Azure Document Intelligence to extract content.
3. Standardizes the extracted data.
4. Uses Gemini API or OpenAI API to categorize and analyze the transaction.
5. Saves the results to the database.
6. Creates a notification or financial suggestion for the user.

Messages that fail processing multiple times will be routed to a Dead Letter Queue. This allows the development team to inspect errors without losing data or blocking the main queue.

### 4.6. Notification System
In-app notifications are stored and managed centrally in the database. Amazon SNS is used to help distribute alerts or notifications that need to be sent outside the system. Notifications may include:
- Receipt processing results, Alerts for nearing/exceeding budgets.
- AI spending suggestions, Wallet invitation notifications.
- Product/item review notifications, System notifications, Support feedback.

### 4.7. Security
Sensitive information such as database connection strings, API Keys, and configuration parameters are securely stored in AWS Systems Manager Parameter Store. Backend components and the Database are placed in Private Subnets. Only the Application Load Balancer is permitted to receive requests from the Internet.
The system implements the following measures:
- Authentication and authorization using access tokens.
- Separation of Admin and User privileges.
- API Keys are not hardcoded in the source code.
- Connections are encrypted via HTTPS.
- Access is restricted based on the principle of least privilege.
- Uploaded file formats and sizes are validated.
- Important activity logs are recorded, and the database is backed up periodically.

### 4.8. CI/CD
The CI/CD pipeline for Snaptics is implemented via GitHub and GitHub Actions.
Backend Pipeline:
1. Developers push code to the GitHub Repository.
2. GitHub Actions tests and builds the project.
3. A Docker Image is created and pushed to Amazon ECR.
4. The ECS Service is updated.
5. New Fargate Tasks pull the Docker Image from ECR.
6. The system replaces the old version with the new version.

For the Frontend, AWS Amplify automatically builds and deploys when it detects changes on the GitHub Repository.

### 4.9. Monitoring and Cost Management
Amazon CloudWatch is used to:
- Collect logs from the Backend and AI Workers.
- Monitor CPU and memory usage of Fargate Tasks.
- Track the number of messages in SQS.
- Detect failed requests and set alarms when system issues occur.
AWS Budgets is used to track expenses and send alerts when AWS costs exceed established thresholds.

### 4.10. Main Processing Flow
The receipt scanning workflow is executed as follows:
1. User logs into Snaptics.
2. User captures or uploads a receipt image.
3. Frontend sends the image to the Backend API.
4. Backend saves the image to Amazon S3.
5. Backend creates a message in Amazon SQS.
6. AI Worker receives the message from SQS.
7. The image is processed using Azure Document Intelligence.
8. Gemini API or OpenAI API categorizes and analyzes the data.
9. Results are saved into SQL Server.
10. Backend creates a transaction and notifies the user.
11. Dashboard and expense reports are updated.

### 4.11. Overall Architecture Diagram
*(Please insert the architecture diagram here)*
![Architecture Diagram](/fcj-workshop-template/images/2-Proposal/architecture_diagram.jpg)

---

## 5. Project Timeline
The expected implementation time is 12 weeks.

**Week 1–2: Requirement Analysis and System Design**
- Define the target audience, Analyze functional and non-functional requirements.
- Build Use Cases and User Flows, Design the database, Design the AWS architecture.
- Select Frontend, Backend, and AI technologies.
*Expected Outcome:* Requirement document, Database Schema, and overall architecture diagram.

**Week 3–5: Platform Functionality Development**
- Build registration/login features, Admin and User role authorization.
- Transaction management, expense categories, wallets.
- Personal and family budgets, Develop the overview Dashboard.
*Expected Outcome:* Users can manage transactions, wallets, and budgets on the system.

**Week 6–8: OCR and AI Integration**
- Build the receipt scanning interface, Integrate Azure Document Intelligence.
- Build the process for uploading images to S3, Set up SQS and Dead Letter Queue.
- Integrate Gemini API and OpenAI API, Automate transaction categorization.
- Build the AI Insight feature and notification system.
*Expected Outcome:* The system can automatically process receipts and provide spending suggestions.

**Week 9–10: Administration Feature Finalization**
- User management page, support requests, notifications.
- Configure and test background tasks, System settings page.
- Finalize responsive UI for mobile devices.
*Expected Outcome:* Admins can track and manage the main operations of the system.

**Week 11: AWS Deployment and CI/CD**
- Configure VPC, Public/Private Subnets.
- Deploy SQL Server Primary/Standby.
- Create S3 Buckets, SQS, DLQ, and SNS.
- Build Docker Image and push to ECR, Deploy Backend and AI Worker on ECS Fargate.
- Configure ALB, Deploy Frontend using AWS Amplify.
- Configure Route 53 and CloudFront, Set up GitHub Actions.
*Expected Outcome:* The system is successfully deployed on the AWS environment.

**Week 12: Testing and Finalization**
- Functional testing, integration testing, cross-device UI testing.
- Test the OCR and AI workflows, Security testing.
- Test error handling capabilities of SQS and DLQ.
- Monitor logs using CloudWatch.
- Finalize documentation and prepare for a demo.
*Expected Outcome:* The trial version of Snaptics is completed, ready for presentation, testing, and feedback collection.

---

## 6. Estimated Budget
Actual costs will depend on the number of users, processed receipts, image sizes, container runtime, and the number of requests to AI APIs.

### 6.1. Development and Demo Environment
| Item | Estimated Cost per Month |
| --- | --- |
| AWS Amplify, CloudFront, and Route 53 | 5–15 USD |
| Amazon S3 | 1–5 USD |
| ECS Fargate for Backend and AI Worker | 20–50 USD |
| Application Load Balancer | 18–25 USD |
| SQL Server development environment | 30–80 USD |
| Amazon SQS, SNS, and ECR | 2–10 USD |
| CloudWatch and AWS Budgets | 2–10 USD |
| Azure Document Intelligence, Gemini, and OpenAI | Depends on usage |
| **Total Estimated** | **80–200 USD/month** |

### 6.2. Multi-AZ Production Environment
| Item | Estimated Cost per Month |
| --- | --- |
| ECS Fargate and Application Load Balancer | 60–150 USD |
| SQL Server Primary/Standby | 150–300 USD |
| Two NAT Gateways and Data Transfer Costs | 70–120 USD |
| S3, CloudFront, SQS, SNS, ECR, and CloudWatch | 20–60 USD |
| External AI Services | Depends on usage |
| **Total Estimated** | **300–600 USD/month** |

During the development and demo phase, the project may use minimal configurations, a Single-AZ model, or limit the runtime of certain services to optimize costs. For Production deployment, the system is expected to transition to a Multi-AZ and Auto Scaling architecture.

---

## 7. Project Risks

### 7.1. Inaccuracies in Receipt Recognition
- **Impact Level:** High.
- **Mitigation Strategies:** Allow users to review and edit recognized results, display original images alongside extracted data, validate dates/amounts, and flag low-confidence fields for manual confirmation.

### 7.2. Dependency on External AI Services
- **Impact Level:** High.
- **Mitigation Strategies:** Process AI via SQS, implement Retry with Exponential Backoff, route failed tasks to a Dead Letter Queue, build an AI Service layer to easily switch providers, and allow manual transaction entry.

### 7.3. Financial Data Leakage
- **Impact Level:** Very High.
- **Mitigation Strategies:** Enforce HTTPS, store secrets in Parameter Store, clearly separate Admin/User roles, enforce data ownership checks, and encrypt stored data.

### 7.4. Unexpected AWS and AI Costs
- **Impact Level:** Medium to High.
- **Mitigation Strategies:** Set up AWS Budgets and alerts, compress images, configure S3 Lifecycle Policies, limit receipt sizes, and cache results.

### 7.5. Overload During High Receipt Scan Volume
- **Impact Level:** Medium.
- **Mitigation Strategies:** Use Amazon SQS, automatically scale AI Workers based on Queue Depth, set a maximum task limit, and separate the Backend API from the AI Worker.

### 7.6. Errors During New Version Deployment
- **Impact Level:** Medium.
- **Mitigation Strategies:** Automate build and testing via CI/CD, manage separate environments, implement rolling updates on ECS, enforce health checks, and retain stable Docker Images for easy rollback.

### 7.7. Inappropriate AI Analysis Results
- **Impact Level:** Medium.
- **Mitigation Strategies:** Only use user-confirmed data, present AI Insights as reference suggestions, and improve prompts based on user feedback.

---

## 8. Project Expectations
With the proposed scope and architecture, the team expects Snaptics to deliver a functional trial version that operates seamlessly from receipt capture to analysis and display. Expected outcomes include:
- Finalizing core features such as transaction management, wallets, personal and family budgets, receipt scanning, notifications, AI Insights, and the admin dashboard.
- Reducing manual data entry through an OCR workflow with a confirmation and editing step before saving.
- Assisting users in centralized expense tracking, identifying trends, and proactively controlling their budgets.
- Proving the operational capability of a cloud-native architecture on AWS, including asynchronous processing, monitoring, redundancy, and CI/CD.
- Creating a foundation for the team to test with users, gather feedback, and continuously improve accuracy and user experience.