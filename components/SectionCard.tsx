"use client";

import { useState } from "react";
import { Section } from "@/types";
import LearnBefore from "@/components/LearnBefore";
import PatternGroup from "@/components/PatternGroup";

interface SectionCardProps {
  section:     Section;
  isSolved:    (id: number) => boolean;
  lang:        import("@/types").Lang;
  getNote:     (id: number) => string;
  onToggle:    (id: number) => void;
  onSaveNote:  (id: number, val: string) => void;
  defaultOpen: boolean;
}

export default function SectionCard({
  section,
  isSolved,
  getNote,
  onToggle,
  onSaveNote,
  defaultOpen,
  lang,
}: SectionCardProps) {
  const [open, setOpen] = useState(defaultOpen);

  const allProblems = section.patterns.flatMap(g => g.problems);
  const total       = allProblems.length;
  const solved      = allProblems.filter(p => isSolved(p.id)).length;
  const pct         = total > 0 ? Math.round((solved / total) * 100) : 0;
  const complete    = total > 0 && solved === total;

  return (
    <div
      style={{
        marginBottom:  4,
        border:        "1px solid var(--border-subtle)",
        borderRadius:  "var(--radius-md)",
        overflow:      "hidden",
        background:    "var(--bg-surface)",
      }}
    >
      {/* ── header ──────────────────────────────────────────────────────── */}
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width:      "100%",
          display:    "flex",
          alignItems: "center",
          gap:        10,
          padding:    "10px 14px",
          background: "var(--bg-surface)",
          border:     "none",
          cursor:     "pointer",
          transition: "background 0.15s ease",
          textAlign:  "left",
        }}
        onMouseEnter={e => { e.currentTarget.style.background = "var(--bg-elevated)"; }}
        onMouseLeave={e => { e.currentTarget.style.background = "var(--bg-surface)"; }}
      >
        <span
          style={{
            fontSize:   10,
            color:      "var(--text-faint)",
            transform:  open ? "rotate(90deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
            display:    "inline-block",
            flexShrink: 0,
          }}
        >
          ▶
        </span>

        <span
          style={{
            flex:       1,
            fontSize:   13,
            fontWeight: 500,
            color:      open ? "var(--text-primary)" : "var(--text-secondary)",
            transition: "color 0.15s ease",
          }}
        >
          {section.title}
        </span>

        {total > 0 && (
          <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
            <span
              style={{
                fontSize:           11,
                fontFamily:         "var(--font-mono)",
                color:              complete
                  ? "var(--clr-done)"
                  : solved > 0
                  ? "var(--clr-medium)"
                  : "var(--text-faint)",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {solved}/{total}
            </span>
            <div className="progress-track" style={{ width: 56 }}>
              <div
                className={`progress-fill ${complete ? "progress-fill--complete" : ""}`}
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>
        )}
      </button>

      {/* ── body ────────────────────────────────────────────────────────── */}
      {open && (
        <div style={{ borderTop: "1px solid var(--border-subtle)" }}>
          <LearnBefore sectionId={section.id} lang={lang} />
          {section.patterns.map(group => (
            <PatternGroup
              key={group.name}
              group={group}
              isSolved={isSolved}
              getNote={getNote}
              onToggle={onToggle}
              onSaveNote={onSaveNote}
            />
          ))}
        </div>
      )}
    </div>
  );
}