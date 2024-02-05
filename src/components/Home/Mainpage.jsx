import React from 'react'

function Mainpage() {
  return (
    <div>
        <div className="h-screen bg-white-1">
        <div className="container mx-auto p-4">
          <h1 className="text-4xl font-bold mb-4">My Todo List</h1>

          <ul>
            <li className="border-b border-gray-300 py-2 flex items-center justify-between">
              <span className="text-black">Create a TODO app</span>
            </li>
            <li className="border-b border-gray-300 py-2 flex items-center justify-between">
              <span className="text-black">Style the app</span>
            </li>
            <li className="border-b border-gray-300 py-2 flex items-center justify-between">
              <span className="text-black">Add functionality</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Mainpage