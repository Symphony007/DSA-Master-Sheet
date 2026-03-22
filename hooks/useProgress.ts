"use client";

import { useState, useEffect, useCallback } from "react";
import { ProgressData, DEFAULT_PROGRESS, Lang } from "@/types";

const STORAGE_KEY = "mydsa-progress-v1";

function loadProgress(): ProgressData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_PROGRESS;
    const parsed = JSON.parse(raw) as Partial<ProgressData>;
    return {
      problems:    parsed.problems    ?? {},
      lang:        parsed.lang        ?? "py",
      activePhase: parsed.activePhase ?? 1,
    };
  } catch {
    return DEFAULT_PROGRESS;
  }
}

function saveProgress(data: ProgressData): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    console.warn("MyDSA: could not save progress to localStorage.");
  }
}

export function useProgress() {
  // Always start with DEFAULT_PROGRESS so server and client render identically.
  // Loading from localStorage here would cause a hydration mismatch because
  // the server has no localStorage and renders DEFAULT_PROGRESS.
  const [progress, setProgress] = useState<ProgressData>(DEFAULT_PROGRESS);

  // After mount (client only), sync state from localStorage.
  // This is the correct Next.js pattern for localStorage — two renders,
  // but no hydration mismatch. The eslint rule is disabled here because
  // this is an intentional "sync from external store on mount" pattern,
  // which is one of the documented valid use cases for setState in an effect.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setProgress(loadProgress());
  }, []);

  // Persist to localStorage whenever progress changes.
  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  // ── actions ────────────────────────────────────────────────────────────────

  const toggleSolved = useCallback((problemId: number) => {
    setProgress(prev => ({
      ...prev,
      problems: {
        ...prev.problems,
        [problemId]: {
          solved: !prev.problems[problemId]?.solved,
          note:   prev.problems[problemId]?.note ?? "",
        },
      },
    }));
  }, []);

  const setNote = useCallback((problemId: number, note: string) => {
    setProgress(prev => ({
      ...prev,
      problems: {
        ...prev.problems,
        [problemId]: {
          solved: prev.problems[problemId]?.solved ?? false,
          note,
        },
      },
    }));
  }, []);

  const setLang = useCallback((lang: Lang) => {
    setProgress(prev => ({ ...prev, lang }));
  }, []);

  const setActivePhase = useCallback((phaseId: number) => {
    setProgress(prev => ({ ...prev, activePhase: phaseId }));
  }, []);

  const resetAll = useCallback(() => {
    const fresh = DEFAULT_PROGRESS;
    setProgress(fresh);
    saveProgress(fresh);
  }, []);

  // ── derived values ─────────────────────────────────────────────────────────

  const isSolved = useCallback(
    (problemId: number) => !!progress.problems[problemId]?.solved,
    [progress.problems]
  );

  const getNote = useCallback(
    (problemId: number) => progress.problems[problemId]?.note ?? "",
    [progress.problems]
  );

  const totalSolved = Object.values(progress.problems).filter(p => p.solved).length;

  return {
    lang:         progress.lang,
    activePhase:  progress.activePhase,
    totalSolved,
    isSolved,
    getNote,
    toggleSolved,
    setNote,
    setLang,
    setActivePhase,
    resetAll,
  };
}