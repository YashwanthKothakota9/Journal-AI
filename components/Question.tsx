'use client'

import { FormEvent, useState } from 'react'

const Question = () => {
  const [value, setValue] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          type="text"
          placeholder="Ask a question"
          className="border border-black/20 px-4 py-2 text-lg rounded-lg"
        />
        <button
          type="submit"
          className="bg-green-400 px-4 py-2 text-lg rounded-lg"
        >
          Ask
        </button>
      </form>
    </div>
  )
}

export default Question
