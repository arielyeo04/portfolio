import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';

function App() {

  return (
    <Router>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/portfolio" element={<div>Portfolio Page</div>} />
          <Route path="/experience" element={<div>Experience Page</div>} />
          <Route path="/contact" element={<div>Contact Page</div>} />
          <Route path="/portfolio/kda" element={<div>KDA Portfolio Page</div>} />
          <Route path="/portfolio/fareast/" element={<div>Fareast Portfolio Page</div>} />
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
    </Router>
  )
}

export default App
