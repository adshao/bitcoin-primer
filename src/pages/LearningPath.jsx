import { Link } from 'react-router-dom'
import './LearningPath.css'

function LearningPath() {
  const learningStages = [
    {
      stage: 1,
      title: '经济基础',
      duration: '3 周',
      description: '理解货币的本质、银行体系和经济学原理',
      modules: [
        {
          topic: '货币',
          path: '/money',
          icon: '💰',
          focus: '理解货币的本质和演化',
          keyPoints: [
            '货币的起源和历史演变',
            '货币的四大功能：交换媒介、价值尺度、储藏手段、延期支付',
            '法币体系的形成和问题',
            '数字货币的出现背景'
          ],
          exercises: [
            '研究：追溯你所在国家货币的历史',
            '思考：为什么黄金曾经是货币？'
          ],
          estimatedTime: '1 周'
        },
        {
          topic: '银行',
          path: '/banking',
          icon: '🏦',
          focus: '理解传统银行体系和金融创新',
          keyPoints: [
            '部分准备金制度的运作',
            '中央银行的角色和货币政策',
            '金融危机的根源',
            '央行数字货币(CBDC)的发展'
          ],
          exercises: [
            '计算：如果准备金率是10%，银行系统能创造多少货币？',
            '研究：2008年金融危机的原因和影响'
          ],
          estimatedTime: '1 周'
        },
        {
          topic: '经济学',
          path: '/economics',
          icon: '📊',
          focus: '理解经济学原理和比特币的经济属性',
          keyPoints: [
            '供需关系和价格发现',
            '稀缺性与价值的关系',
            '通货膨胀vs通货紧缩的影响',
            '奥地利学派经济学观点'
          ],
          exercises: [
            '计算：如果年通胀率3%，10年后100元的购买力是多少？',
            '分析：比特币的通缩模型对经济的影响'
          ],
          estimatedTime: '1 周'
        }
      ]
    },
    {
      stage: 2,
      title: '技术原理',
      duration: '4 周',
      description: '深入理解比特币的技术实现和运行机制',
      modules: [
        {
          topic: '计算机科学',
          path: '/computer-science',
          icon: '💻',
          focus: '掌握密码学和分布式系统基础',
          keyPoints: [
            '哈希函数和数字签名的原理',
            '区块链数据结构',
            'P2P网络和分布式共识',
            '工作量证明机制'
          ],
          exercises: [
            '实践：使用在线工具生成比特币地址',
            '计算：如果网络算力是X，攻击成本是多少？',
            '编程（可选）：实现简单的区块链'
          ],
          estimatedTime: '2 周'
        },
        {
          topic: '博弈论',
          path: '/game-theory',
          icon: '🎯',
          focus: '理解激励机制和安全保障',
          keyPoints: [
            '囚徒困境和纳什均衡',
            '挖矿激励和经济安全',
            '51%攻击的成本分析',
            '分叉的博弈分析'
          ],
          exercises: [
            '分析：为什么理性矿工不会攻击网络？',
            '模拟：设计一个简单的激励机制'
          ],
          estimatedTime: '1 周'
        },
        {
          topic: '能源',
          path: '/energy',
          icon: '⚡',
          focus: '理解能源消耗的必要性',
          keyPoints: [
            '工作量证明与能源消耗',
            '能源作为价值锚定',
            '比特币挖矿的环境影响',
            '可再生能源的机遇'
          ],
          exercises: [
            '调研：比特币网络能耗vs传统银行系统',
            '思考：能源消耗是bug还是feature？'
          ],
          estimatedTime: '1 周'
        }
      ]
    },
    {
      stage: 3,
      title: '社会影响',
      duration: '3 周',
      description: '从社会制度和哲学角度理解比特币的深远影响',
      modules: [
        {
          topic: '政治',
          path: '/politics',
          icon: '🏛️',
          focus: '权力结构的变革',
          keyPoints: [
            '货币主权的挑战',
            '去中心化治理模式',
            '地缘政治影响',
            '个人主权vs国家主权'
          ],
          exercises: [
            '研究：萨尔瓦多采用比特币的影响',
            '辩论：去中心化是否真的可能？'
          ],
          estimatedTime: '1 周'
        },
        {
          topic: '哲学',
          path: '/philosophy',
          icon: '🔮',
          focus: '理解比特币的哲学意义',
          keyPoints: [
            '什么是价值？价值如何被创造和认可？',
            '数字世界中的真实性如何定义？',
            '个人主权和自由的哲学基础',
            '去中心化的深层含义'
          ],
          exercises: [
            '思考：如果没有中心化机构，社会如何运转？',
            '写下你对"信任"的理解，完成课程后再对比'
          ],
          estimatedTime: '1 周'
        },
        {
          topic: '法律',
          path: '/law',
          icon: '⚖️',
          focus: '代码即法律的含义',
          keyPoints: [
            '代码化规则vs人为规则',
            '监管挑战和合规要求',
            '产权定义的革新',
            '跨境法律问题'
          ],
          exercises: [
            '案例分析：研究一个比特币相关的法律案例',
            '对比：不同国家的监管政策'
          ],
          estimatedTime: '1 周'
        }
      ]
    }
  ]

  const milestones = [
    {
      week: '第1-3周',
      achievement: '掌握经济基础',
      checkpoint: '理解货币本质和金融体系'
    },
    {
      week: '第4-7周',
      achievement: '深入技术原理',
      checkpoint: '理解比特币的技术实现'
    },
    {
      week: '第8-10周',
      achievement: '分析社会影响',
      checkpoint: '理解比特币的社会意义'
    }
  ]

  return (
    <div className="learning-path">
      <section className="path-hero">
        <div className="path-hero-content">
          <h1 className="path-title">系统学习路径</h1>
          <p className="path-subtitle">
            从零开始，用10周时间建立对比特币的全面理解
          </p>
        </div>
      </section>

      <section className="path-stages">
        <div className="stages-container">
          <h2 className="stages-title">三个学习阶段</h2>
          
          {learningStages.map((stage, index) => (
            <div key={index} className="stage-section">
              <div className="stage-header">
                <div className="stage-number">阶段 {stage.stage}</div>
                <div className="stage-info">
                  <h3 className="stage-title">{stage.title}</h3>
                  <p className="stage-duration">建议时长：{stage.duration}</p>
                </div>
              </div>
              <p className="stage-description">{stage.description}</p>
              
              <div className="modules-grid">
                {stage.modules.map((module, idx) => (
                  <div key={idx} className="module-card">
                    <div className="module-header">
                      <span className="module-icon">{module.icon}</span>
                      <h4 className="module-title">{module.topic}</h4>
                      <span className="module-time">{module.estimatedTime}</span>
                    </div>
                    
                    <p className="module-focus">{module.focus}</p>
                    
                    <div className="module-content">
                      <h5>核心知识点：</h5>
                      <ul className="key-points">
                        {module.keyPoints.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                      
                      <h5>实践练习：</h5>
                      <ul className="exercises">
                        {module.exercises.map((exercise, i) => (
                          <li key={i}>{exercise}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link to={module.path} className="module-link">
                      进入学习 →
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="path-milestones">
        <div className="milestones-container">
          <h2 className="milestones-title">学习里程碑</h2>
          <div className="milestones-timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className="milestone-item">
                <div className="milestone-marker">
                  <span className="marker-number">{index + 1}</span>
                </div>
                <div className="milestone-content">
                  <span className="milestone-week">{milestone.week}</span>
                  <h4 className="milestone-achievement">{milestone.achievement}</h4>
                  <p className="milestone-checkpoint">
                    <span className="checkpoint-icon">✓</span>
                    {milestone.checkpoint}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="path-tips">
        <div className="tips-container">
          <h2 className="tips-title">学习建议</h2>
          <div className="tips-grid">
            <div className="tip-card">
              <span className="tip-icon">🎯</span>
              <h4>循序渐进</h4>
              <p>按照推荐顺序学习，每个阶段都为下一阶段打基础</p>
            </div>
            <div className="tip-card">
              <span className="tip-icon">📝</span>
              <h4>做好笔记</h4>
              <p>记录关键概念和自己的思考，定期回顾总结</p>
            </div>
            <div className="tip-card">
              <span className="tip-icon">🤝</span>
              <h4>参与社区</h4>
              <p>加入讨论组，与他人交流可以加深理解</p>
            </div>
            <div className="tip-card">
              <span className="tip-icon">🔄</span>
              <h4>实践验证</h4>
              <p>通过实际操作来验证理论知识，加深印象</p>
            </div>
          </div>
        </div>
      </section>

      <section className="path-navigation">
        <div className="nav-container">
          <Link to="/study-guide" className="nav-card">
            <span className="nav-icon">📖</span>
            <h3>自学指南</h3>
            <p>详细的学习方法和技巧</p>
            <span className="nav-arrow">→</span>
          </Link>
          <Link to="/resources" className="nav-card">
            <span className="nav-icon">📚</span>
            <h3>学习资源</h3>
            <p>精选的书籍、课程和工具</p>
            <span className="nav-arrow">→</span>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default LearningPath