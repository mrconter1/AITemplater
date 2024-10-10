import { useState } from 'react'

export default function ExamplesSection({ examples, addExample }) {
  const [newExample, setNewExample] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newExample.trim()) {
      addExample(newExample.trim())
      setNewExample('')
    }
  }

  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Examples</h2>
      <ul className="mb-4 space-y-2">
        {examples.map((example, index) => (
          <li key={index} className="bg-gray-100 p-2 rounded">{example}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          value={newExample}
          onChange={(e) => setNewExample(e.target.value)}
          placeholder="Add a new example"
          className="flex-grow p-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 transition duration-200">Add</button>
      </form>
    </section>
  )
}