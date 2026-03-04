"use client";

import { Phase } from "@/types";

interface PhaseNavProps {
  phases:      Phase[];
  activePhase: number;
  isSolved:    (id: number) => boolean;
  onSelect:    (phaseId: number) => void;
  vertical?:   boolean;
}

export default function PhaseNav({
  phases,
  activePhase,
  isSolved,
  onSelect,
  vertical = false,
}: PhaseNavProps) {

  function handleClick(phaseId: number) {
    onSelect(phaseId);
    setTimeout(() => {
      const el = document.getElementById(`phase-${phaseId}`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  }

  return (
    <div
      style={{
        display:       "flex",
        flexDirection: vertical ? "column" : "row",
        flexWrap:      vertical ? "nowrap" : "wrap",
        gap:           vertical ? 2 : 4,
        marginBottom:  vertical ? 0 : 16,
      }}
    >
      {phases.map(phase => {
        const allProblems = phase.sections.flatMap(s =>
          s.patterns.flatMap(g => g.problems)
        );
        const total    = allProblems.length;
        const solved   = allProblems.filter(p => isSolved(p.id)).length;
        const complete = total > 0 && solved === total;
        const started  = solved > 0 && !complete;
        const isActive = activePhase === phase.id;

        return (
          <button
            key={phase.id}
            onClick={() => handleClick(phase.id)}
            title={`${phase.title} — ${phase.subtitle} (${solved}/${total})`}
            style={{
              padding:      vertical ? "7px 10px" : "5px 12px",
              borderRadius: "var(--radius-md)",
              border:       `1px solid ${
                isActive  ? "var(--border-strong)"  :
                complete  ? "#4ade8030"              :
                started   ? "#facc1530"              :
                            "var(--border-subtle)"
              }`,
              background:   isActive  ? "var(--bg-active)"  :
                            complete  ? "#0d200d"            :
                            started   ? "#1a1600"            :
                            "transparent",
              cursor:       "pointer",
              fontSize:     11,
              fontWeight:   600,
              fontFamily:   "var(--font-mono)",
              color:        complete  ? "var(--clr-done)"    :
                            started   ? "var(--clr-medium)"  :
                            isActive  ? "var(--text-primary)":
                            "var(--text-faint)",
              transition:   "all 0.15s ease",
              display:      "flex",
              alignItems:   "center",
              gap:          6,
              textAlign:    "left",
              width:        vertical ? "100%" : "auto",
            }}
            onMouseEnter={e => {
              if (!isActive) e.currentTarget.style.background = "var(--bg-elevated)";
            }}
            onMouseLeave={e => {
              if (!isActive) {
                e.currentTarget.style.background =
                  complete ? "#0d200d" :
                  started  ? "#1a1600" :
                  "transparent";
              }
            }}
          >
            {/* dot */}
            <span
              style={{
                width:        5,
                height:       5,
                borderRadius: "50%",
                background:   complete ? "var(--clr-done)"   :
                              started  ? "var(--clr-medium)"  :
                              "var(--border-strong)",
                flexShrink:   0,
              }}
            />

            <span style={{ flex: 1 }}>P{phase.id}</span>

            {/* progress fraction in vertical mode */}
            {vertical && (
              <span
                style={{
                  fontSize:           10,
                  color:              complete ? "var(--clr-done)" :
                                      started  ? "var(--clr-medium)" :
                                      "var(--text-ghost)",
                  fontVariantNumeric: "tabular-nums",
                  marginLeft:         "auto",
                }}
              >
                {solved}/{total}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
