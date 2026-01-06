function StatCard({ title, value, percentage, color }) {
  return (
    <div className="stat-card">
      <div className="stat-title">{title}</div>
      <div className="stat-value">{value}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '8px' }}>
        <div style={{ fontSize: '20px', fontWeight: '600', color }}>
          {percentage}%
        </div>
        <div className="progress-bar" style={{ flex: 1 }}>
          <div 
            className="progress-fill" 
            style={{ 
              width: `${percentage}%`, 
              background: color 
            }} 
          />
        </div>
      </div>
    </div>
  );
}

export default StatCard;