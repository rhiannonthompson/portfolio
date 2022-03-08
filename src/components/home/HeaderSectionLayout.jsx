import React from 'react'
import HeaderLayout from './header/HeaderLayout'
import HeroText from './hero/HeroText'


export default function HeaderSectionLayout({toggleMenuActive}) {
  return (
    <section className="bg-zinc-600 text-zinc-50">
    <div className="mx-6 md:mx-12 pt-10 pb-24 lg:pb-36 lg:min-h-screen">
      <HeaderLayout toggleMenuActive={toggleMenuActive} />
      <HeroText />
      <div className="flex flex-row w-fit items-top">
        <div className="text-2xl md:text-4xl mr-2 text-yellow-500">|</div>
        <button className="h-fit px-2 py-1 text-xl hover:text-yellow-500">
          My Work
        </button>
      </div>
    </div>
  </section>
  )
}
