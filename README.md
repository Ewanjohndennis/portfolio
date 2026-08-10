# Terminal Chronicle

Build a single-page developer portfolio with a VS Code / terminal aesthetic. Black and white only, no color accents anywhere. Fonts: Space Grotesk for body text, Space Mono for all UI chrome, labels, and monospace sections.

**IMPORTANT: Use only the exact content provided below. Do not invent, infer, or paraphrase anything. Every project name, metric, bullet point, date, and link must come verbatim from this content block.**

---

**CONTENT TO USE EXACTLY**

Person: Ewan John Dennis
Title: AI/ML Engineer | Software Developer
Email: ewandennis2006@gmail.com
Phone: +91 7994687722
LinkedIn: linkedin.com/in/ewanjohndennis
GitHub: github.com/ewanjohndennis
Location: Kochi, Kerala

Summary: Computer Science Engineering student with hands-on experience building agentic AI systems, ML pipelines, and data-intensive backend systems. Shipped a production multi-agent market intelligence platform during my Infosys Springboard internship and currently building a content opportunity scoring model at FlyRank AI against a 79M-row data warehouse. Work well independently, iterate quickly, and care about systems that hold up outside controlled environments.

EXPERIENCE:

Role 1:
Company: FlyRank AI
Title: Machine Learning Intern
Dates: Jul 2026 – Present
Type: Remote
Bullets:
- Building a content refresh prioritization model (Applied Search Intelligence track) that ranks which web pages a reviewer should look at first, across a 519K-item content warehouse with ~79M daily performance rows.
- Benchmarked a learned random forest model against FlyRank's existing rule-based system: Precision@50 improved from 0.240 to 0.740 on a 30,000-page starter dataset — 37 correct picks in the top 50 vs 12 for the baseline.
- Identified search visibility consistency (days_with_impressions) as the top predictive feature, ahead of content age or word count. Applied client-holdout validation to ensure the model generalizes to unseen clients, not just unseen pages.
- Designing a future-window label: using 90 days of prior signals to predict content decline over the next 30 days, replacing the current proxy label.
Stack: Python, scikit-learn, DuckDB, pandas, Hugging Face datasets

Role 2:
Company: Infosys Springboard (Virtual Internship 6.0)
Title: AI Engineer Intern
Dates: Feb 2026 – Apr 2026
Type: Remote
Bullets:
- Designed and deployed a multi-agent AI architecture with three parallel agents running concurrently via ThreadPoolExecutor, reducing data-collection latency by up to 3x compared to sequential execution.
- Built a synthesis pipeline integrating a FAISS vector database for RAG, a Groq LLM for report generation, and a PyTorch LSTM for time-series forecasting, running end-to-end with no manual steps.
- Iterated on prompt engineering pipelines across Azure OpenAI, HuggingFace, OpenRouter, and Groq — evaluating output quality and reliability under real-world rate limits and tracking provider performance across runs.
- Shipped a role-based Streamlit UI with MongoDB Atlas persistence, Gmail SMTP delivery, and PDF reporting via ReportLab. Generated 20+ intelligence reports in production.

Role 3:
Organization: FOSSMEC
Title: Content Lead
Description: Content Lead at the Free and Open Source Software community at Model Engineering College. Involved in planning and promoting technical events and organising activities around open source and technology.

PROJECTS:

Project 1:
Name: RTIIS — Real-Time Industry Insight & Strategic Intelligence System
Year: 2026
Bullets:
- Flagship project from Infosys Springboard Virtual Internship 6.0. Multi-agent platform for automated market intelligence: three parallel agents collect news, competitor data, and financial signals concurrently via ThreadPoolExecutor, cutting data-collection latency by up to 3x.
- Synthesis agent uses FAISS for RAG, Groq for report generation, and a PyTorch LSTM for stock trend forecasting. Deployed on HuggingFace Spaces with MongoDB Atlas persistence, Gmail SMTP delivery, and PDF export via ReportLab. Supports up to 4 competitor companies per run.
GitHub: github.com/Ewanjohndennis/RealTimeMarketIntelli

Project 2:
Name: SentinelAI — AI-Enhanced DevOps Assistant
Year: 2026
Bullets:
- Built the AI reasoning engine and safety validation layer for a 4-person DevOps assistant. The safety layer uses a 0.6 confidence threshold and 120-second cooldown before executing infrastructure actions, preventing unsafe autonomous operations.
- Powered by Groq's LLaMA-3.3-70b-versatile via FastAPI, with Prometheus for system monitoring and Docker for containerisation. Submitted to Project Jam hackathon (June 2026).
GitHub: github.com/AlvinGeorge-AG/AI-Enhanced-DevOps-Assistant

Project 3:
Name: TrainCLI — End-to-End ML Training CLI
Year: 2025–2026
Bullets:
- Published to PyPI. Trains scikit-learn and XGBoost models directly from a CSV file with a single command, covering preprocessing, training, evaluation, and export. XGBoost is a lazy conditional dependency to keep the base install lightweight.
- Ships with an MCP server component, exposing training and inference as tools callable by any MCP-compatible agent.
GitHub: github.com/Ewanjohndennis/traincli

