import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import ComputerScience from './pages/ComputerScience'
import Economics from './pages/Economics'
import GameTheory from './pages/GameTheory'
import Politics from './pages/Politics'
import Money from './pages/Money'
import Banking from './pages/Banking'
import Law from './pages/Law'
import Philosophy from './pages/Philosophy'
import Energy from './pages/Energy'
import LearningPath from './pages/LearningPath'
import StudyGuide from './pages/StudyGuide'
import Resources from './pages/Resources'
import './App.css'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/computer-science" element={<ComputerScience />} />
          <Route path="/economics" element={<Economics />} />
          <Route path="/game-theory" element={<GameTheory />} />
          <Route path="/politics" element={<Politics />} />
          <Route path="/money" element={<Money />} />
          <Route path="/banking" element={<Banking />} />
          <Route path="/law" element={<Law />} />
          <Route path="/philosophy" element={<Philosophy />} />
          <Route path="/energy" element={<Energy />} />
          <Route path="/learning-path" element={<LearningPath />} />
          <Route path="/study-guide" element={<StudyGuide />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App