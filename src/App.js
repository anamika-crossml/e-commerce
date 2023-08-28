import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Portfolio from './Pages/Portfolio';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from './components/Header';
import Nav from './components/Nav';


function App() {
  return (
    <Router>
      <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Portfolio />} />
        </Routes>
      </Router>
  );
}

export default App;
