// ─── Language options for "Learn Before" panels ───────────────────────────────
export type Lang = "py" | "ja" | "cp";

export const LANG_LABELS: Record<Lang, string> = {
  py: "Python",
  ja: "Java",
  cp: "C++",
};

// ─── Difficulty ────────────────────────────────────────────────────────────────
export type Difficulty = "Easy" | "Medium" | "Hard";

export const DIFF_COLOR: Record<Difficulty, string> = {
  Easy:   "#4ade80",
  Medium: "#facc15",
  Hard:   "#f87171",
};

export const DIFF_BG: Record<Difficulty, string> = {
  Easy:   "#4ade8015",
  Medium: "#facc1515",
  Hard:   "#f8717115",
};

// ─── A single LeetCode problem ─────────────────────────────────────────────────
export interface Problem {
  /** Sequential index across the whole roadmap (1–286) */
  id: number;

  /** LeetCode problem number */
  lc: number;

  /** Problem title (used to generate the LeetCode URL slug) */
  title: string;

  difficulty: Difficulty;

  /** Pattern/technique tag shown in the row */
  pattern: string;

  /** ★ High interview frequency — must-do */
  starred: boolean;
}

// ─── A named pattern group inside a section ───────────────────────────────────
export interface PatternGroup {
  name: string;
  problems: Problem[];
}

// ─── A section inside a phase ─────────────────────────────────────────────────
export interface Section {
  /** e.g. "s1", "s2" — used to look up LearnBefore content */
  id: string;
  title: string;
  patterns: PatternGroup[];
}

// ─── A phase ──────────────────────────────────────────────────────────────────
export interface Phase {
  id: number;           // 1–13
  title: string;        // "Phase 1"
  subtitle: string;     // "Arrays & Strings — Foundation"
  sections: Section[];
}

// ─── Per-problem user state ────────────────────────────────────────────────────
export interface ProblemState {
  solved: boolean;
  note: string;
}

// ─── Full persisted progress object (stored in localStorage) ──────────────────
export interface ProgressData {
  /** key = problem id (as string), value = ProblemState */
  problems: Record<string, ProblemState>;

  /** Currently selected language for Learn Before panels */
  lang: Lang;

  /** Currently expanded phase id (0 = none) */
  activePhase: number;
}

// ─── Default/empty progress ───────────────────────────────────────────────────
export const DEFAULT_PROGRESS: ProgressData = {
  problems: {},
  lang: "py",
  activePhase: 1,
};