import React from 'react'
import Navbar from '../../components/Home/Navbar'
import TodoItem from '../../components/Home/TodoItem'
import Footer from '../../components/Home/Footer'
import Banner from '../../components/Home/Banner'
import bannerImg from '../../../public/banner_img.png';

function About() {
    return (
        <div>
            <div style={{ backgroundImage: `url(${bannerImg})`, backgroundSize: 'cover' }}>
                <Navbar />
                <Banner />
            </div>
            <TodoItem />
            <Footer />
        </div>
    )
}

export default About