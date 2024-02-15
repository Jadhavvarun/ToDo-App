import React from 'react'
import Navbar from '../../components/Home/Navbar'
import Footer from '../../components/Home/Footer'
import Banner from '../../components/Home/Banner'
import Register from '../../components/Login/Register'
import bannerImg from '../../../public/banner_img.png';

function SignUp() {
  return (
    <div>
      <div style={{ backgroundImage: `url(${bannerImg})`, backgroundSize: 'cover' }}>
        <Navbar />
        <Banner />
      </div>
      <Register />
      <Footer />
    </div>
  )
}

export default SignUp