import React from 'react';
import Navbar from './components/Home/Navbar';
import Banner from './components/Home/Banner';
import Footer from './components/Home/Footer';
import TodoList from './components/Home/TodoList';
import bannerImg from '../public/banner_img.png'; // Import your image file

function App() {
  return (
    <div>
      <div style={{ backgroundImage: `url(${bannerImg})`, backgroundSize: 'cover' }}>
        <Navbar />
        <Banner />
      </div>
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
