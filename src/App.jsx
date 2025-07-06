import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import Activities from './components/Activities';
import Balloon from './pages/Balloon'; // ✅ import Balloon

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/balloon" element={<Balloon />} /> {/* ✅ new route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
