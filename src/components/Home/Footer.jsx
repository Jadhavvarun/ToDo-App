import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-blue-2 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between px-4">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-lg font-bold text-white">TaskPulse</p>
          <p className="text-sm text-white">A simple todo app built with React</p>
        </div>
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-lg font-bold text-white">Contact Us</p>
          <p className="text-sm text-white">Email: info@yourtodoapp.com</p>
          <p className="text-sm text-white">Phone: +123 456 7890</p>
        </div>
        <div className="text-center md:text-left">
          <p className="text-lg font-bold text-white">Follow Us</p>
          <div className="flex justify-center md:justify-start">
            <a href="#" className="mr-4">
              <FaFacebook size={25} color="#1877f2" />
            </a>
            <a href="#" className="mr-4">
              <FaTwitter size={25} color="#1DA1F2" />
            </a>
            <a href="#" className="mr-4">
              <FaInstagram size={25} color="#E4405F" />
            </a>
            <a href="#">
              <FaYoutube size={25} color="#FF0000" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <p className="text-sm text-white">© {new Date().getFullYear()} Your ToDo App. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
