import React from 'react'

function Banner() {
    return (
        <div>
            <div className="h-[400px] flex justify-center items-center">
                <div className="flex items-center space-x-2">
                <h2 className="text-white font-bold text-5xl">TODO App List</h2>
                <img src="/to-do-list.png" alt="todoapp" className="h-16 w-16" />
                </div>
            </div>
        </div>
    )
}

export default Banner