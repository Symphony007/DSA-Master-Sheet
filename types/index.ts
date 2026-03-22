// ─── Language options ──────────────────────────────────────────────────────────
export type Lang = "py" | "ja";

export const LANG_LABELS: Record<Lang, string> = {
  py: "Python",
  ja: "Java",
};

// ─── Learn topic (Python/General) ───────────────────────────────────────────
export interface LearnTopic {
  concept: string;
  yt?: string | null;
}

// ─── Java learn-before topic (richer than plain string) ───────────────────────
export interface JavaLearnTopic extends LearnTopic {
  trap?: string | null; // Java-specific gotcha shown in red
}

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
  id:         number;
  lc:         number;
  title:      string;
  difficulty: Difficulty;
  pattern:    string;
  starred:    boolean;
}

// ─── A named pattern group inside a section ───────────────────────────────────
export interface PatternGroup {
  name:     string;
  problems: Problem[];
}

// ─── A section inside a phase ─────────────────────────────────────────────────
export interface Section {
  id:       string;
  title:    string;
  patterns: PatternGroup[];
}

// ─── A phase ──────────────────────────────────────────────────────────────────
export interface Phase {
  id:       number;
  title:    string;
  subtitle: string;
  sections: Section[];
  prepTime?: string;
  tip?:     string;
}

// ─── Per-problem user state ────────────────────────────────────────────────────
export interface ProblemState {
  solved: boolean;
  note:   string;
}

// ─── Full persisted progress object ───────────────────────────────────────────
export interface ProgressData {
  problems:    Record<string, ProblemState>;
  lang:        Lang;
  activePhase: number;
}

// ─── Default/empty progress ───────────────────────────────────────────────────
export const DEFAULT_PROGRESS: ProgressData = {
  problems:    {},
  lang:        "py",
  activePhase: 1,
};