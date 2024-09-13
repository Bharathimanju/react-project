
import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './pages/Layout';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import Home from './pages/Home';
import Login from './pages/Login';
import Menu from './pages/Menu';
import About from './pages/About';

import { BrowserRouter, Route, Routes } from 'react-router-dom';  // Missing import fixed


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu/>}/>
          <Route path='about' element={<About/>}/>
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> {/* Fixed "NoPages" to "NoPage" */}
          <Route path="login" element={<Login />}/>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const r1 = ReactDOM.createRoot(document.getElementById('root'));
r1.render(<App />);
