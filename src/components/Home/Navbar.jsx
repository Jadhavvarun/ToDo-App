import React, { useState, useEffect } from 'react';

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
          <a href="#" className={`${hasScrolled ? 'text-black' : 'text-white'} hover:text-gray-300`}>Home</a>
          <a href="#" className={`${hasScrolled ? 'text-black' : 'text-white'} hover:text-gray-300`}>About</a>
          <a href="#" className={`${hasScrolled ? 'text-black' : 'text-white'} hover:text-gray-300`}>Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
