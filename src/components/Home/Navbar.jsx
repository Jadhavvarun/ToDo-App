import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`sticky top-0 z-20 ${hasScrolled ? 'bg-white shadow-xl' : 'bg-transparent'}`}>
      <div className="h-20 px-10 flex justify-between items-center">
        <div className={`${hasScrolled ? 'text-black' : 'text-white'} text-2xl font-bold`}>TaskPulse</div>
        {/* You can add additional elements to the right side of the navbar */}
        <div className="flex space-x-4">
          <Link to="/" className={`${hasScrolled ? 'text-black' : 'text-white'} hover:text-gray-300`}>Home</Link>
          <Link to="/about" className={`${hasScrolled ? 'text-black' : 'text-white'} hover:text-gray-300`}>About</Link>
          <Link to="/contact" className={`${hasScrolled ? 'text-black' : 'text-white'} hover:text-gray-300`}>Contact</Link>
          <Link to="/login" className={`${hasScrolled ? 'text-black' : 'text-white'} hover:text-gray-300`}>Log In</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
