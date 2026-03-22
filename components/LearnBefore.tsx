"use client";

import { useState } from "react";
import learnBefore from "@/data/learnBefore";
import learnBeforeJava from "@/data/learnBeforeJava";
import { Lang, LANG_LABELS, JavaLearnTopic, LearnTopic } from "@/types";

interface LearnBeforeProps {
  sectionId: string;
  lang:      Lang;
}

export default function LearnBefore({ sectionId, lang }: LearnBeforeProps) {
  const [open, setOpen] = useState(false);

  // learnBefore[sectionId] is LearnTopic[]
  // learnBeforeJava[sectionId] is JavaLearnTopic[]
  const pyTopics:   LearnTopic[]     | undefined = learnBefore[sectionId];
  const javaTopics: JavaLearnTopic[] | undefined = learnBeforeJava[sectionId];

  const activeTopics = lang === "ja" ? javaTopics : pyTopics;
  if (!activeTopics || activeTopics.length === 0) return null;

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
        onMouseEnter={e => { e.currentTarget.style.background = "var(--bg-elevated)"; }}
        onMouseLeave={e => { e.currentTarget.style.background = "var(--bg-surface)"; }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
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
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 11, color: "var(--text-ghost)" }}>
            {activeTopics.length} topics
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
            background: "var(--bg-base)",
            borderTop:  "1px solid var(--border-subtle)",
            padding:    "14px 16px",
          }}
        >
          {lang === "ja"
            ? <JavaTopicList  topics={javaTopics!} />
            : <PythonTopicList topics={pyTopics!} />
          }
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

// ── Python: plain string list ──────────────────────────────────────────────────
function PythonTopicList({ topics }: { topics: LearnTopic[] }) {
  return (
    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
      {topics.map((topic, i) => (
        <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
          <span
            style={{
              fontSize:   11,
              color:      "var(--text-ghost)",
              fontFamily: "var(--font-mono)",
              flexShrink: 0,
              marginTop:  2,
              minWidth:   18,
              textAlign:  "right",
            }}
          >
            {i + 1}.
          </span>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.65 }}>
              {topic.concept}
            </span>
            {topic.yt && (
              <span
                style={{
                  fontSize:  11,
                  color:     "#60a5fa",
                  lineHeight: 1.5,
                  fontStyle: "italic",
                }}
              >
                {topic.yt}
              </span>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

// ── Java: concept + optional YT hint + optional trap warning ──────────────────
function JavaTopicList({ topics }: { topics: JavaLearnTopic[] }) {
  return (
    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
      {topics.map((topic, i) => (
        <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
          <span
            style={{
              fontSize:   11,
              color:      "var(--text-ghost)",
              fontFamily: "var(--font-mono)",
              flexShrink: 0,
              marginTop:  3,
              minWidth:   18,
              textAlign:  "right",
            }}
          >
            {i + 1}.
          </span>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.65 }}>
              {topic.concept}
            </span>
            {topic.yt && (
              <span
                style={{
                  fontSize:  11,
                  color:     "#60a5fa",
                  lineHeight: 1.5,
                  fontStyle: "italic",
                }}
              >
                {topic.yt}
              </span>
            )}
            {topic.trap && (
              <div
                style={{
                  fontSize:     11,
                  color:        "#f87171",
                  lineHeight:   1.5,
                  background:   "#f8717110",
                  border:       "1px solid #f8717130",
                  borderRadius: "var(--radius-sm)",
                  padding:      "5px 8px",
                  marginTop:    2,
                }}
              >
                <span style={{ fontWeight: 600, marginRight: 4 }}>Java trap:</span>
                {topic.trap}
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}