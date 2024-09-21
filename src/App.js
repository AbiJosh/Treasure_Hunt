import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Round1 from './components/Round_1';
import Timer1 from './components/Timer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/round-1" element={<Round1 />} />
        <Route path="/timer" element={<Timer1/>}/>
      </Routes>
    </Router>
  );
}

export default App;
