import { useState, useEffect } from 'react'
import { questions } from './data/questions'
import ThemeToggle from './components/ThemeToggle'
import DifficultyBadge from './components/DifficultyBadge'
import ProgressRing from './components/ProgressRing'
import StatCard from './components/StatCard'
import TopicProgress from './components/TopicProgress'

// Helper function to load from localStorage
const loadFromStorage = () => {
  try {
    const saved = localStorage.getItem('dsaTrackerData')
    if (saved) {
      return JSON.parse(saved)
    }
  } catch (error) {
    console.error('Error loading from localStorage:', error)
  }
  return null
}

// Helper function to save to localStorage
const saveToStorage = (data) => {
  try {
    localStorage.setItem('dsaTrackerData', JSON.stringify(data))
  } catch (error) {
    console.error('Error saving to localStorage:', error)
  }
}

// Define the logical DSA learning order
const TOPIC_ORDER = [
  // Basic Data Structures
  'Arrays',
  'Matrix',
  'Strings',
  
  // Linear Data Structures
  'Linked Lists',
  'Stacks & Queues',
  'Heaps',
  
  // Trees
  'Binary Trees',
  'Trees',
  'Tries',
  
  // Advanced Data Structures
  'Segment Trees',
  
  // Algorithms
  'Binary Search',
  'Bit Manipulation',
  'Math',
  'Backtracking',
  'Greedy',
  'Dynamic Programming',
  'Graphs'
];

