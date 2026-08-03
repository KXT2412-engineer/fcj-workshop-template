---
title: "Event 3"
date: 2026-08-03
weight: 3
chapter: false
pre: " <b> 4.3. </b> "
---

# Event “AWS FCAJ Agent Forge - Deepdive”

### Purpose of the Event
- Gain access to advanced, enterprise-level (L300) knowledge on how to build a production-ready Agentic AI system.
- Deeply understand the architecture and operational mechanism of the Amazon Bedrock Agent Core service through its 3 core components: Runtime, Identity, and Gateway.
- Grasp new AI communication protocols such as MCP (Model Context Protocol) and A2A (Agent to Agent).
- Participate in hands-on labs immediately after the theory session to apply knowledge in building an actual Agentic AI system systematically.

### List of Speakers
- **Mr. Nghia** - Expert from the AWS Study Group, the main presenter leading the workshop with incredibly profound knowledge in cloud architecture.

### Highlighted Contents

#### The Big Picture of Agentic AI
I realized that Agentic AI does not just stop at answering simple questions (Simple Assistant) or following a pre-configured deterministic workflow. The event demonstrated that a true Agentic AI is a multi-agent system, where Agents have the ability to understand requests, plan, make decisions, communicate, and delegate tasks to each other autonomously. This completely changed how I perceive the capabilities of Artificial Intelligence.

#### Character Shaping and Communication via MCP
I paid special attention to the basic components of an Agent: the LLM brain, the System Prompt (to shape the persona/task), and most importantly, the Tools to connect with data. The MCP (Model Context Protocol) and A2A (Agent to Agent) protocols were introduced as a new standard, allowing the Agent to communicate smoothly with Tools and other Agents, unlocking endless automation potential.

#### Comprehensive Solution: Amazon Bedrock Agent Core
Instead of struggling to build a system from scratch, Mr. Nghia introduced Amazon Bedrock Agent Core. It acts as a comprehensive solution helping enterprises manage and deploy Agentic AI systems easily, securely, and with high scalability, revolving around 3 main pillars:

1. **Runtime Environment:**
   - Operates entirely on a Serverless architecture (no server management needed, pay-as-you-go).
   - Protected by Firecracker Micro VM technology, completely isolating each user session to absolutely prevent data leaks.
   - Supports Versioning for easy roll-backs during production incidents and integrates async processing capabilities for long-running jobs.

2. **Identity Layer (Authentication & Authorization):**
   - Solves the tricky problem: "Who is allowed to connect?" and "Which tools can the Agent access?".
   - Through a mechanism of converting JWT tokens to WAT (Workload Access Token) combined with OAuth, the system never uses the user's token directly. Access credentials are encrypted and stored extremely securely right on the Agent Core via the Token Vault.

3. **Gateway Layer (Multi-purpose Gateway):**
   - Acting as a middleware, the Gateway standardizes communication flows between hundreds of Agents and thousands of tools.
   - The "Human in the loop" feature impressed me the most. Administrators can intervene to approve or reject sensitive decisions made by the Agent (e.g., defaulting to rejecting refunds > $100, but an admin can review and approve an exception).
   - Supports smart Semantic Search to help the Agent automatically find and pick the most useful tool for each specific task.

### What I Learned
Through the extensive 1-hour theoretical video segment, I accumulated:
- An enterprise-scale AI architecture design mindset, far beyond small academic projects.
- The critical importance of security, authorization, and data isolation in AI systems - things that standard programming frameworks often overlook.
- A solid grasp of the closed-loop communication cycle and data flow from User -> Gateway -> Agent -> Identity -> Tools.

### Application to Work
- I plan to experiment with the "Human in the loop" model in my personal projects, creating a task-processing Agent that still requires human approval before intervening in the Database.
- Designing a more robust Backend system through Token-based security mindset (JWT to internal token conversion) just like how the Identity layer of Bedrock Agent Core operates.
- Diving deeper into the MCP protocol to expand features for existing chatbot systems.

### Experience during the Event
Even though this is an L300 topic (very heavy on cloud architecture), Mr. Nghia's practical and visual delivery style prevented me from feeling overwhelmed. Right after the intensive theory session, the emphasis on jumping straight into the hands-on lab was truly a fantastic approach, helping me and the attendees systematize all the knowledge and become much more confident when deploying Agentic AI systems in reality.


#### H�nh ?nh s? ki?n / Event Images
![](/fcj-workshop-template/images/4-EventParticipated/4.3-Event3/event3.jpg)


