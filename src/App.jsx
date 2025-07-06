import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import Activities from './components/Activities';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/activities" element={<Activities />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
