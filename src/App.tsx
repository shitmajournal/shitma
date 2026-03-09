import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home'
import Recent from './pages/Recent'
// import Submit from './pages/Submit'
// import About from './pages/About'



// 主应用组件
const App: React.FC = () => {
  return (
    <BrowserRouter>
    <Header />
    <main className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recent" element={<Recent />} />
        <Route path="/submit" element={<Recent />} />
        <Route path="/about" element={<Recent />} />
      </Routes>
    </main>
      
      
    </BrowserRouter>
  );
};

export default App;