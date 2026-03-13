import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Placeholder from './pages/Placeholder';
import Home from './pages/Home'
// import Recent from './pages/Recent'
import Submit from './pages/Submit'
// import About from './pages/About'



// 主应用组件
const App: React.FC = () => {
  return (
    <BrowserRouter>
    <Header />
    <main className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recent" element={<Placeholder />} />
        <Route path="/submit" element={<Submit />} />
        <Route path="/about" element={<Placeholder />} />
      </Routes>
    </main>
      
      
    </BrowserRouter>
  );
};

export default App;