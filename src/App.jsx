import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './components/LanguageContext';
import WelcomePage from './components/WelcomePage.js';
import Activities from './components/Activities.js';
import BalloonIntro from './components/BalloonIntro.js';
import BalloonGame from './components/BalloonGame.js'; // Updated from BalloonDemo
import GameComplete from './components/GameComplete.js'; // Added

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