# Adonia Sequeira — Cloud & Software Engineering Portfolio

Cloud-focused personal portfolio showcasing software engineering projects, AWS architectures, and serverless solutions, designed with performance, security, and cost efficiency in mind.

This repository represents not just a website, but a **production-style cloud project** built and maintained using modern engineering workflows.

---

## 🚀 What This Portfolio Demonstrates

- Static website hosting on **AWS (S3 + CloudFront + Route 53)**
- HTTPS and global content delivery using **CloudFront + ACM**
- **CI/CD automation** using GitHub Actions
- Cloud architecture and infrastructure thinking
- Serverless design patterns (Lambda, API Gateway, DynamoDB)
- Spec-driven development and planned monthly iterations
- Clean project organization and version control best practices

---

## 🌐 Live Site
🚧 Deployment in progress  
(Will be hosted on AWS using S3 + CloudFront)

---

## 🏗 Architecture Overview

**Frontend**
- Static HTML, CSS, and JavaScript
- Project data driven via JSON for easy monthly updates

**Hosting & Delivery**
- **Amazon S3** — static site hosting
- **Amazon CloudFront** — CDN, HTTPS, caching
- **AWS Certificate Manager (ACM)** — SSL/TLS
- **Amazon Route 53** — DNS and custom domain

**Serverless Add-Ons (Planned)**
- Visitor counter using **Lambda + DynamoDB**
- Contact form using **Lambda + API Gateway**
- Observability via **CloudWatch**
- Security via **IAM least-privilege roles**

**CI/CD**
- Automated deployments using **GitHub Actions**
- Push-to-deploy workflow with cache invalidation

---

## 📁 Repository Structure
'''
.github/workflows/ # CI/CD pipelines
site/ # Static website (HTML/CSS/JS)
api/ # Serverless APIs (Lambda functions)
docker/ # Local development & containerization
specs/ # Planning docs and monthly update specs
docs/ # Architecture diagrams and documentation
'''
---

## 🔁 Update & Maintenance Workflow

This portfolio is designed to be **updated monthly** using a repeatable process:

1. Define scope and changes in `/specs` (spec-driven approach)
2. Add or update projects in `site/data/projects.json`
3. Update resume or content as needed
4. Commit changes to `main`
5. GitHub Actions automatically deploy updates

This mirrors a real-world engineering lifecycle:  
**plan → build → review → deploy → iterate**

---

## 🧪 Local Development

### Run locally (no AWS required)
Simply open:site/index.html

### Docker (optional, planned)
The site will also support local containerized development using Docker for environment consistency and reproducibility.

---

## 📌 Current Status

- ✅ Repository structure finalized
- ✅ Static site implemented
- ✅ Project filtering and search
- 🚧 AWS deployment (S3 + CloudFront)
- 🚧 Serverless visitor counter
- 🚧 Contact form API
- 🚧 CI/CD automation

---

## 🎯 Goals

This portfolio is built to:
- Showcase real-world cloud and software engineering skills
- Serve as a technical discussion artifact in interviews
- Demonstrate thoughtful tool selection and architectural trade-offs
- Grow incrementally without unnecessary complexity or cost

---

## 🔗 Links

- **GitHub:** https://github.com/AdoniaSequeira
- **LinkedIn:** https://www.linkedin.com/in/adonia-sequeira/
- **Email:** adnsequeira20@gmail.com

---

*Built with a focus on clarity, scalability, and practical engineering.*
