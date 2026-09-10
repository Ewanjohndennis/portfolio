export type Block =
  | { t: "h1"; text: string }
  | { t: "sub"; text: string }
  | { t: "h2"; text: string }
  | { t: "h3"; text: string; meta?: string }
  | { t: "p"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "chips"; items: { label: string; href?: string }[] }
  | { t: "cards"; items: { title: string; stat: string; desc?: string }[] }
  | { t: "rows"; items: { label: string; value: string; href?: string }[] }
  | { t: "skill"; label: string; items: string[] }
  | { t: "link"; label: string; href: string }
  | { t: "hr" };

export type PortfolioFile = { name: string; blocks: Block[] };

export const SUMMARY =
  "Computer Science Engineering student with hands-on experience building agentic AI systems, ML pipelines, and data-intensive backend systems. Shipped a production multi-agent market intelligence platform during my Infosys Springboard internship, built a content decay scoring model at FlyRank AI against a 175K-page warehouse, and contributed to national-level hackathons including Kavach 2024. Work well independently, iterate quickly, and care about systems that hold up outside controlled environments.";

export const files: PortfolioFile[] = [
  {
    name: "README.md",
    blocks: [
      { t: "h1", text: "Ewan John Dennis" },
      { t: "sub", text: "AI/ML Engineer | Software Developer" },
      { t: "p", text: SUMMARY },
      {
        t: "chips",
        items: [
          { label: "linkedin.com/in/ewanjohndennis", href: "https://www.linkedin.com/in/ewanjohndennis" },
          { label: "github.com/ewanjohndennis", href: "https://www.github.com/ewanjohndennis" },
          { label: "Resume", href: "/newresume.pdf" },
        ],
      },
      { t: "h2", text: "Currently" },
      {
        t: "p",
        text: "3rd-year B.Tech Computer Science Engineering student at Model Engineering College, Kochi. Actively looking for AI/ML engineering and SDE internship opportunities.",
      },
      { t: "link", label: "Read full experience →", href: "experience.md" },
      { t: "h2", text: "Selected Work" },
      {
        t: "cards",
        items: [
          {
            title: "RTIIS — Real-Time Industry Insight & Strategic Intelligence System",
            desc: "Multi-agent market intelligence platform — parallel agents, FAISS RAG, PyTorch LSTM forecasting. Data-collection latency cut by up to 3x.",
            stat: "Python · Groq · FAISS · PyTorch · MongoDB",
          },
          {
            title: "Kavach — AI Chargeback Decisioning System",
            desc: "Solo build for Razorpay AI Buildathon. XGBoost + SHAP + EV-based routing to AUTO_CONTEST, MANUAL_REVIEW, or AUTO_ACCEPT. Evidence-grounded representment drafts, no LLM hallucination.",
            stat: "XGBoost · SHAP · FastAPI · SQLite",
          },
          {
            title: "TrainCLI — End-to-End ML Training CLI",
            desc: "PyPI-published. Trains scikit-learn and XGBoost models from a CSV in one command. Ships with an MCP server exposing training and inference as agent-callable tools.",
            stat: "Python · scikit-learn · XGBoost · MCP",
          },
          {
            title: "Huddle — Real-Time Campus Collaboration Platform",
            desc: "Real-time study session finder with sub-100ms Firestore sync. 2nd Prize at Techsprint (GDGC MEC), ~40 teams.",
            stat: "React · Firebase · Vercel",
          },
        ],
      },
      { t: "link", label: "View all projects →", href: "projects.md" },
      { t: "h2", text: "Technical Focus" },
      {
        t: "p",
        text: "Python · LightGBM · scikit-learn · PyTorch · FastAPI · RAG · Multi-Agent Systems · React · Firebase · Docker",
      },
      { t: "link", label: "View full skills →", href: "skills.md" },
      { t: "h2", text: "Contact" },
      {
        t: "rows",
        items: [
          { label: "Email", value: "ewandennis2006@gmail.com", href: "mailto:ewandennis2006@gmail.com" },
          { label: "LinkedIn", value: "linkedin.com/in/ewanjohndennis", href: "https://www.linkedin.com/in/ewanjohndennis" },
          { label: "GitHub", value: "github.com/ewanjohndennis", href: "https://www.github.com/ewanjohndennis" },
          { label: "Status", value: "Open to AI/ML Engineer and SDE internship opportunities" },
        ],
      },
    ],
  },
  {
    name: "experience.md",
    blocks: [
      { t: "h2", text: "Experience" },
      { t: "h3", text: "FlyRank AI", meta: "Machine Learning Intern · Jul 2026 – Aug 2026 · Remote" },
      {
        t: "ul",
        items: [
          "Built a content refresh prioritization model (Applied Search Intelligence, Lane 2) ranking decay risk across 175,205 pages from FlyRank's search analytics warehouse, scored end-to-end with a 3-tier actionable output queue.",
          "Trained LightGBM and Random Forest classifiers on a future-window label (prior-period signals predicting 30-day impression decline); LightGBM achieved ROC-AUC 0.973 and PR-AUC 0.9997 under strict client-grouped 5-fold cross-validation, beating the rule baseline's ROC-AUC of 0.903.",
          "Enforced GroupKFold splits by client_hash_id to prevent domain-authority memorization; naive random splits inflated ROC-AUC by 0.008, confirming the grouped approach as the honest zero-shot evaluation.",
          "Delivered a calibrated action playbook: IMMEDIATE_REFRESH (24%), SCHEDULED_UPDATE (21%), MONITOR (55%) — with reason codes and no-go automation rules for live publishing. Stack: Python, scikit-learn, LightGBM, DuckDB, pandas, Hugging Face datasets.",
        ],
      },
      { t: "p", text: "**Stack:** Python, scikit-learn, LightGBM, DuckDB, pandas, Hugging Face datasets" },
      { t: "hr" },
      {
        t: "h3",
        text: "Infosys Springboard (Virtual Internship 6.0)",
        meta: "AI Engineer Intern · Feb 2026 – Apr 2026 · Remote",
      },
      {
        t: "ul",
        items: [
          "Designed and deployed a multi-agent AI architecture with three parallel agents running concurrently via ThreadPoolExecutor, reducing data-collection latency by up to 3x compared to sequential execution.",
          "Built a synthesis pipeline integrating a FAISS vector database for RAG, a Groq LLM for report generation, and a PyTorch LSTM for time-series forecasting, running end-to-end with no manual steps.",
          "Iterated on prompt engineering pipelines across Azure OpenAI, HuggingFace, OpenRouter, and Groq — evaluating output quality and reliability under real-world rate limits and tracking provider performance across runs.",
          "Shipped a role-based Streamlit UI with MongoDB Atlas persistence, Gmail SMTP delivery, and PDF reporting via ReportLab. Generated 20+ intelligence reports in production.",
        ],
      },
      { t: "p", text: "**Stack:** Python, ThreadPoolExecutor, FAISS, PyTorch, Groq, MongoDB Atlas, Streamlit, ReportLab" },
      { t: "hr" },
      { t: "h3", text: "FOSSMEC", meta: "Content Lead · 2024 – Present" },
      {
        t: "p",
        text: "Content Lead at the Free and Open Source Software community at Model Engineering College. Planning and promoting technical events and organising activities around open source and technology.",
      },
    ],
  },
  {
    name: "projects.md",
    blocks: [
      { t: "h2", text: "Projects" },
      {
        t: "h3",
        text: "RTIIS — Real-Time Industry Insight & Strategic Intelligence System",
        meta: "2026",
      },
      {
        t: "ul",
        items: [
          "Flagship project from Infosys Springboard Virtual Internship 6.0. Multi-agent platform for automated market intelligence: three parallel agents collect news, competitor data, and financial signals concurrently via ThreadPoolExecutor, cutting data-collection latency by up to 3x.",
          "Synthesis agent uses FAISS for RAG, Groq for report generation, and a PyTorch LSTM for stock trend forecasting. Deployed on HuggingFace Spaces with MongoDB Atlas persistence, Gmail SMTP delivery, and PDF export via ReportLab. Supports up to 4 competitor companies per run.",
        ],
      },
      {
        t: "chips",
        items: [
          {
            label: "github.com/Ewanjohndennis/RealTimeMarketIntelli",
            href: "https://github.com/Ewanjohndennis/RealTimeMarketIntelli",
          },
        ],
      },
      { t: "hr" },
      { t: "h3", text: "Kavach — AI Chargeback Decisioning System", meta: "Razorpay AI Buildathon · 2026" },
      {
        t: "ul",
        items: [
          "Built an end-to-end chargeback decisioning system for Visa Reason Code 10.4 disputes as a solo entry. An XGBoost classifier estimates P(win) per dispute; a deterministic policy layer routes to AUTO_CONTEST, MANUAL_REVIEW, or AUTO_ACCEPT based on expected financial value (EV = P(win) × amount − (1 − P(win)) × contest fee).",
          "Used SHAP tree explainability to surface the strongest contributing features per prediction, kept strictly separate from representment evidence. Generated structured, evidence-grounded representment drafts for AUTO_CONTEST cases — all factual claims bound to supplied merchant telemetry, no LLM hallucination.",
          "Exposed a FastAPI webhook API with SQLite persistence, a terminal operator interface for manual-review cases, and a held-out financial evaluation reporting net recovery and ROI against a contest-everything baseline.",
        ],
      },
      {
        t: "chips",
        items: [
          {
            label: "github.com/Ewanjohndennis/Kavach",
            href: "https://github.com/Ewanjohndennis/Kavach",
          },
        ],
      },
      { t: "hr" },
      { t: "h3", text: "TrainCLI — End-to-End ML Training CLI", meta: "2025–2026" },
      {
        t: "ul",
        items: [
          "Published to PyPI. Trains scikit-learn and XGBoost models directly from a CSV file with a single command, covering preprocessing, training, evaluation, and export. XGBoost is a lazy conditional dependency to keep the base install lightweight.",
          "Ships with an MCP server component, exposing training and inference as tools callable by any MCP-compatible agent.",
        ],
      },
      {
        t: "chips",
        items: [
          {
            label: "github.com/Ewanjohndennis/traincli",
            href: "https://github.com/Ewanjohndennis/traincli",
          },
        ],
      },
      { t: "hr" },
      { t: "h3", text: "Huddle — Real-Time Campus Collaboration Platform", meta: "2026" },
      {
        t: "ul",
        items: [
          "Real-time platform for students to find and join active study sessions on campus. Validated real-time sync under concurrent sessions with sub-100ms Firestore latency; auto-cleans expired sessions.",
          "Awarded 2nd Prize at Techsprint (GDGC MEC), from ~40 teams, selected into a 10-team final.",
        ],
      },
      {
        t: "chips",
        items: [
          {
            label: "github.com/Ewanjohndennis/huddle",
            href: "https://github.com/Ewanjohndennis/huddle",
          },
          { label: "huddlechats.vercel.app", href: "https://huddlechats.vercel.app" },
        ],
      },
    ],
  },
  {
    name: "skills.md",
    blocks: [
      { t: "h2", text: "Skills" },
      {
        t: "skill",
        label: "AI/ML",
        items: [
          "Transformer Architecture",
          "Agentic Workflows",
          "Tool Calling",
          "Embedding Models",
          "RAG",
          "Multi-Agent Systems",
          "LLM Integration",
          "Context Engineering",
          "FAISS Vector Database",
          "Vector Embeddings",
          "PyTorch",
          "LSTM Forecasting",
          "NLP",
          "Fine-Tuning",
          "Model Evaluation",
          "MLOps",
          "Data Preprocessing",
          "scikit-learn",
          "XGBoost",
          "LightGBM",
          "DuckDB",
        ],
      },
      {
        t: "skill",
        label: "Providers & SDKs",
        items: [
          "Groq",
          "HuggingFace Inference API",
          "OpenRouter",
          "Azure OpenAI",
          "Anthropic SDK",
        ],
      },
      {
        t: "skill",
        label: "Backend",
        items: [
          "Python",
          "Node.js",
          "Express.js",
          "Spring Boot",
          "REST API",
          "PostgreSQL",
          "MongoDB",
          "Docker",
          "FastAPI",
        ],
      },
      {
        t: "skill",
        label: "Frontend",
        items: [
          "JavaScript (ES6+)",
          "TypeScript",
          "React.js",
          "Next.js",
          "Tailwind CSS",
          "Firebase",
        ],
      },
      {
        t: "skill",
        label: "DevOps/Cloud",
        items: [
          "Git",
          "CI/CD",
          "Google Cloud Run",
          "Vercel",
          "Streamlit Cloud",
          "HuggingFace Spaces",
        ],
      },
    ],
  },
  {
    name: "education.md",
    blocks: [
      { t: "h2", text: "Education" },
      {
        t: "h3",
        text: "Model Engineering College",
        meta: "B.Tech in Computer Science and Engineering · CGPA: 8.73 · Kochi, Kerala · 2024 to Present",
      },
      { t: "hr" },
      {
        t: "h3",
        text: "Vidyodaya School, Thevakkal",
        meta: "Senior Secondary (Class 12) · 93% · CBSE · 2022 to 2024",
      },
    ],
  },
  {
    name: "contact.md",
    blocks: [
      { t: "h2", text: "Contact" },
      {
        t: "rows",
        items: [
          {
            label: "Email",
            value: "ewandennis2006@gmail.com",
            href: "mailto:ewandennis2006@gmail.com",
          },
          {
            label: "LinkedIn",
            value: "linkedin.com/in/ewanjohndennis",
            href: "https://linkedin.com/in/ewanjohndennis",
          },
          {
            label: "GitHub",
            value: "github.com/ewanjohndennis",
            href: "https://www.github.com/ewanjohndennis",
          },
          { label: "Phone", value: "+91 7994687722" },
          { label: "Location", value: "Kochi, Kerala" },
          { label: "Status", value: "Open to AI/ML Engineer and SDE internship opportunities" },
        ],
      },
    ],
  },
];

