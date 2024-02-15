import React from 'react';
import Navbar from '../../components/Home/Navbar';
import Banner from '../../components/Home/Banner';
import Footer from '../../components/Home/Footer';
import Signin from '../../components/Login/Login';
import bannerImg from '../../../public/banner_img.png'; // Import your image file

function LogIn() {
  return (
    <div>
      <div style={{ backgroundImage: `url(${bannerImg})`, backgroundSize: 'cover' }}>
        <Navbar />
        <Banner />
      </div>
      <Signin />
      <Footer />
    </div>
  );
}

export default LogIn;
