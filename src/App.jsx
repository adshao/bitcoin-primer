import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { HelmetProvider } from 'react-helmet-async'
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
import Articles from './pages/Articles'
import Article from './pages/Article'
import BuyBitcoin from './pages/BuyBitcoin'
import About from './pages/About'
import './App.css'

function App() {
  const { i18n } = useTranslation()
  
  useEffect(() => {
    // Log detected language for debugging
    console.log('Browser language:', navigator.language)
    console.log('Detected language:', i18n.language)
    console.log('Available languages:', i18n.languages)
  }, [i18n])
  
  // Define routes for all pages
  const pageRoutes = (
    <>
      <Route index element={<Home />} />
      <Route path="computer-science" element={<ComputerScience />} />
      <Route path="economics" element={<Economics />} />
      <Route path="game-theory" element={<GameTheory />} />
      <Route path="politics" element={<Politics />} />
      <Route path="money" element={<Money />} />
      <Route path="banking" element={<Banking />} />
      <Route path="law" element={<Law />} />
      <Route path="philosophy" element={<Philosophy />} />
      <Route path="energy" element={<Energy />} />
      <Route path="learning-path" element={<LearningPath />} />
      <Route path="study-guide" element={<StudyGuide />} />
      <Route path="articles" element={<Articles />} />
      <Route path="resources" element={<Resources />} />
      <Route path="buy-bitcoin" element={<BuyBitcoin />} />
      <Route path="about" element={<About />} />
      
      {/* Article route */}
      <Route path="articles/:articleSlug" element={<Article />} />
    </>
  )
  
  return (
    <HelmetProvider>
      <Router>
        <Layout>
          <Routes>
            {/* English routes (no prefix) */}
            {pageRoutes}
            
            {/* Chinese routes (with /zh prefix) */}
            <Route path="/zh/*" element={
              <Routes>
                {pageRoutes}
              </Routes>
            } />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  )
}

export default App