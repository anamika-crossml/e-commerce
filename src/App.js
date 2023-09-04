import './App.css';
import Home from './Pages/Home';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from './components/Header';
import Nav from './components/Nav';
import Shop from './Pages/Shop';
import Women from './Pages/Women';
import Men from './Pages/Men';
import Blog from './Pages/Blog';
import DetailPage1 from './DetailPage/DetailPage1';
import DetailPage2 from './DetailPage/DetailPage2';
import DetailPage3 from './DetailPage/DetailPage3';
import DetailPage4 from './DetailPage/DetailPage4';
import DetailPage5 from './DetailPage/DetailPage5';
import QuickView from './DetailPage/QuckView';





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
          <Route path="/detailpage1" element={<DetailPage1 />} />
          <Route path="/detailpage2" element={<DetailPage2 />} />
          <Route path="/detailpage3" element={<DetailPage3 />} />
          <Route path="/detailpage4" element={<DetailPage4 />} />
          <Route path="/detailpage5" element={<DetailPage5 />} />
          <Route path="/quickview" element={<QuickView />} />
          

     
        </Routes>
      </Router>
  );
}

export default App;
