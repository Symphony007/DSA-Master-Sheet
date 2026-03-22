"use client";

import Image from "next/image";
import { Lang, LANG_LABELS } from "@/types";

interface HeaderProps {
  totalSolved:   number;
  totalProblems: number;
  lang:          Lang;
  onLangChange:  (lang: Lang) => void;
  onResetClick:  () => void;
}

export default function Header({
  totalSolved,
  totalProblems,
  lang,
  onLangChange,
  onResetClick,
}: HeaderProps) {
  const pct      = Math.round((totalSolved / totalProblems) * 100);
  const complete = totalSolved === totalProblems;

  return (
    <header
      style={{
        position:     "sticky",
        top:          0,
        zIndex:       100,
        background:   "var(--bg-base)",
        borderBottom: "1px solid var(--border-subtle)",
        padding:      "12px 24px",
      }}
    >
      <div style={{ maxWidth: "var(--content-width)", margin: "0 auto" }}>

        {/* ── top row ───────────────────────────────────────────────────── */}
        <div
          style={{
            display:        "flex",
            alignItems:     "center",
            justifyContent: "space-between",
            marginBottom:   10,
            gap:            16,
          }}
        >
          {/* left — logo + wordmark + stats */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, minWidth: 0 }}>
            <Image
              src="/logo.png"
              alt="MyDSA logo"
              width={36}
              height={36}
              style={{ objectFit: "contain", flexShrink: 0 }}
              priority
            />
            <div style={{ minWidth: 0 }}>
              <div
                style={{
                  fontSize:      20,
                  fontWeight:    700,
                  letterSpacing: "-0.04em",
                  color:         "var(--text-primary)",
                  lineHeight:    1,
                }}
              >
                MyDSA
              </div>
              <div
                style={{
                  fontSize:           11,
                  color:              "var(--text-dim)",
                  marginTop:          4,
                  fontFamily:         "var(--font-mono)",
                  fontVariantNumeric: "tabular-nums",
                  display:            "flex",
                  alignItems:         "center",
                  gap:                6,
                  flexWrap:           "wrap",
                }}
              >
                <span>
                  <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>
                    {totalSolved}
                  </span>
                  <span style={{ color: "var(--text-ghost)" }}>/{totalProblems}</span>
                </span>
                <span style={{ color: "var(--border-default)" }}>·</span>
                <span style={{ color: "var(--text-faint)" }}>{pct}% complete</span>
                {complete && (
                  <span style={{ color: "var(--clr-done)" }}>🎉 All done!</span>
                )}
              </div>
            </div>
          </div>

          {/* right — lang switcher + reset */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>

            {/* language switcher — Python / Java */}
            <div
              style={{
                display:      "flex",
                gap:          2,
                background:   "var(--bg-surface)",
                border:       "1px solid var(--border-dim)",
                borderRadius: "var(--radius-md)",
                padding:      3,
              }}
            >
              {(Object.entries(LANG_LABELS) as [Lang, string][]).map(([key, label]) => {
                const isActive = lang === key;
                return (
                  <button
                    key={key}
                    onClick={() => onLangChange(key)}
                    style={{
                      padding:      "5px 13px",
                      borderRadius: "var(--radius-sm)",
                      border:       "none",
                      cursor:       "pointer",
                      fontSize:     12,
                      fontWeight:   600,
                      background:   isActive ? "var(--bg-active)" : "transparent",
                      color:        isActive ? "var(--text-primary)" : "var(--text-faint)",
                      transition:   "all 0.15s ease",
                    }}
                    onMouseEnter={e => {
                      if (!isActive) e.currentTarget.style.color = "var(--text-secondary)";
                    }}
                    onMouseLeave={e => {
                      if (!isActive) e.currentTarget.style.color = "var(--text-faint)";
                    }}
                  >
                    {label}
                  </button>
                );
              })}
            </div>

            {/* reset button */}
            <button
              onClick={onResetClick}
              title="Reset all progress"
              style={{
                background:   "transparent",
                border:       "1px solid var(--border-dim)",
                borderRadius: "var(--radius-md)",
                cursor:       "pointer",
                padding:      "6px 12px",
                fontSize:     12,
                color:        "var(--text-faint)",
                transition:   "all 0.15s ease",
                fontFamily:   "var(--font-sans)",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "var(--border-strong)";
                e.currentTarget.style.color       = "var(--text-secondary)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "var(--border-dim)";
                e.currentTarget.style.color       = "var(--text-faint)";
              }}
            >
              ↺ Reset
            </button>
          </div>
        </div>

        {/* ── overall progress bar ──────────────────────────────────────── */}
        <div className="progress-track">
          <div
            className={`progress-fill ${complete ? "progress-fill--complete" : "progress-fill--active"}`}
            style={{ width: `${pct}%` }}
          />
        </div>

      </div>
    </header>
  );
}