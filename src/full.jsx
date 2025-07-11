import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './components/LanguageContext';

import WelcomePage from './components/WelcomePage';
import Activities from './components/Activities';
import BalloonIntro from './components/BalloonIntro';
import BalloonGame from './components/BalloonGame';
import GameEnd from './components/GameEnd';
import DigitSymbolTest from './components/DigitSymbolTest';
import GoNoGoTask from './components/GoNoGoTask';
import IowaGamblingTask from './components/IowaGamblingTask';
import MentalRotation from './components/MentalRotation';
import NBackTask from './components/NBackTask';

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
            <Route path="/game-end" element={<GameEnd />} />
            <Route path="/digit-symbol" element={<DigitSymbolTest />} />
            <Route path="/go-no-go" element={<GoNoGoTask />} />
            <Route path="/iowa-gambling" element={<IowaGamblingTask />} />
            <Route path="/mental-rotation" element={<MentalRotation />} />
            <Route path="/n-back" element={<NBackTask />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;