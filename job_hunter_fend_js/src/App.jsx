import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.scss';
import Home from './components/home/Home';
import Join from './components/login/Join.jsx'
function App() {
  return <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/join" element={<Join/>} />
    </Routes>
  </Router>
}

export default App;
