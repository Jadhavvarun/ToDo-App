import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './routing/home';
import About from './routing/about';
import LogIn from './routing/login';
import ContactUs from './routing/contact';
import SignUp from './routing/register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </Router>
  )
}

export default App