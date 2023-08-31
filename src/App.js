import './App.css';
import Home from './Pages/Home';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from './components/Header';
import Nav from './components/Nav';
import Shop from './Pages/Shop';
import Women from './Pages/Women';
import Men from './Pages/Men';
import Blog from './Pages/Blog';
// import DetailPage from './components/DetailPage';



function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/women" element={<Women />} />
          <Route path="/men" element={<Men />} />
          <Route path="/blog" element={<Blog />} />
          {/* <Route path='/detailepage' element={<DetailPage />} /> */}
        </Routes>
      </Router>
  );
}

export default App;
