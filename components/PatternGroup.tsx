"use client";

import { PatternGroup as PatternGroupType } from "@/types";
import ProblemRow from "@/components/ProblemRow";

interface PatternGroupProps {
  group:      PatternGroupType;
  isSolved:   (id: number) => boolean;
  getNote:    (id: number) => string;
  onToggle:   (id: number) => void;
  onSaveNote: (id: number, val: string) => void;
}

export default function PatternGroup({
  group,
  isSolved,
  getNote,
  onToggle,
  onSaveNote,
}: PatternGroupProps) {
  // Section 11 warm-up has no problems — just render the label as a note
  if (group.problems.length === 0) {
    return (
      <div style={{ padding: "10px 14px 14px" }}>
        <p
          style={{
            fontSize:   12,
            color:      "var(--text-dim)",
            fontStyle:  "italic",
            lineHeight: 1.6,
          }}
        >
          {group.name}
        </p>
      </div>
    );
  }

  return (
    <div style={{ marginBottom: 4 }}>
      {/* ── pattern label ───────────────────────────────────────────────── */}
      <div
        style={{
          padding:       "8px 12px 4px",
          fontSize:      10,
          fontWeight:    600,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color:         "var(--text-ghost)",
          fontFamily:    "var(--font-mono)",
        }}
      >
        {group.name}
      </div>

      {/* ── problem rows ────────────────────────────────────────────────── */}
      <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {group.problems.map(problem => (
          <ProblemRow
            key={problem.id}
            problem={problem}
            solved={isSolved(problem.id)}
            note={getNote(problem.id)}
            onToggle={() => onToggle(problem.id)}
            onSaveNote={val => onSaveNote(problem.id, val)}
          />
        ))}
      </div>
    </div>
  );
}