Project 4:
Name: Huddle — Real-Time Campus Collaboration Platform
Year: 2026
Bullets:
- Real-time platform for students to find and join active study sessions on campus. Validated real-time sync under concurrent sessions with sub-100ms Firestore latency; auto-cleans expired sessions.
- Awarded 2nd Prize at Techsprint (GDGC MEC), from ~40 teams, selected into a 10-team final.
GitHub: github.com/Ewanjohndennis/huddle
Live: huddlechats.vercel.app

SKILLS:
AI/ML: Transformer Architecture, Agentic Workflows, Tool Calling, Embedding Models, RAG, Multi-Agent Systems, LLM Integration, Context Engineering, FAISS Vector Database, Vector Embeddings, PyTorch, LSTM Forecasting, NLP, Fine-Tuning, Model Evaluation, MLOps, Data Preprocessing, scikit-learn, XGBoost, DuckDB
Providers & SDKs: Groq, HuggingFace Inference API, OpenRouter, Azure OpenAI, Anthropic SDK
Backend: Python, Node.js, Express.js, Spring Boot, REST API, PostgreSQL, MongoDB, Docker, FastAPI
Frontend: JavaScript (ES6+), TypeScript, React.js, Next.js, Tailwind CSS, Firebase
DevOps/Cloud: Git, CI/CD, Google Cloud Run, Vercel, Streamlit Cloud, HuggingFace Spaces

CERTIFICATIONS:
- AI Fluency: Framework & Foundations — Anthropic — Feb 2026
- Introduction to Generative AI — Google Cloud — Oct 2025
- Artificial Intelligence Fundamentals — IBM — Jun 2025
- Postman API Fundamentals Student Expert — Postman — May 2025

EDUCATION:
Institution 1: Model Engineering College — B.Tech in Computer Science and Engineering — CGPA: 8.73 — Kochi, Kerala — 2024 to Present
Institution 2: Vidyodaya School, Thevakkal — Senior Secondary (Class 12) — 93% — CBSE — 2022 to 2024

---

**LAYOUT**

Fixed topbar 48px tall. Fixed sidebar 240px wide, full height minus topbar — it must stay visible while the main content scrolls. Main content area scrolls independently, max-width 740px, centered.

Topbar: dark background #0C0C0C, three grey macOS-style traffic light dots (no color), monospace brand label `ewan@portfolio ~/filename`, and a pill-shaped CODE / PREVIEW toggle on the right — active state is white background with black text.

Sidebar: file list buttons for README.md, experience.md, projects.md, skills.md, education.md, contact.md. Each has a small square icon and monospace filename. Active file has a highlighted background. Pinned footer at bottom with GitHub link and location text. On mobile, render as a full-width horizontal scrollable tab bar with complete readable labels — not icon-only, not collapsed.

**PAGES**

README.md: h1 name, subtitle from the summary above. LinkedIn and GitHub as bordered pill chip buttons in a flex row — not plain text links, they must look like tappable chips with border, padding, monospace font. Then: Currently section (FlyRank role and the Precision@50 stat), What I work with (bullet list from skills), Selected Work (RTIIS, SentinelAI, Huddle as compact cards with one outcome stat each).

experience.md: All three roles exactly as listed above with full bullets. Horizontal divider between roles. Role metadata (dates, remote) in small muted monospace below company name.

projects.md: All four projects exactly as listed above. Each project has its name, year, full bullets, and GitHub link rendered as a small monospace chip. Huddle also has a Live link chip. Full-width hr between projects.

skills.md: Each skill category as an uppercase monospace label followed by skills rendered as inline bordered chips in a flex-wrap row — not a bullet list.

education.md: Both institutions with all details. Then certifications section with all four certs, each showing name, issuer, and date.

contact.md: Email, LinkedIn, GitHub, phone, location — each as a two-column row with a small uppercase monospace label on the left and the value on the right. Email and social are real anchor tags.

**TYPOGRAPHY AND COLOR**

h1: Space Grotesk 38px weight 600 letter-spacing -0.04em color #F0EEE8
h2: Space Mono 11px uppercase letter-spacing 0.15em color #888 with 1px bottom border #222
h3: Space Grotesk 17px weight 500 color #F0EEE8
p: Space Grotesk 14px color #888
strong: #F0EEE8
List items: em dash prefix via ::before, no bullet dots

Colors: bg #000, panel #0C0C0C, border #222 and #2E2E2E, text #F0EEE8, muted #555 and #888. Zero color accents.

Code view: line numbers in #2A2A2A, body text #444, headings #F0EEE8, Space Mono 12px line-height 1.8.

Status bar: 22px, dark panel, shows UTF-8, Markdown, line count.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/37d731ce-d9d8-44d6-a5e2-1ec44cb0b1d2).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
