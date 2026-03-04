"use client";

import { useState } from "react";
import PHASES from "@/data/problems";
import { useProgress } from "@/hooks/useProgress";
import { Lang } from "@/types";

import Header      from "@/components/Header";
import PhaseNav    from "@/components/PhaseNav";
import PhaseCard   from "@/components/PhaseCard";
import ResetModal  from "@/components/ResetModal";

const TOTAL_PROBLEMS = PHASES.flatMap(ph =>
  ph.sections.flatMap(s => s.patterns.flatMap(g => g.problems))
).length;

export default function Page() {
  const {
    lang,
    activePhase,
    totalSolved,
    isSolved,
    getNote,
    toggleSolved,
    setNote,
    setLang,
    setActivePhase,
    resetAll,
  } = useProgress();

  const [showReset, setShowReset] = useState(false);

  function handlePhaseSelect(phaseId: number) {
    setActivePhase(activePhase === phaseId ? 0 : phaseId);
  }

  function handleLangChange(l: Lang) {
    setLang(l);
  }

  function handleConfirmReset() {
    resetAll();
    setShowReset(false);
  }

  return (
    <>
      <Header
        totalSolved={totalSolved}
        totalProblems={TOTAL_PROBLEMS}
        lang={lang}
        onLangChange={handleLangChange}
        onResetClick={() => setShowReset(true)}
      />

      <main
        style={{
          maxWidth: "var(--content-width)",
          margin:   "0 auto",
          padding:  "24px 24px 80px",
        }}
      >
        {/* Two-column layout on wide screens */}
        <div
          style={{
            display:             "grid",
            gridTemplateColumns: "200px 1fr",
            gap:                 24,
            alignItems:          "start",
          }}
        >
          {/* Left — sticky phase nav */}
          <div
            style={{
              position:  "sticky",
              top:       80,
              alignSelf: "start",
            }}
          >
            <div
              style={{
                fontSize:      10,
                fontWeight:    600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color:         "var(--text-ghost)",
                fontFamily:    "var(--font-mono)",
                marginBottom:  8,
                paddingLeft:   2,
              }}
            >
              Phases
            </div>
            <PhaseNav
              phases={PHASES}
              activePhase={activePhase}
              isSolved={isSolved}
              onSelect={handlePhaseSelect}
              vertical
            />
          </div>

          {/* Right — phase cards */}
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {PHASES.map(phase => (
                <PhaseCard
                  key={phase.id}
                  phase={phase}
                  lang={lang}
                  active={activePhase === phase.id}
                  isSolved={isSolved}
                  getNote={getNote}
                  onToggle={toggleSolved}
                  onSaveNote={setNote}
                  onActivate={() => handlePhaseSelect(phase.id)}
                />
              ))}
            </div>

            {/* footer */}
            <div
              style={{
                marginTop:  48,
                paddingTop: 20,
                borderTop:  "1px solid var(--border-subtle)",
                textAlign:  "center",
                fontSize:   11,
                color:      "var(--text-faint)",
                fontFamily: "var(--font-mono)",
                lineHeight: 1.8,
              }}
            >
              <div>{TOTAL_PROBLEMS} problems · 13 phases · progress saved locally</div>
              <div style={{ marginTop: 4 }}>built for focused, structured DSA prep</div>
            </div>
          </div>
        </div>
      </main>

      {showReset && (
        <ResetModal
          onConfirm={handleConfirmReset}
          onCancel={() => setShowReset(false)}
        />
      )}
    </>
  );
}
