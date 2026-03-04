"use client";

interface ResetModalProps {
  onConfirm: () => void;
  onCancel:  () => void;
}

export default function ResetModal({ onConfirm, onCancel }: ResetModalProps) {
  return (
    // ── backdrop ────────────────────────────────────────────────────────────
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="reset-title"
      onClick={onCancel}
      style={{
        position:       "fixed",
        inset:          0,
        background:     "rgba(0, 0, 0, 0.75)",
        display:        "flex",
        alignItems:     "center",
        justifyContent: "center",
        zIndex:         1000,
      }}
    >
      {/* ── dialog box — stop clicks bubbling to backdrop ───────────────── */}
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background:   "var(--bg-elevated)",
          border:       "1px solid var(--border-default)",
          borderRadius: "var(--radius-lg)",
          padding:      "32px",
          width:        "100%",
          maxWidth:     "360px",
          textAlign:    "center",
        }}
      >
        {/* icon */}
        <div style={{ fontSize: 28, marginBottom: 12 }}>⚠️</div>

        {/* title */}
        <h2
          id="reset-title"
          style={{
            fontSize:     15,
            fontWeight:   600,
            color:        "var(--text-primary)",
            marginBottom: 8,
          }}
        >
          Reset all progress?
        </h2>

        {/* description */}
        <p
          style={{
            fontSize:     13,
            color:        "var(--text-dim)",
            lineHeight:   1.6,
            marginBottom: 28,
          }}
        >
          This will permanently clear all solved problems and notes.
          <br />
          This action cannot be undone.
        </p>

        {/* buttons */}
        <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
          <button
            onClick={onCancel}
            style={{
              padding:      "9px 22px",
              borderRadius: "var(--radius-md)",
              border:       "1px solid var(--border-default)",
              background:   "transparent",
              color:        "var(--text-secondary)",
              fontSize:     13,
              fontWeight:   500,
              cursor:       "pointer",
              transition:   "all 0.15s ease",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background    = "var(--bg-hover)";
              e.currentTarget.style.borderColor   = "var(--border-strong)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background    = "transparent";
              e.currentTarget.style.borderColor   = "var(--border-default)";
            }}
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            style={{
              padding:      "9px 22px",
              borderRadius: "var(--radius-md)",
              border:       "none",
              background:   "var(--clr-hard)",
              color:        "#fff",
              fontSize:     13,
              fontWeight:   600,
              cursor:       "pointer",
              transition:   "opacity 0.15s ease",
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = "0.85"; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = "1"; }}
          >
            Yes, reset
          </button>
        </div>
      </div>
    </div>
  );
}