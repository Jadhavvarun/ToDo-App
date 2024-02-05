import React from 'react';

function Navbar() {
  return (
    <nav className="bg-blue-1 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">TODO</div>
        {/* You can add additional elements to the right side of the navbar */}
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:text-gray-300">Home</a>
          <a href="#" className="text-white hover:text-gray-300">About</a>
          <a href="#" className="text-white hover:text-gray-300">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