function App() {
  // Load initial data from localStorage or use default
  const [allQuestions, setAllQuestions] = useState(() => {
    const saved = loadFromStorage()
    if (saved && saved.questions) {
      const savedQuestionsMap = new Map(saved.questions.map(q => [q.id, q]))
      return questions.map(q => ({
        ...q,
        ...(savedQuestionsMap.get(q.id) || {})
      }))
    }
    return questions
  })

  const [search, setSearch] = useState('')
  const [difficultyFilter, setDifficultyFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')
  const [topicFilter, setTopicFilter] = useState('all')
  const [expandedTopics, setExpandedTopics] = useState({})
  const [showStats, setShowStats] = useState(false)

  // Save to localStorage whenever allQuestions changes
  useEffect(() => {
    saveToStorage({ questions: allQuestions })
  }, [allQuestions])

  // Initialize expanded topics
  useEffect(() => {
    const initialExpanded = {}
    TOPIC_ORDER.forEach(topic => {
      if (allQuestions.some(q => q.topic === topic)) {
        initialExpanded[topic] = true
      }
    })
    setExpandedTopics(initialExpanded)
  }, [allQuestions])

  // Group questions by topic and then by difficulty
  const groupedQuestions = {}
  
  allQuestions.forEach(q => {
    if (!groupedQuestions[q.topic]) {
      groupedQuestions[q.topic] = { easy: [], medium: [], hard: [] }
    }
    groupedQuestions[q.topic][q.difficulty].push(q)
  })

  // Sort questions within each difficulty
  Object.keys(groupedQuestions).forEach(topic => {
    ['easy', 'medium', 'hard'].forEach(difficulty => {
      groupedQuestions[topic][difficulty].sort((a, b) => a.number - b.number)
    })
  })

  // Get all topics in the defined order, filter out topics with no questions
  const allTopics = TOPIC_ORDER.filter(topic => 
    allQuestions.some(q => q.topic === topic)
  )

  const toggleStatus = (id) => {
    setAllQuestions(prev => prev.map(q => 
      q.id === id ? { ...q, status: q.status === 'done' ? 'todo' : 'done' } : q
    ))
  }

  const toggleBookmark = (id) => {
    setAllQuestions(prev => prev.map(q => 
      q.id === id ? { ...q, bookmarked: !q.bookmarked } : q
    ))
  }

  const toggleTopic = (topic) => {
    setExpandedTopics(prev => ({
      ...prev,
      [topic]: !prev[topic]
    }))
  }

  const markAllInTopic = (topic, status) => {
    setAllQuestions(prev => prev.map(q => 
      q.topic === topic ? { ...q, status: status } : q
    ))
  }

  const resetProgress = () => {
    if (window.confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
      setAllQuestions(prev => prev.map(q => ({ ...q, status: 'todo', bookmarked: false })))
    }
  }

  const exportProgress = () => {
    const data = {
      questions: allQuestions,
      exportDate: new Date().toISOString(),
      stats: getStats()
    }
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `dsa-tracker-progress-${new Date().toISOString().split('T')[0]}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const importProgress = (event) => {
    const file = event.target.files[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result)
        if (data.questions) {
          setAllQuestions(data.questions)
          alert('Progress imported successfully!')
        } else {
          alert('Invalid file format')
        }
      } catch (error) {
        alert('Error parsing file')
      }
    }
    reader.readAsText(file)
  }

  const getStats = () => {
    const total = allQuestions.length
    const done = allQuestions.filter(q => q.status === 'done').length
    const bookmarked = allQuestions.filter(q => q.bookmarked).length
    const easyTotal = allQuestions.filter(q => q.difficulty === 'easy').length
    const easyDone = allQuestions.filter(q => q.difficulty === 'easy' && q.status === 'done').length
    const mediumTotal = allQuestions.filter(q => q.difficulty === 'medium').length
    const mediumDone = allQuestions.filter(q => q.difficulty === 'medium' && q.status === 'done').length
    const hardTotal = allQuestions.filter(q => q.difficulty === 'hard').length
    const hardDone = allQuestions.filter(q => q.difficulty === 'hard' && q.status === 'done').length

    const topicStats = {}
    allTopics.forEach((topic, index) => {
      const topicQuestions = allQuestions.filter(q => q.topic === topic)
      const topicDone = topicQuestions.filter(q => q.status === 'done').length
      topicStats[topic] = {
        total: topicQuestions.length,
        done: topicDone,
        percentage: Math.round((topicDone / topicQuestions.length) * 100),
        order: index + 1
      }
    })

    return {
      total, done, bookmarked,
      easyTotal, easyDone, easyPercentage: Math.round((easyDone / easyTotal) * 100) || 0,
      mediumTotal, mediumDone, mediumPercentage: Math.round((mediumDone / mediumTotal) * 100) || 0,
      hardTotal, hardDone, hardPercentage: Math.round((hardDone / hardTotal) * 100) || 0,
      overallPercentage: Math.round((done / total) * 100),
      topicStats
    }
  }

  const stats = getStats()

  // Filter topics based on search and filters
  const filteredTopics = allTopics.filter(topic => {
    // Filter by topic
    if (topicFilter !== 'all' && topic !== topicFilter) return false
    
    // Check if any question in this topic matches filters
    const topicQuestions = [
      ...(groupedQuestions[topic]?.easy || []),
      ...(groupedQuestions[topic]?.medium || []),
      ...(groupedQuestions[topic]?.hard || [])
    ].filter(q => {
      // Filter by difficulty
      if (difficultyFilter !== 'all' && q.difficulty !== difficultyFilter) return false
      
      // Filter by status
      if (statusFilter !== 'all' && q.status !== statusFilter) return false
      
      // Filter by search
      if (search && !q.name.toLowerCase().includes(search.toLowerCase()) && 
          !q.number.toString().includes(search) &&
          !q.patterns.some(p => p.toLowerCase().includes(search.toLowerCase()))) {
        return false
      }
      
      return true
    })
    
    return topicQuestions.length > 0
  })

  return (
    <div className="container">
      {/* Header */}
      <header style={{ padding: '24px 0', borderBottom: '1px solid var(--border-light)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '20px' }}>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <h1 style={{ fontSize: '28px', fontWeight: '600' }}>DSA Master Tracker</h1>
              <ThemeToggle />
            </div>
            <p className="text-secondary">
              Track your progress through {allQuestions.length} problems • {stats.done} solved • {stats.bookmarked} bookmarked
            </p>
          </div>
          
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button 
              className="btn"
              onClick={() => setShowStats(!showStats)}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="20" x2="18" y2="10"></line>
                <line x1="12" y1="20" x2="12" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="14"></line>
              </svg>
              {showStats ? 'Hide Stats' : 'Show Stats'}
            </button>
            
            <button 
              className="btn"
              onClick={exportProgress}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Export
            </button>
            
            <label className="btn" style={{ cursor: 'pointer' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 3v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"></path>
                <polyline points="17 12 12 7 7 12"></polyline>
                <line x1="12" y1="7" x2="12" y2="21"></line>
              </svg>
              Import
              <input 
                type="file" 
                accept=".json" 
                onChange={importProgress} 
                style={{ display: 'none' }}
              />
            </label>
          </div>
        </div>
      </header>

      <main style={{ marginTop: '32px' }}>
        {/* Stats Panel */}
        {showStats && (
          <div className="shadow-md rounded-lg" style={{ 
            padding: '24px', 
            marginBottom: '32px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-light)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h2 style={{ fontSize: '20px', fontWeight: '600' }}>Progress Statistics</h2>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button className="btn" onClick={() => {
                  if (window.confirm('Mark all problems as done?')) {
                    setAllQuestions(prev => prev.map(q => ({ ...q, status: 'done' })))
                  }
                }}>
                  Mark All Done
                </button>
                <button 
                  className="btn"
                  onClick={resetProgress}
                  style={{ background: 'var(--accent-red)', color: 'white', border: 'none' }}
                >
                  Reset All
                </button>
              </div>
            </div>
            
            <div className="stats-grid" style={{ marginBottom: '24px' }}>
              <StatCard 
                title="Overall Progress" 
                value={`${stats.done}/${stats.total}`}
                percentage={stats.overallPercentage}
                color="var(--accent-blue)"
              />
              
              <StatCard 
                title="Easy" 
                value={`${stats.easyDone}/${stats.easyTotal}`}
                percentage={stats.easyPercentage}
                color="var(--accent-green)"
              />
              
              <StatCard 
                title="Medium" 
                value={`${stats.mediumDone}/${stats.mediumTotal}`}
                percentage={stats.mediumPercentage}
                color="var(--accent-orange)"
              />
              
              <StatCard 
                title="Hard" 
                value={`${stats.hardDone}/${stats.hardTotal}`}
                percentage={stats.hardPercentage}
                color="var(--accent-red)"
              />
            </div>

            {/* Topic Progress */}
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '500', marginBottom: '16px', color: 'var(--text-secondary)' }}>
                Topic-wise Progress (Learning Order)
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {allTopics.map(topic => {
                  const topicStat = stats.topicStats[topic]
                  return (
                    <TopicProgress 
                      key={topic}
                      topic={topic}
                      done={topicStat.done}
                      total={topicStat.total}
                      isActive={topicFilter === topic}
                      onClick={() => setTopicFilter(topicFilter === topic ? 'all' : topic)}
                      order={topicStat.order}
                    />
                  )
                })}
              </div>
            </div>
          </div>
        )}

        {/* Controls */}
        <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', flexWrap: 'wrap' }}>
          <input
            type="text"
            placeholder="Search problems or topics..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input"
            style={{ flex: '1', minWidth: '200px' }}
          />
          
          <select 
            value={difficultyFilter} 
            onChange={(e) => setDifficultyFilter(e.target.value)}
            className="input"
            style={{ width: '150px' }}
          >
            <option value="all">All Difficulties</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>

          <select 
            value={statusFilter} 
            onChange={(e) => setStatusFilter(e.target.value)}
            className="input"
            style={{ width: '150px' }}
          >
            <option value="all">All Status</option>
            <option value="todo">Todo</option>
            <option value="done">Done</option>
          </select>

          <select 
            value={topicFilter} 
            onChange={(e) => setTopicFilter(e.target.value)}
            className="input"
            style={{ width: '150px' }}
          >
            <option value="all">All Topics</option>
            {allTopics.map(topic => (
              <option key={topic} value={topic}>{topic}</option>
            ))}
          </select>
        </div>

        <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', flexWrap: 'wrap' }}>
          <button 
            className="btn"
            onClick={() => setExpandedTopics(prev => {
              const newState = {}
              allTopics.forEach(topic => {
                newState[topic] = true
              })
              return newState
            })}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
            Expand All
          </button>

          <button 
            className="btn"
            onClick={() => setExpandedTopics(prev => {
              const newState = {}
              allTopics.forEach(topic => {
                newState[topic] = false
              })
              return newState
            })}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
            Collapse All
          </button>

          <div style={{ flex: 1 }} />
          
          <div className="text-secondary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '2px', background: 'var(--accent-green)' }} />
              <span style={{ fontSize: '12px' }}>Easy</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '2px', background: 'var(--accent-orange)' }} />
              <span style={{ fontSize: '12px' }}>Medium</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '2px', background: 'var(--accent-red)' }} />
              <span style={{ fontSize: '12px' }}>Hard</span>
            </div>
          </div>
        </div>

        {/* Topic-wise Sections */}
        {filteredTopics.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '8px' }}>No problems found</h3>
            <p className="text-secondary">Try adjusting your search or filters</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {filteredTopics.map(topic => {
              const topicQuestions = groupedQuestions[topic]
              const totalInTopic = 
                (topicQuestions?.easy?.length || 0) + 
                (topicQuestions?.medium?.length || 0) + 
                (topicQuestions?.hard?.length || 0)
              
              const doneInTopic = allQuestions
                .filter(q => q.topic === topic && q.status === 'done')
                .length

              return (
                <div key={topic} className="shadow-sm rounded-lg" style={{ 
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-light)',
                  overflow: 'hidden'
                }}>
                  {/* Topic Header */}
                  <div 
                    className="topic-header"
                    onClick={() => toggleTopic(topic)}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
                      <span style={{ fontSize: '18px', fontWeight: '500' }}>{topic}</span>
                      <span className="text-secondary" style={{ fontSize: '14px' }}>
                        {doneInTopic}/{totalInTopic} solved
                      </span>
                      <div style={{ 
                        width: '100px',
                        height: '4px',
                        background: 'var(--bg-tertiary)',
                        borderRadius: '2px',
                        overflow: 'hidden'
                      }}>
                        <div style={{ 
                          width: `${(doneInTopic/totalInTopic)*100}%`,
                          height: '100%',
                          background: 'var(--accent-blue)'
                        }} />
                      </div>
                      <div style={{ display: 'flex', gap: '8px', marginLeft: 'auto' }}>
                        <button 
                          className="btn"
                          style={{ padding: '4px 8px', fontSize: '12px' }}
                          onClick={(e) => {
                            e.stopPropagation()
                            markAllInTopic(topic, 'done')
                          }}
                        >
                          Mark Done
                        </button>
                        <button 
                          className="btn"
                          style={{ padding: '4px 8px', fontSize: '12px' }}
                          onClick={(e) => {
                            e.stopPropagation()
                            markAllInTopic(topic, 'todo')
                          }}
                        >
                          Mark Todo
                        </button>
                      </div>
                    </div>
                    <span style={{ fontSize: '18px' }}>
                      {expandedTopics[topic] ? '▼' : '▶'}
                    </span>
                  </div>

                  {/* Topic Content */}
                  {expandedTopics[topic] && topicQuestions && (
                    <div>
                      {/* Easy Problems */}
                      {topicQuestions.easy.length > 0 && (difficultyFilter === 'all' || difficultyFilter === 'easy') && (
                        <div>
                          <div className="difficulty-header easy">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <circle cx="12" cy="12" r="10"></circle>
                              <polyline points="12 16 16 12 12 8"></polyline>
                              <line x1="8" y1="12" x2="16" y2="12"></line>
                            </svg>
                            Easy • {topicQuestions.easy.length} problems
                          </div>
                          <div className="table-container">
                            <table className="table">
                              <tbody>
                                {topicQuestions.easy.map(q => (
                                  <QuestionRow 
                                    key={q.id}
                                    question={q}
                                    toggleStatus={toggleStatus}
                                    toggleBookmark={toggleBookmark}
                                    statusFilter={statusFilter}
                                  />
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}

                      {/* Medium Problems */}
                      {topicQuestions.medium.length > 0 && (difficultyFilter === 'all' || difficultyFilter === 'medium') && (
                        <div>
                          <div className="difficulty-header medium">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <circle cx="12" cy="12" r="10"></circle>
                              <line x1="8" y1="12" x2="16" y2="12"></line>
                            </svg>
                            Medium • {topicQuestions.medium.length} problems
                          </div>
                          <div className="table-container">
                            <table className="table">
                              <tbody>
                                {topicQuestions.medium.map(q => (
                                  <QuestionRow 
                                    key={q.id}
                                    question={q}
                                    toggleStatus={toggleStatus}
                                    toggleBookmark={toggleBookmark}
                                    statusFilter={statusFilter}
                                  />
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}

                      {/* Hard Problems */}
                      {topicQuestions.hard.length > 0 && (difficultyFilter === 'all' || difficultyFilter === 'hard') && (
                        <div>
                          <div className="difficulty-header hard">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <circle cx="12" cy="12" r="10"></circle>
                              <line x1="8" y1="15" x2="16" y2="15"></line>
                              <line x1="9" y1="9" x2="9.01" y2="9"></line>
                              <line x1="15" y1="9" x2="15.01" y2="9"></line>
                            </svg>
                            Hard • {topicQuestions.hard.length} problems
                          </div>
                          <div className="table-container">
                            <table className="table">
                              <tbody>
                                {topicQuestions.hard.map(q => (
                                  <QuestionRow 
                                    key={q.id}
                                    question={q}
                                    toggleStatus={toggleStatus}
                                    toggleBookmark={toggleBookmark}
                                    statusFilter={statusFilter}
                                  />
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}
      </main>

      <footer style={{ 
        marginTop: '48px', 
        padding: '24px 0', 
        borderTop: '1px solid var(--border-light)',
        color: 'var(--text-muted)',
        fontSize: '14px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p>Created with React • Data persists in localStorage • {new Date().getFullYear()}</p>
          <p>{allQuestions.length} problems • {stats.done} solved ({stats.overallPercentage}%)</p>
        </div>
      </footer>
    </div>
  )
}

// Question Row Component
function QuestionRow({ question, toggleStatus, toggleBookmark, statusFilter }) {
  if (statusFilter !== 'all' && question.status !== statusFilter) return null
  
  return (
    <tr className={question.status === 'done' ? 'status-done' : 'status-todo'}>
      <td style={{ width: '60px' }} className="text-secondary">{question.number}</td>
      <td style={{ width: '60px' }}>
        <input
          type="checkbox"
          checked={question.status === 'done'}
          onChange={() => toggleStatus(question.id)}
          className="checkbox"
          aria-label={`Mark "${question.name}" as ${question.status === 'done' ? 'todo' : 'done'}`}
        />
      </td>
      <td>
        <div style={{ fontWeight: '500' }}>{question.name}</div>
        <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
          {question.patterns.join(', ')}
        </div>
      </td>
      <td style={{ width: '120px' }}>
        <DifficultyBadge difficulty={question.difficulty} />
      </td>
      <td style={{ width: '120px' }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          <a 
            href={question.leetcode} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn"
            style={{ padding: '4px 8px', fontSize: '12px' }}
            aria-label={`Open LeetCode problem: ${question.name}`}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            LC
          </a>
          {question.gfg && (
            <a 
              href={question.gfg} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn"
              style={{ padding: '4px 8px', fontSize: '12px' }}
              aria-label={`Open GeeksforGeeks problem: ${question.name}`}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              GFG
            </a>
          )}
        </div>
      </td>
      <td style={{ width: '60px' }}>
        <button 
          onClick={() => toggleBookmark(question.id)}
          className={`star-btn ${question.bookmarked ? 'active' : ''}`}
          aria-label={`${question.bookmarked ? 'Remove' : 'Add'} bookmark for "${question.name}"`}
        >
          {question.bookmarked ? '★' : '☆'}
        </button>
      </td>
    </tr>
  )
}

export default App