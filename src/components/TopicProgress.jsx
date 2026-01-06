function TopicProgress({ topic, done, total, isActive = false, onClick, order }) {
  const percentage = Math.round((done / total) * 100);

  return (
    <div 
      className="stat-card"
      style={{ 
        minWidth: '120px',
        flex: '1',
        cursor: 'pointer',
        borderColor: isActive ? 'var(--accent-blue)' : 'var(--border-light)'
      }}
      onClick={onClick}
    >
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <span className="order-indicator">{order}</span>
        <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{topic}</div>
      </div>
      <div style={{ fontWeight: '500', fontSize: '14px', marginBottom: '8px' }}>
        {done}/{total}
      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
}

export default TopicProgress;