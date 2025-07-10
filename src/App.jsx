import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './components/LanguageContext';
import WelcomePage from './components/WelcomePage';
import Activities from './components/Activities';
import BalloonIntro from './components/BalloonIntro';
import BalloonDemo from './components/BalloonDemo'; // Corrected from BalloonGame
import GameComplete from './components/GameComplete'; // Added

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/intro" element={<BalloonIntro />} />
            <Route path="/demo" element={<BalloonDemo />} />
            <Route path="/balloon" element={<BalloonDemo />} />
            <Route path="/game-complete" element={<GameComplete />} /> {/* Added */}
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;