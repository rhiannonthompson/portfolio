import React from 'react'

export default function NavLayout({isMenuActive, toggleMenuActive}) {
  return (
    <nav
    className={`${
      !isMenuActive && "-translate-y-full"
    } transition duration-1000 absolute h-screen z-40 bg-zinc-800 w-full`}
  >
    <div className="py-16 px-12 flex justify-end">
      <button
        className="text-zinc-50 border-2 border-zinc-200 p-2 rounded-sm hover:bg-yellow-500"
        onClick={toggleMenuActive}
      >
        Close
      </button>
    </div>
    <div className="py-16 px-12 flex justify-center text-6xl text-center text-zinc-200 leading-loose">
      <ul className="font-black">
        <li className="mb-4">
          <button className="border-b-4 border-yellow-500 font-black tracking-wide hover:text-yellow-500">
            About
          </button>
        </li>
        <li className="mb-4">
          <button className="border-b-4 border-yellow-500 font-black tracking-wide hover:text-yellow-500">
            My Work
          </button>
        </li>
        <li>
          <button className="border-b-4 border-yellow-500 font-black tracking-wide hover:text-yellow-500">
            Contact
          </button>
        </li>
      </ul>
    </div>
  </nav>
  )
}
