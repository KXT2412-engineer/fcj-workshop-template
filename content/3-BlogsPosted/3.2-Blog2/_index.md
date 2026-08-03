---
title: "Blog 2"
date: 2024-01-01
weight: 1
chapter: false
pre: " <b> 3.2. </b> "
---

# AWS KNOWLEDGE & CLOUD-NATIVE MINDSET FROM A PRACTICAL INTERNSHIP

![Architecture Diagram: Converting Monolithic Storage to S3 Decoupled](/fcj-workshop-template/images/3-BlogsPosted/3.2-Blog2/blog2.jpg)

## 1. Understanding and applying the system decoupling mindset

- **Knowledge acquired:** Previously, I had a habit of storing static files (images, documents) locally right on the application server (Local storage) or storing them as binary data in the database. Thanks to working with AWS, I understood the "Decoupling" mindset - completely separating the Compute component and the Storage component.
- **Practical application:** I designed the .NET Backend to only handle business logic, then pushed all files/documents to Amazon S3 (Object Storage) and only stored the paths (URLs) in the Database. This helps the server completely offload the burden, eliminates worries about full hard drives, and allows the Database to operate lightly with faster retrieval.

## 2. Mastering the AWSSDK library and practical operations with S3

- **Knowledge acquired:** Transitioning from manual operations on the AWS Web Console interface to interacting with and managing resources entirely via source code (through the SDK).
- **Practical application:** I successfully integrated the AWSSDK.S3 NuGet package into the core system. I manually built Service classes in C# to handle the complete lifecycle of a file: from streaming upload data (PutObjectRequest), accurately setting Metadata/ContentType for different file formats, to safely retrieving and deleting files on the cloud.
- **Cost Optimization mindset:** Besides storage, I also realized that controlling "junk files" on S3 is equally important. There are cases where a user uploads a file and then aborts the operation midway (e.g., closing the tab, losing connection), leaving an orphaned file on the Bucket even though it's no longer referenced in the Database. I learned how to integrate additional cleanup logic - calling `DeleteObjectAsync` as soon as a failed transaction is detected, or using S3's Lifecycle Policy to automatically delete files in the temporary folder (`temp/`) after a certain period. This is a practical lesson in Cloud cost management mindset - pay as you go, but you must proactively clean up to avoid wasting storage space invisibly.

## 3. Managing access permissions with AWS IAM (Identity and Access Management)

- **Knowledge acquired:** Grasping the core principle of Cloud security: The Principle of Least Privilege. I understood the danger of using the AWS Root account to connect applications.
- **Practical application:** I set up specialized IAM User accounts specifically for the development environment. Instead of granting Admin privileges, I learned to write IAM Policies in JSON to limit permissions: the Backend application is only allowed to Read (`s3:GetObject`) and Write (`s3:PutObject`) to a single specific project Bucket, eliminating the risk of sabotage or cross-data leakage.

## 4. Securing Secret Keys & Environment Variables

- **Knowledge acquired:** Having a clear awareness of Security Vulnerabilities when working with the Cloud, especially the error of "Hardcoding" credentials.
- **Practical application:** I established a process for managing sensitive information (Access Key, Secret Key) through the `appsettings.json` configuration file (excluded from Git) and using Environment Variables. This ensures absolute safety when pushing source code to repositories like GitHub.

## 5. Solving the secure data sharing problem with Pre-signed URLs

- **Knowledge acquired:** Understanding the security mechanism for static resources on the Internet. By default, S3 blocks all public access (Block Public Access) to protect internal data.
- **Practical application:** I researched and successfully deployed the Pre-signed URL technique. When the Client needs to display a document or image, the Backend will use AWS credentials to generate a temporary link (only valid for a short period, e.g., 15 - 30 minutes). This technique helps the system share files with the right users safely without opening Public access to the entire Bucket.
- **Practical experience with CORS:** A real-world trap I fell into was when the Frontend called the Pre-signed URL to upload a file directly to S3, it was continuously blocked by the browser with a CORS (Cross-Origin Resource Sharing) error. Although testing with Postman was successful, it failed on the browser due to the Same-Origin Policy. My solution was to go back to configuring the CORS Policy directly on the S3 Bucket, explicitly declaring the allowed domains (localhost for dev, staging domain for testing) and allowing the corresponding GET/PUT methods. Through this incident, I understood more clearly that Cloud security doesn't stop at the Server-to-Server layer (IAM, Secret Key) but must also account for the Browser-level security.

![Image: C# Service source code for S3](/fcj-workshop-template/images/3-BlogsPosted/3.2-Blog2/blog2.1.jpg)

**Conclusion:** The internship not only helped me learn how to use a storage tool (Amazon S3), but more importantly, it reshaped my software design mindset. The lessons on security (IAM), architecture optimization, and working with Cloud SDKs are solid baggage for me to continue developing towards a Backend / Cloud-Native Engineer path in the future.
