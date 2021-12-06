import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.scss';
import Home from './components/home/Home.jsx';
import Join from './components/login/Join.jsx'
import Dashboard from './components/dashboard/dashboard.jsx'
function App() {
  return <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/join" element={<Join/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
    </Routes>
  </Router>
}

export default App;
