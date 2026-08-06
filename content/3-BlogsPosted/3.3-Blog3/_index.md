---
title: "Blog 3"
date: 2024-01-01
weight: 1
chapter: false
pre: " <b> 3.3. </b> "
---

# WHAT I LEARNED FROM SCALABLE E-COMMERCE ARCHITECTURES ON AWS

Hello everyone,

After studying the post on e-commerce website architectures on AWS, I gained a much deeper understanding of how to design high-traffic systems. Here is what I learned:

![Scalable e-commerce website architecture on AWS](/fcj-workshop-template/images/3-BlogsPosted/3.3-Blog3/blog3.jpg)

## 1. The Importance of Load Distribution
- **Lesson learned:** During promotional events, traffic can spike unpredictably. Using **Amazon CloudFront** to distribute static content combined with an **Application Load Balancer (ALB)** minimizes direct pressure on the servers, ensuring users always have a smooth experience.

## 2. Efficient Container Management with ECS Fargate
- **Lesson learned:** Instead of struggling to manage individual EC2 instances for Backend applications, the post demonstrated the power of deploying containerized applications on **Amazon ECS Fargate**. This allows for flexible auto-scaling based on real-time traffic without managing the underlying infrastructure.

## 3. Database Performance Optimization
- **Lesson learned:** The database is often the biggest bottleneck. I learned how to integrate **Amazon ElastiCache** to temporarily store frequently queried data (like shopping carts and sessions) and use **Amazon Aurora Serverless v2** to automatically scale core data resources on demand without system crashes.

## 4. Monitoring and Incident Response
- **Lesson learned:** No system is flawless. Setting up **Amazon CloudWatch** to monitor application health and automatically triggering **Amazon SNS** to send Email/SMS alerts is crucial for the operations team to respond promptly before users even notice an error.

**Conclusion:** This architecture provided a comprehensive overview of how large enterprises operate e-commerce systems. It is not just about picking the right services, but about connecting them to create an automated, secure, and highly fault-tolerant system.

---

### References:
- 📌 **[Guidance for Web Store on AWS](https://docs.aws.amazon.com/solutions/web-store-on-aws/)**
- 📌 **[Guidance for Building a Containerized and Scalable Web Application on AWS](https://docs.aws.amazon.com/solutions/building-a-containerized-and-scalable-web-application-on-aws/)**
