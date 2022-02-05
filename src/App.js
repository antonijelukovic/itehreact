import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pocetna from './components/Pocetna'
import Join from './components/Join'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Pocetna />} />
          <Route path="/join" element={<Join />} />
        </Routes>
      </Router >
    </div>
  );
}

export default App;
