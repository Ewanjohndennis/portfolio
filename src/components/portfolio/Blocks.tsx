import type { ReactNode } from "react";
import type { Block } from "@/lib/portfolio-data";

function Rich({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith("**") && p.endsWith("**") ? (
          <strong key={i} className="font-medium text-ink">
            {p.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>{p}</span>
        ),
      )}
    </>
  );
}

function Chip({ label, href }: { label: string; href?: string }) {
  const cls =
    "inline-flex items-center rounded-full border border-line-strong px-3 py-1.5 font-mono text-[11px] leading-none text-muted-2 transition-colors hover:border-ink hover:text-ink";
  return href ? (
    <a href={href} target="_blank" rel="noreferrer noopener" className={cls}>
      {label}
    </a>
  ) : (
    <span className={cls}>{label}</span>
  );
}

export function BlockList({ blocks }: { blocks: Block[] }) {
  const out: ReactNode[] = [];
  blocks.forEach((b, i) => {
    switch (b.t) {
      case "h1":
        out.push(
          <h1
            key={i}
            className="text-[38px] font-semibold leading-[1.1] tracking-[-0.04em] text-ink"
          >
            {b.text}
          </h1>,
        );
        break;
      case "sub":
        out.push(
          <p key={i} className="mt-2 font-mono text-[12px] tracking-[0.06em] text-muted-2">
            {b.text}
          </p>,
        );
        break;
      case "h2":
        out.push(
          <h2
            key={i}
            className="mt-12 border-b border-line pb-2 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-2"
          >
            {b.text}
          </h2>,
        );
        break;
      case "h3":
        out.push(
          <div key={i} className="mt-8">
            <h3 className="text-[17px] font-medium text-ink">{b.text}</h3>
            {b.meta && (
              <p className="mt-1 font-mono text-[11px] tracking-[0.04em] text-muted">{b.meta}</p>
            )}
          </div>,
        );
        break;
      case "p":
        out.push(
          <p key={i} className="mt-4 text-[14px] leading-[1.7] text-muted-2">
            <Rich text={b.text} />
          </p>,
        );
        break;
      case "ul":
        out.push(
          <ul key={i} className="mt-4 space-y-2.5">
            {b.items.map((it, j) => (
              <li
                key={j}
                className="relative pl-6 text-[14px] leading-[1.7] text-muted-2 before:absolute before:left-0 before:text-muted before:content-['—']"
              >
                <Rich text={it} />
              </li>
            ))}
          </ul>,
        );
        break;
      case "chips":
        out.push(
          <div key={i} className="mt-5 flex flex-wrap gap-2">
            {b.items.map((c, j) => (
              <Chip key={j} {...c} />
            ))}
          </div>,
        );
        break;
      case "cards":
        out.push(
          <div key={i} className="mt-5 grid gap-3">
            {b.items.map((c, j) => (
              <div key={j} className="border border-line bg-panel p-4">
                <h3 className="text-[15px] font-medium leading-snug text-ink">{c.title}</h3>
                <p className="mt-2 font-mono text-[11px] leading-[1.6] text-muted-2">{c.stat}</p>
              </div>
            ))}
          </div>,
        );
        break;
      case "rows":
        out.push(
          <div key={i} className="mt-5 divide-y divide-line border-y border-line">
            {b.items.map((r, j) => (
              <div
                key={j}
                className="grid grid-cols-[minmax(0,1fr)] gap-1 py-3 sm:grid-cols-[130px_minmax(0,1fr)] sm:gap-4"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                  {r.label}
                </span>
                {r.href ? (
                  <a
                    href={r.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="min-w-0 break-words text-[14px] text-ink underline decoration-line-strong underline-offset-4 hover:decoration-ink"
                  >
                    {r.value}
                  </a>
                ) : (
                  <span className="min-w-0 break-words text-[14px] text-muted-2">{r.value}</span>
                )}
              </div>
            ))}
          </div>,
        );
        break;
      case "skill":
        out.push(
          <div key={i} className="mt-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
              {b.label}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {b.items.map((s, j) => (
                <span
                  key={j}
                  className="inline-flex items-center border border-line-strong px-2.5 py-1 font-mono text-[11px] leading-none text-muted-2"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>,
        );
        break;
      case "hr":
        out.push(<hr key={i} className="mt-10 border-line" />);
        break;
    }
  });
  return <>{out}</>;
}

export function CodeView({ source }: { source: string }) {
  const lines = source.split("\n");
  return (
    <pre className="overflow-x-auto font-mono text-[12px] leading-[1.8]">
      <code>
        {lines.map((l, i) => (
          <div key={i} className="flex gap-4">
            <span className="w-8 shrink-0 select-none text-right text-code-gutter">{i + 1}</span>
            <span
              className={
                l.startsWith("#") ? "text-ink" : "whitespace-pre-wrap break-words text-code-body"
              }
            >
              {l || " "}
            </span>
          </div>
        ))}
      </code>
    </pre>
  );
}
