"use client";

import { useState } from "react";
import learnBefore from "@/data/learnBefore";
import { Lang, LANG_LABELS } from "@/types";

interface LearnBeforeProps {
  sectionId: string; // e.g. "s1", "s12" — key into learnBefore map
  lang:      Lang;
}

export default function LearnBefore({ sectionId, lang }: LearnBeforeProps) {
  const [open, setOpen] = useState(false);

  const content = learnBefore[sectionId];

  // Section 11 (Recursion Warm-Up) has no LC problems but does have learn content.
  // Some future sections might not have content yet — bail out gracefully.
  if (!content) return null;

  const topics = content[lang];

  return (
    <div
      style={{
        margin:       "8px 12px 12px",
        border:       "1px solid var(--border-dim)",
        borderRadius: "var(--radius-md)",
        overflow:     "hidden",
      }}
    >
      {/* ── toggle header ─────────────────────────────────────────────────── */}
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width:          "100%",
          display:        "flex",
          alignItems:     "center",
          justifyContent: "space-between",
          padding:        "9px 14px",
          background:     "var(--bg-surface)",
          border:         "none",
          cursor:         "pointer",
          transition:     "background 0.15s ease",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = "var(--bg-elevated)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = "var(--bg-surface)";
        }}
      >
        {/* left — label */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {/* small coloured dot */}
          <span
            style={{
              width:        6,
              height:       6,
              borderRadius: "50%",
              background:   open ? "var(--clr-medium)" : "var(--border-strong)",
              flexShrink:   0,
              transition:   "background 0.15s ease",
            }}
          />
          <span
            style={{
              fontSize:      11,
              fontWeight:    600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color:         open ? "var(--text-secondary)" : "var(--text-faint)",
              fontFamily:    "var(--font-mono)",
            }}
          >
            Learn Before · {LANG_LABELS[lang]}
          </span>
        </div>

        {/* right — topic count + chevron */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 11, color: "var(--text-ghost)" }}>
            {topics.length} topics
          </span>
          <span
            style={{
              fontSize:   10,
              color:      "var(--text-faint)",
              transform:  open ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.2s ease",
              display:    "inline-block",
            }}
          >
            ▼
          </span>
        </div>
      </button>

      {/* ── topic list ────────────────────────────────────────────────────── */}
      {open && (
        <div
          style={{
            background:  "var(--bg-base)",
            borderTop:   "1px solid var(--border-subtle)",
            padding:     "14px 16px",
          }}
        >
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
            {topics.map((topic, i) => (
              <li
                key={i}
                style={{
                  display:    "flex",
                  gap:        10,
                  alignItems: "flex-start",
                }}
              >
                {/* index number */}
                <span
                  style={{
                    fontSize:       11,
                    color:          "var(--text-ghost)",
                    fontFamily:     "var(--font-mono)",
                    flexShrink:     0,
                    marginTop:      2,
                    minWidth:       18,
                    textAlign:      "right",
                  }}
                >
                  {i + 1}.
                </span>

                {/* topic text */}
                <span
                  style={{
                    fontSize:   13,
                    color:      "var(--text-secondary)",
                    lineHeight: 1.65,
                  }}
                >
                  {topic}
                </span>
              </li>
            ))}
          </ul>

          {/* footer nudge */}
          <p
            style={{
              marginTop:  14,
              fontSize:   11,
              color:      "var(--text-ghost)",
              fontStyle:  "italic",
              paddingTop: 10,
              borderTop:  "1px solid var(--border-subtle)",
            }}
          >
            Study these topics before attempting the problems below.
          </p>
        </div>
      )}
    </div>
  );
}