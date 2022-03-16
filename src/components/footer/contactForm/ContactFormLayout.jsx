import React from 'react'

export default function ContactFormLayout() {
  return (
    <div className="flex-grow mx-4 my-8 md:my-0 md:mx-0">
    <form className="flex flex-col">
      <label className="mb-2 font-bold tracking-wider text-xl">
        Name
      </label>
      <input
        className="px-2 py-3 rounded-sm bg-zinc-700"
        placeholder="Your name"
        required
      />

      <label className="mt-4 mb-2 font-bold tracking-wider text-xl">
        Email
      </label>
      <input
        className="px-2 py-3 rounded-sm bg-zinc-700"
        placeholder="Your email"
        required
      />

      <label className="mb-2 mt-4 font-bold tracking-wider text-xl">
        Message
      </label>
      <textarea
        className="h-40 px-2 py-3 rounded-sm bg-zinc-700"
        placeholder="Your message"
        required
      />

      <button className="py-2 px-12 w-fit mt-4 rounded-md bg-yellow-500 text-zinc-800 font-bold uppercase tracking-wider">
        Send
      </button>
    </form>
  </div>
  )
}
