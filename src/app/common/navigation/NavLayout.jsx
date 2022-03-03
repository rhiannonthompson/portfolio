import React from 'react'

export default function NavLayout() {
  return (
    <div className="bg-zinc-800 h-screen relative">
    <div className="absolute top-full">
      <div className="py-16 px-12 flex justify-end">
        <button
          className="text-zinc-50 border-2 border-zinc-200 p-2 rounded-sm hover:bg-yellow-500"
        >
          Close
        </button>
      </div>
    
      <div className="py-16 px-12 flex justify-center text-6xl text-center text-zinc-200 leading-loose">
        <ul className="font-black">
          <li className="mb-4">
            <button className="border-b-2 border-yellow-500 font-black tracking-wide hover:text-yellow-500">
              About
            </button>
          </li>
          <li className="mb-4">
            <button className="border-b-2 border-yellow-500 font-black tracking-wide hover:text-yellow-500">
              My Work
            </button>
          </li>
          <li>
            <button className="border-b-2 border-yellow-500 font-black tracking-wide hover:text-yellow-500">
              Contact
            </button>
          </li>
        </ul>
      </div>
    </div>
    </div> 
  )
}
