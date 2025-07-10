import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './components/LanguageContext';
import WelcomePage from './components/WelcomePage';
import Activities from './components/Activities';
import BalloonIntro from './components/BalloonIntro';
import BalloonGame from './components/BalloonGame';
import BalloonDemo from './components/BalloonDemo';
import BalloonActivityEnd from './components/BalloonActivityEnd';

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
            <Route path="/balloon" element={<BalloonGame />} />
            <Route path="/balloon-activity-end" element={<BalloonActivityEnd />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;