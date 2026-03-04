"use client";

import { useState, useCallback } from "react";
import { Problem, DIFF_COLOR, DIFF_BG } from "@/types";

function toLeetCodeUrl(title: string): string {
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
  return `https://leetcode.com/problems/${slug}/`;
}

function Checkbox({ checked, onToggle }: { checked: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      aria-label={checked ? "Mark as unsolved" : "Mark as solved"}
      style={{
        width:          18,
        height:         18,
        borderRadius:   "var(--radius-sm)",
        border:         `1.5px solid ${checked ? "var(--clr-done)" : "var(--border-strong)"}`,
        background:     checked ? "var(--clr-done)" : "transparent",
        cursor:         "pointer",
        flexShrink:     0,
        display:        "flex",
        alignItems:     "center",
        justifyContent: "center",
        transition:     "all 0.15s ease",
        padding:        0,
      }}
    >
      {checked && (
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <polyline
            points="1.5,5 3.5,7.5 8.5,2"
            stroke="#000"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}

function DiffBadge({ difficulty }: { difficulty: Problem["difficulty"] }) {
  return (
    <span
      style={{
        fontSize:      10,
        padding:       "2px 8px",
        borderRadius:  10,
        flexShrink:    0,
        color:         DIFF_COLOR[difficulty],
        background:    DIFF_BG[difficulty],
        border:        `1px solid ${DIFF_COLOR[difficulty]}33`,
        letterSpacing: "0.03em",
        fontWeight:    500,
      }}
    >
      {difficulty}
    </span>
  );
}

function NoteArea({
  note,
  onSave,
}: {
  note:   string;
  onSave: (val: string) => void;
}) {
  const [draft, setDraft] = useState(note);

  const handleBlur = useCallback(() => {
    if (draft !== note) onSave(draft);
  }, [draft, note, onSave]);

  return (
    <div style={{ padding: "4px 12px 12px 48px" }}>
      <textarea
        value={draft}
        onChange={e => setDraft(e.target.value)}
        onBlur={handleBlur}
        placeholder="Add a note… e.g. 'revisit sliding window trick', 'tricky edge case with empty array'"
        rows={3}
        style={{
          width:        "100%",
          background:   "var(--bg-base)",
          border:       "1px solid var(--border-dim)",
          borderRadius: "var(--radius-md)",
          color:        "var(--text-secondary)",
          padding:      "8px 10px",
          fontSize:     12,
          fontFamily:   "var(--font-sans)",
          lineHeight:   1.6,
          resize:       "vertical",
          outline:      "none",
          transition:   "border-color 0.15s ease",
        }}
        onFocus={e  => { e.currentTarget.style.borderColor = "var(--border-strong)"; }}
        onBlurCapture={e => { e.currentTarget.style.borderColor = "var(--border-dim)"; }}
        autoFocus
      />
      <p style={{ fontSize: 10, color: "var(--text-ghost)", marginTop: 4 }}>
        Saved automatically when you click away.
      </p>
    </div>
  );
}

interface ProblemRowProps {
  problem:    Problem;
  solved:     boolean;
  note:       string;
  onToggle:   () => void;
  onSaveNote: (val: string) => void;
}

export default function ProblemRow({
  problem,
  solved,
  note,
  onToggle,
  onSaveNote,
}: ProblemRowProps) {
  const [noteOpen, setNoteOpen] = useState(false);

  const hasNote = note.trim().length > 0;
  const url     = toLeetCodeUrl(problem.title);

  return (
    <div>
      <div
        style={{
          display:    "flex",
          alignItems: "center",
          gap:        8,
          padding:    "7px 12px",
          borderRadius: "var(--radius-sm)",
          background: solved ? "#0a160a" : noteOpen ? "var(--bg-hover)" : "transparent",
          opacity:    solved ? 0.65 : 1,
          transition: "background 0.1s ease, opacity 0.15s ease",
        }}
        onMouseEnter={e => {
          if (!solved && !noteOpen)
            e.currentTarget.style.background = "var(--bg-hover)";
        }}
        onMouseLeave={e => {
          if (!solved && !noteOpen)
            e.currentTarget.style.background = "transparent";
        }}
      >
        {/* checkbox */}
        <Checkbox checked={solved} onToggle={onToggle} />

        {/* sequential id */}
        <span
          style={{
            fontSize:           11,
            color:              "var(--text-ghost)",
            width:              28,
            textAlign:          "right",
            flexShrink:         0,
            fontFamily:         "var(--font-mono)",
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {problem.id}
        </span>

        {/* title + LC link */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            flex:           1,
            fontSize:       13,
            color:          solved ? "var(--text-dim)" : "var(--text-primary)",
            textDecoration: solved ? "line-through" : "none",
            display:        "flex",
            alignItems:     "center",
            gap:            6,
            minWidth:       0,
          }}
          onMouseEnter={e => {
            e.currentTarget.style.textDecoration = "underline";
            if (!solved) e.currentTarget.style.color = "#fff";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.textDecoration = solved ? "line-through" : "none";
            e.currentTarget.style.color = solved ? "var(--text-dim)" : "var(--text-primary)";
          }}
        >
          {/* star */}
          {problem.starred && (
            <span style={{ color: "var(--clr-star)", fontSize: 10, flexShrink: 0 }}>★</span>
          )}

          {/* LC number */}
          <span style={{ color: "var(--text-ghost)", fontSize: 11, flexShrink: 0 }}>
            {problem.lc}.
          </span>

          {/* title */}
          <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            {problem.title}
          </span>
        </a>

        {/* ── pattern tag — visible on desktop ──────────────────────────── */}
        <span
          className="pattern-tag"
          style={{
            fontSize:     11,
            color:        "var(--text-faint)",
            flexShrink:   0,
            maxWidth:     160,
            overflow:     "hidden",
            textOverflow: "ellipsis",
            whiteSpace:   "nowrap",
            fontFamily:   "var(--font-mono)",
          }}
        >
          {problem.pattern}
        </span>

        {/* difficulty badge */}
        <DiffBadge difficulty={problem.difficulty} />

        {/* note button */}
        <button
          onClick={() => setNoteOpen(o => !o)}
          aria-label={hasNote ? "View / edit note" : "Add note"}
          title={hasNote ? "Has note — click to edit" : "Add a note"}
          style={{
            background:   "none",
            border:       "none",
            cursor:       "pointer",
            padding:      "3px 5px",
            borderRadius: "var(--radius-sm)",
            color:        hasNote
              ? "var(--clr-note)"
              : noteOpen
              ? "var(--text-secondary)"
              : "var(--border-strong)",
            fontSize:   14,
            flexShrink: 0,
            transition: "color 0.15s ease",
            lineHeight: 1,
          }}
          onMouseEnter={e => {
            if (!hasNote) e.currentTarget.style.color = "var(--text-secondary)";
          }}
          onMouseLeave={e => {
            if (!hasNote)
              e.currentTarget.style.color = noteOpen
                ? "var(--text-secondary)"
                : "var(--border-strong)";
          }}
        >
          {hasNote ? "◈" : "✎"}
        </button>
      </div>

      {noteOpen && (
        <NoteArea note={note} onSave={onSaveNote} />
      )}
    </div>
  );
}
