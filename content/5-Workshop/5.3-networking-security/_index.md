---
title: "VPC & Security"
date: 2024-01-01
weight: 3
chapter: false
pre: " <b> 5.3. </b> "
---

# VPC & Security

To isolate Snaptics from threats on the Public Internet, we will build a **Multi-Tier** Virtual Private Cloud (VPC) architecture.

## 1. VPC & Subnets Design

Create a Virtual Private Cloud acting as the "network boundary".
- **VPC Name:** `snaptics-vpc`
- **IPv4 CIDR block:** `10.0.0.0/16`

**Subnet Planning (in `ap-southeast-1`):**
Create 4 Subnets (**VPC ➔ Subnets ➔ Create subnet**):
1. **`snaptics-public-1a`**: `10.0.1.0/24` (For ALB & NAT Gateway)
2. **`snaptics-public-1b`**: `10.0.2.0/24` (For ALB)
3. **`snaptics-private-1a`**: `10.0.3.0/24` (For ECS Task 1 & RDS Primary)
4. **`snaptics-private-1b`**: `10.0.4.0/24` (For ECS Task 2 & RDS Replica)

> [!IMPORTANT]
> For the 2 Public Subnets, ensure you check **Enable auto-assign public IPv4 address** in the subnet settings.

## 2. Gateways & Routing

- **Internet Gateway (IGW):** Create `snaptics-igw` and attach it to `snaptics-vpc`.
- **NAT Gateway:** Create `snaptics-nat-gw` in the `snaptics-public-1a` subnet and allocate an Elastic IP. This allows private containers to call external AI APIs.
- **Route Tables:**
  - Create `snaptics-public-rt`, route `0.0.0.0/0` to `snaptics-igw`, associate with Public subnets.
  - Create `snaptics-private-rt`, route `0.0.0.0/0` to `snaptics-nat-gw`, associate with Private subnets.

## 3. Security Groups Configuration

Configure strict Security Groups in EC2 to follow the principle of least privilege:
- **ALB SG (`snaptics-alb-sg`):** Inbound HTTP (80) and HTTPS (443) from `0.0.0.0/0`.
- **ECS SG (`snaptics-ecs-sg`):** Inbound Custom TCP (8080) ONLY from `snaptics-alb-sg`. (Containers cannot be accessed directly).
- **RDS SG (`snaptics-rds-sg`):** Inbound MS SQL (1433) ONLY from `snaptics-ecs-sg`.
