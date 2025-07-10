import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './components/LanguageContext.jsx';
import WelcomePage from './components/WelcomePage.jsx';
import Activities from './components/Activities.jsx';
import BalloonIntro from './components/BalloonIntro.jsx';
import BalloonGame from './components/BalloonGame.jsx';
import GameComplete from './components/GameComplete.jsx';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/intro" element={<BalloonIntro />} />
            <Route path="/demo" element={<BalloonGame />} />
            <Route path="/balloon" element={<BalloonGame />} />
            <Route path="/game-complete" element={<GameComplete />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;