export function toMarkdown(blocks: Block[]): string {
  const lines: string[] = [];
  for (const b of blocks) {
    switch (b.t) {
      case "h1":
        lines.push(`# ${b.text}`, "");
        break;
      case "sub":
        lines.push(`> ${b.text}`, "");
        break;
      case "h2":
        lines.push(`## ${b.text}`, "");
        break;
      case "h3":
        lines.push(`### ${b.text}`, ...(b.meta ? [`_${b.meta}_`] : []), "");
        break;
      case "p":
        lines.push(b.text, "");
        break;
      case "ul":
        lines.push(...b.items.map((i) => `- ${i}`), "");
        break;
      case "chips":
        lines.push(...b.items.map((c) => `[${c.label}](${c.href ?? "#"})`), "");
        break;
      case "cards":
        lines.push(...b.items.map((c) => `- **${c.title}** — ${c.stat}`), "");
        break;
      case "rows":
        lines.push(...b.items.map((r) => `${r.label.toUpperCase()}: ${r.value}`), "");
        break;
      case "skill":
        lines.push(`**${b.label.toUpperCase()}**`, b.items.join(" · "), "");
        break;
      case "link":
        lines.push(`[${b.label}](${b.href})`, "");
        break;
      case "hr":
        lines.push("---", "");
        break;
    }
  }
  return lines.join("\n").replace(/\n{3,}/g, "\n\n").trimEnd();
}