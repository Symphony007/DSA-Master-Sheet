"use client";

import { Phase } from "@/types";
import SectionCard from "@/components/SectionCard";

interface PhaseCardProps {
  phase:      Phase;
  active:     boolean;
  lang:       import("@/types").Lang;
  isSolved:   (id: number) => boolean;
  getNote:    (id: number) => string;
  onToggle:   (id: number) => void;
  onSaveNote: (id: number, val: string) => void;
  onActivate: () => void;
}

export default function PhaseCard({
  phase,
  active,
  isSolved,
  getNote,
  onToggle,
  onSaveNote,
  onActivate,
  lang,
}: PhaseCardProps) {
  const allProblems = phase.sections.flatMap(s => s.patterns.flatMap(g => g.problems));
  const total       = allProblems.length;
  const solved      = allProblems.filter(p => isSolved(p.id)).length;
  const pct         = total > 0 ? Math.round((solved / total) * 100) : 0;
  const complete    = total > 0 && solved === total;

  return (
    <div id={`phase-${phase.id}`} style={{ marginBottom: 6 }}>

      {/* ── phase header ──────────────────────────────────────────────── */}
      <button
        onClick={onActivate}
        style={{
          width:        "100%",
          display:      "flex",
          alignItems:   "center",
          gap:          12,
          padding:      "14px 16px",
          background:   active ? "var(--bg-elevated)" : "var(--bg-surface)",
          border:       `1px solid ${active ? "var(--border-default)" : "var(--border-subtle)"}`,
          borderRadius: active ? "var(--radius-lg) var(--radius-lg) 0 0" : "var(--radius-lg)",
          cursor:       "pointer",
          textAlign:    "left",
          transition:   "all 0.15s ease",
        }}
        onMouseEnter={e => { if (!active) e.currentTarget.style.background = "var(--bg-elevated)"; }}
        onMouseLeave={e => { if (!active) e.currentTarget.style.background = "var(--bg-surface)"; }}
      >
        {/* phase number badge */}
        <div
          style={{
            width:          32,
            height:         32,
            borderRadius:   "var(--radius-md)",
            background:     complete ? "#1a3a1a" : active ? "var(--bg-active)" : "var(--bg-base)",
            border:         `1px solid ${complete ? "#4ade8040" : active ? "var(--border-default)" : "var(--border-dim)"}`,
            display:        "flex",
            alignItems:     "center",
            justifyContent: "center",
            flexShrink:     0,
            fontSize:       12,
            fontWeight:     700,
            fontFamily:     "var(--font-mono)",
            color:          complete ? "var(--clr-done)" : active ? "var(--text-primary)" : "var(--text-faint)",
            transition:     "all 0.15s ease",
          }}
        >
          {complete ? "✓" : phase.id}
        </div>

        {/* title + subtitle + prepTime */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            <span
              style={{
                fontSize:   14,
                fontWeight: 600,
                color:      active ? "var(--text-primary)" : "var(--text-secondary)",
                transition: "color 0.15s ease",
              }}
            >
              {phase.title}
            </span>
            {/* prep time badge */}
            <span
              style={{
                fontSize:     10,
                fontFamily:   "var(--font-mono)",
                color:        "var(--text-ghost)",
                background:   "var(--bg-base)",
                border:       "1px solid var(--border-dim)",
                borderRadius: "var(--radius-sm)",
                padding:      "1px 6px",
                flexShrink:   0,
              }}
            >
              {phase.prepTime} prep
            </span>
          </div>
          <div
            style={{
              fontSize:     11,
              color:        "var(--text-faint)",
              marginTop:    2,
              overflow:     "hidden",
              textOverflow: "ellipsis",
              whiteSpace:   "nowrap",
            }}
          >
            {phase.subtitle}
          </div>
        </div>

        {/* right — count + mini bar */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4, flexShrink: 0 }}>
          <span
            style={{
              fontSize:           12,
              fontFamily:         "var(--font-mono)",
              fontVariantNumeric: "tabular-nums",
              color: complete ? "var(--clr-done)" : solved > 0 ? "var(--clr-medium)" : "var(--text-faint)",
            }}
          >
            {solved}
            <span style={{ color: "var(--text-ghost)" }}>/{total}</span>
          </span>
          <div className="progress-track" style={{ width: 64 }}>
            <div
              className={`progress-fill ${complete ? "progress-fill--complete" : active ? "progress-fill--active" : ""}`}
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>
      </button>

      {/* ── expanded content ──────────────────────────────────────────── */}
      {active && (
        <div
          style={{
            border:        "1px solid var(--border-default)",
            borderTop:     "none",
            borderRadius:  "0 0 var(--radius-lg) var(--radius-lg)",
            overflow:      "hidden",
            background:    "var(--bg-base)",
            padding:       "8px",
            display:       "flex",
            flexDirection: "column",
            gap:           4,
          }}
        >
          {/* study tip banner */}
          <div
            style={{
              margin:       "2px 0 6px",
              padding:      "9px 13px",
              background:   "var(--bg-surface)",
              border:       "1px solid var(--border-dim)",
              borderLeft:   "3px solid var(--clr-medium)",
              borderRadius: "var(--radius-md)",
              fontSize:     12,
              color:        "var(--text-dim)",
              lineHeight:   1.55,
            }}
          >
            <span style={{ color: "var(--clr-medium)", fontWeight: 600, marginRight: 6 }}>Tip</span>
            {phase.tip}
          </div>

          {/* sections */}
          {phase.sections.map((section, i) => (
            <SectionCard
              key={section.id}
              section={section}
              isSolved={isSolved}
              getNote={getNote}
              onToggle={onToggle}
              onSaveNote={onSaveNote}
              defaultOpen={i === 0}
              lang={lang}
            />
          ))}
        </div>
      )}
    </div>
  );
}