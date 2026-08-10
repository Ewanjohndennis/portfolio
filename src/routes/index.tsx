import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { files, toMarkdown } from "@/lib/portfolio-data";
import { BlockList, CodeView } from "@/components/portfolio/Blocks";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ewan John Dennis — AI/ML Engineer & Software Developer" },
      {
        name: "description",
        content:
          "Portfolio of Ewan John Dennis, AI/ML Engineer and Software Developer in Kochi, Kerala — agentic AI systems, ML pipelines, and data-intensive backends.",
      },
      { property: "og:title", content: "Ewan John Dennis — AI/ML Engineer & Software Developer" },
      {
        property: "og:description",
        content:
          "Agentic AI systems, ML pipelines, and data-intensive backend systems. Projects: RTIIS, SentinelAI, TrainCLI, Huddle.",
      },
    ],
  }),
  component: Index,
});

const dots = ["#3A3A3A", "#2E2E2E", "#242424"];

function Index() {
  const [active, setActive] = useState(files[0]!.name);
  const [mode, setMode] = useState<"preview" | "code">("preview");
  const file = files.find((f) => f.name === active) ?? files[0]!;

  const source = toMarkdown(file.blocks);

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Topbar */}
      <header className="fixed inset-x-0 top-0 z-30 flex h-12 items-center gap-4 border-b border-line bg-panel px-4">
        <div className="flex shrink-0 items-center gap-2">
          {dots.map((c) => (
            <span
              key={c}
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: c }}
              aria-hidden
            />
          ))}
        </div>
        <span className="min-w-0 truncate font-mono text-[11px] tracking-[0.04em] text-muted">
          ewan@portfolio ~/{file.name}
        </span>
        <div className="ml-auto flex shrink-0 items-center rounded-full border border-line-strong p-0.5">
          {(["code", "preview"] as const).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] transition-colors ${
                mode === m ? "bg-ink text-background" : "text-muted hover:text-muted-2"
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </header>

      {/* Sidebar (desktop) */}
      <nav className="fixed bottom-0 left-0 top-12 z-20 hidden w-60 flex-col border-r border-line bg-panel md:flex">
        <div className="px-3 py-4">
          <p className="px-2 pb-3 font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
            Explorer
          </p>
          {files.map((f) => (
            <button
              key={f.name}
              onClick={() => setActive(f.name)}
              className={`flex w-full items-center gap-2.5 px-2 py-1.5 text-left font-mono text-[12px] transition-colors ${
                active === f.name ? "bg-accent text-ink" : "text-muted-2 hover:text-ink"
              }`}
            >
              <span
                className={`h-2.5 w-2.5 shrink-0 border ${
                  active === f.name ? "border-ink bg-ink" : "border-line-strong"
                }`}
                aria-hidden
              />
              <span className="truncate">{f.name}</span>
            </button>
          ))}
        </div>
        <div className="mt-auto border-t border-line px-5 py-4">
          <a
            href="https://github.com/ewanjohndennis"
            target="_blank"
            rel="noreferrer noopener"
            className="block font-mono text-[11px] text-muted-2 hover:text-ink"
          >
            github.com/ewanjohndennis
          </a>
          <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
            Kochi, Kerala
          </p>
        </div>
      </nav>

      {/* Tab bar (mobile) */}
      <nav className="fixed inset-x-0 top-12 z-20 flex overflow-x-auto border-b border-line bg-panel md:hidden">
        {files.map((f) => (
          <button
            key={f.name}
            onClick={() => setActive(f.name)}
            className={`shrink-0 border-r border-line px-4 py-2.5 font-mono text-[11px] transition-colors ${
              active === f.name ? "bg-accent text-ink" : "text-muted-2"
            }`}
          >
            {f.name}
          </button>
        ))}
      </nav>

      <main className="px-5 pb-24 pt-28 md:pl-60 md:pt-12">
        <div className="mx-auto max-w-[740px] py-10">
          {mode === "preview" ? <BlockList blocks={file.blocks} /> : <CodeView source={source} />}
        </div>
      </main>

      {/* Status bar */}
      <footer className="fixed inset-x-0 bottom-0 z-30 flex h-[22px] items-center gap-4 border-t border-line bg-panel px-4 font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
        <span>UTF-8</span>
        <span>Markdown</span>
        <span className="ml-auto">{source.split("\n").length} lines</span>
      </footer>
    </div>
  );
}
