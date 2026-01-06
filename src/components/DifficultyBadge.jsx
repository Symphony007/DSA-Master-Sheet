function DifficultyBadge({ difficulty }) {
  const icons = {
    easy: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 16 16 12 12 8"></polyline>
        <line x1="8" y1="12" x2="16" y2="12"></line>
      </svg>
    ),
    medium: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="8" y1="12" x2="16" y2="12"></line>
      </svg>
    ),
    hard: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="8" y1="15" x2="16" y2="15"></line>
        <line x1="9" y1="9" x2="9.01" y2="9"></line>
        <line x1="15" y1="9" x2="15.01" y2="9"></line>
      </svg>
    )
  };

  const colors = {
    easy: { bg: 'rgba(52, 168, 83, 0.1)', text: 'var(--accent-green)', border: 'rgba(52, 168, 83, 0.3)' },
    medium: { bg: 'rgba(251, 188, 4, 0.1)', text: 'var(--accent-orange)', border: 'rgba(251, 188, 4, 0.3)' },
    hard: { bg: 'rgba(234, 67, 53, 0.1)', text: 'var(--accent-red)', border: 'rgba(234, 67, 53, 0.3)' }
  };

  const color = colors[difficulty] || colors.medium;

  return (
    <span 
      style={{
        padding: '4px 8px',
        borderRadius: '12px',
        fontSize: '12px',
        fontWeight: '500',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        background: color.bg,
        color: color.text,
        border: `1px solid ${color.border}`
      }}
    >
      {icons[difficulty]}
      {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
    </span>
  );
}

export default DifficultyBadge;