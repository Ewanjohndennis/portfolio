export type Block =
  | { t: "h1"; text: string }
  | { t: "sub"; text: string }
  | { t: "h2"; text: string }
  | { t: "h3"; text: string; meta?: string }
  | { t: "p"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "chips"; items: { label: string; href?: string }[] }
  | { t: "cards"; items: { title: string; stat: string }[] }
  | { t: "rows"; items: { label: string; value: string; href?: string }[] }
  | { t: "skill"; label: string; items: string[] }
  | { t: "hr" };

export type PortfolioFile = { name: string; blocks: Block[] };

export const SUMMARY =
  "Computer Science Engineering student with hands-on experience building agentic AI systems, ML pipelines, and data-intensive backend systems. Shipped a production multi-agent market intelligence platform during my Infosys Springboard internship and currently building a content opportunity scoring model at FlyRank AI against a 79M-row data warehouse. Work well independently, iterate quickly, and care about systems that hold up outside controlled environments.";

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
        text: "**Machine Learning Intern at FlyRank AI** (Jul 2026 – Present, Remote) — building a content refresh prioritization model across a 519K-item content warehouse with ~79M daily performance rows.",
      },
      {
        t: "p",
        text: "**Precision@50 improved from 0.240 to 0.740** on a 30,000-page starter dataset — 37 correct picks in the top 50 vs 12 for the rule-based baseline.",
      },
      { t: "h2", text: "Selected Work" },
      {
        t: "cards",
        items: [
          {
            title: "RTIIS — Real-Time Industry Insight & Strategic Intelligence System",
            stat: "Data-collection latency cut by up to 3x via three parallel agents",
          },
          {
            title: "SentinelAI — AI-Enhanced DevOps Assistant",
            stat: "Safety layer with 0.6 confidence threshold and 120-second cooldown",
          },
          {
            title: "Huddle — Real-Time Campus Collaboration Platform",
            stat: "2nd Prize at Techsprint (GDGC MEC), from ~40 teams",
          },
        ],
      },
    ],
  },
  {
    name: "experience.md",
    blocks: [
      { t: "h2", text: "Experience" },
      { t: "h3", text: "FlyRank AI", meta: "Machine Learning Intern · Jul 2026 – Present · Remote" },
      {
        t: "ul",
        items: [
          "Building a content refresh prioritization model (Applied Search Intelligence track) that ranks which web pages a reviewer should look at first, across a 519K-item content warehouse with ~79M daily performance rows.",
          "Benchmarked a learned random forest model against FlyRank's existing rule-based system: Precision@50 improved from 0.240 to 0.740 on a 30,000-page starter dataset — 37 correct picks in the top 50 vs 12 for the baseline.",
          "Identified search visibility consistency (days_with_impressions) as the top predictive feature, ahead of content age or word count. Applied client-holdout validation to ensure the model generalizes to unseen clients, not just unseen pages.",
          "Designing a future-window label: using 90 days of prior signals to predict content decline over the next 30 days, replacing the current proxy label.",
        ],
      },
      { t: "p", text: "**Stack:** Python, scikit-learn, DuckDB, pandas, Hugging Face datasets" },
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
      { t: "hr" },
      { t: "h3", text: "FOSSMEC", meta: "Content Lead" },
      {
        t: "p",
        text: "Content Lead at the Free and Open Source Software community at Model Engineering College. Involved in planning and promoting technical events and organising activities around open source and technology.",
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
      { t: "h3", text: "SentinelAI — AI-Enhanced DevOps Assistant", meta: "2026" },
      {
        t: "ul",
        items: [
          "Built the AI reasoning engine and safety validation layer for a 4-person DevOps assistant. The safety layer uses a 0.6 confidence threshold and 120-second cooldown before executing infrastructure actions, preventing unsafe autonomous operations.",
          "Powered by Groq's LLaMA-3.3-70b-versatile via FastAPI, with Prometheus for system monitoring and Docker for containerisation. Submitted to Project Jam hackathon (June 2026).",
        ],
      },
      {
        t: "chips",
        items: [
          {
            label: "github.com/AlvinGeorge-AG/AI-Enhanced-DevOps-Assistant",
            href: "https://github.com/AlvinGeorge-AG/AI-Enhanced-DevOps-Assistant",
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
      { t: "h2", text: "Certifications" },
      {
        t: "rows",
        items: [
          {
            label: "Anthropic",
            value: "AI Fluency: Framework & Foundations — Feb 2026",
          },
          { label: "Google Cloud", value: "Introduction to Generative AI — Oct 2025" },
          { label: "IBM", value: "Artificial Intelligence Fundamentals — Jun 2025" },
          {
            label: "Postman",
            value: "Postman API Fundamentals Student Expert — May 2025",
          },
        ],
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
            value: "www.linkedin.com/in/ewanjohndennis",
            href: "https://linkedin.com/in/ewanjohndennis",
          },
          {
            label: "GitHub",
            value: "www.github.com/ewanjohndennis",
            href: "https://www.github.com/ewanjohndennis",
          },
          { label: "Phone", value: "+91 7994687722" },
          { label: "Location", value: "Kochi, Kerala" },
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
      case "hr":
        lines.push("---", "");
        break;
    }
  }
  return lines.join("\n").replace(/\n{3,}/g, "\n\n").trimEnd();
}
