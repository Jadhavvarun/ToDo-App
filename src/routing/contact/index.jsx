import React from 'react'
import Navbar from '../../components/Home/Navbar'
import Footer from '../../components/Home/Footer'
import Banner from '../../components/Home/Banner'
import Contact from '../../components/Contact/Contact'
import bannerImg from '../../../public/banner_img.png';

function ContactUs() {
    return (
        <div>
            <div style={{ backgroundImage: `url(${bannerImg})`, backgroundSize: 'cover' }}>
                <Navbar />
                <Banner />
            </div>
            <Contact />
            <Footer />
        </div>
    )
}

export default ContactUs