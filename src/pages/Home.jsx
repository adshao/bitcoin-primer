import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  const perspectives = [
    {
      title: '货币',
      icon: '💰',
      path: '/money',
      color: '#059669',
      description: '从法币到加密货币'
    },
    {
      title: '银行',
      icon: '🏦',
      path: '/banking',
      color: '#7C2D12',
      description: '金融系统的演化'
    },
    {
      title: '经济学',
      icon: '📊',
      path: '/economics',
      color: '#0891B2',
      description: '稀缺性与价值存储'
    },
    {
      title: '计算机科学',
      icon: '💻',
      path: '/computer-science',
      color: '#4F46E5',
      description: '密码学与分布式系统'
    },
    {
      title: '博弈论',
      icon: '🎯',
      path: '/game-theory',
      color: '#7C3AED',
      description: '激励机制与纳什均衡'
    },
    {
      title: '能源',
      icon: '⚡',
      path: '/energy',
      color: '#2563EB',
      description: '物理世界与数字价值'
    },
    {
      title: '政治',
      icon: '🏛️',
      path: '/politics',
      color: '#EA580C',
      description: '权力分配与去中心化'
    },
    {
      title: '哲学',
      icon: '🔮',
      path: '/philosophy',
      color: '#6366F1',
      description: '存在、自由与价值'
    },
    {
      title: '法律',
      icon: '⚖️',
      path: '/law',
      color: '#DC2626',
      description: '代码即法律的实践'
    }
  ]

  return (
    <div className="home">
      {/* 新设计的Hero部分 */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="grid-pattern"></div>
          <div className="gradient-orb gradient-orb-1"></div>
          <div className="gradient-orb gradient-orb-2"></div>
        </div>
        
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              探索技术与社会的交汇点
            </div>
            
            <h1 className="hero-title">
              <span className="title-line">通过<span className="highlight-bitcoin">比特币</span></span>
              <span className="title-line">理解社会运行机制</span>
            </h1>
            
            <p className="hero-subtitle">
              比特币不仅是技术创新，更是理解人类社会运行机制的窗口。
              通过九个不同视角，深入探索信任、价值、权力的本质。
            </p>
            
            <div className="hero-actions">
              <a href="#perspectives" className="btn-primary">
                了解更多
                <span className="btn-arrow">↓</span>
              </a>
              <Link to="/learning-path" className="btn-secondary">
                开始探索
                <span className="btn-icon">→</span>
              </Link>
            </div>
          </div>
          
          {/* 简化的知识网络可视化 */}
          <div className="hero-visual">
            <div className="network-container">
              <div className="network-center">
                <div className="bitcoin-node">
                  <span className="bitcoin-icon">₿</span>
                </div>
              </div>
              {perspectives.map((item, index) => {
                const angle = (index * 40 - 90) * (Math.PI / 180);
                const radius = 45;
                const x = 50 + radius * Math.cos(angle);
                const y = 50 + radius * Math.sin(angle);
                
                return (
                  <div 
                    key={item.path}
                    className="orbit-node"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      '--node-color': item.color
                    }}
                  >
                    <span className="orbit-icon">{item.icon}</span>
                    <div className="orbit-line"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 视角卡片部分 */}
      <section id="perspectives" className="perspectives-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-label">九个视角</span>
            <h2 className="section-title">多维度理解比特币</h2>
            <p className="section-description">
              从不同学科视角审视比特币，发现传统系统与去中心化系统的本质差异
            </p>
          </div>
          
          <div className="perspectives-grid">
            {perspectives.map((item, index) => (
              <Link 
                key={item.path} 
                to={item.path}
                className="perspective-card"
                style={{'--card-color': item.color}}
              >
                <div className="card-icon">
                  <span>{item.icon}</span>
                </div>
                <div className="card-content">
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-description">{item.description}</p>
                </div>
                <div className="card-arrow">→</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 核心洞察部分 */}
      <section className="insights-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-label">核心洞察</span>
            <h2 className="section-title">为什么这很重要？</h2>
          </div>
          
          <div className="insights-grid">
            <div className="insight-card">
              <div className="insight-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3>重新思考信任</h3>
              <p>理解如何在不依赖中心化机构的情况下建立信任体系</p>
            </div>
            
            <div className="insight-card">
              <div className="insight-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3>价值的本质</h3>
              <p>探索价值如何被创造、存储和转移，以及稀缺性的意义</p>
            </div>
            
            <div className="insight-card">
              <div className="insight-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3>权力的重构</h3>
              <p>见证技术如何改变权力分配，实现真正的去中心化治理</p>
            </div>
            
            <div className="insight-card">
              <div className="insight-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3>未来的货币</h3>
              <p>预见数字时代的金融基础设施和全球价值流转体系</p>
            </div>
          </div>
        </div>
      </section>

      {/* 引导部分 */}
      <section className="cta-section">
        <div className="section-container">
          <div className="cta-content">
            <h2 className="cta-title">准备好开始探索了吗？</h2>
            <p className="cta-description">
              选择一个你感兴趣的视角，开始你的比特币认知之旅
            </p>
            <div className="cta-actions">
              <Link to="/computer-science" className="btn-primary">
                从技术开始
                <span className="btn-arrow">→</span>
              </Link>
              <Link to="/economics" className="btn-outline">
                从经济开始
                <span className="btn-arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home