import { useState } from 'react'

export default function ExamplesSection({ examples, addExample }) {
  const [newExample, setNewExample] = useState('')
  const [editingIndex, setEditingIndex] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newExample.trim()) {
      addExample(newExample.trim())
      setNewExample('')
    }
  }

  const handleEdit = (index, value) => {
    const updatedExamples = [...examples]
    updatedExamples[index] = value
    addExample(updatedExamples[index], index)
  }

  return (
    <section className="bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-blue-400">Examples</h2>
      <ul className="mb-4 space-y-4">
        {examples.map((example, index) => (
          <li key={index} className="bg-gray-700 p-2 rounded">
            <div className="font-semibold text-blue-300 mb-1">Example {index + 1}</div>
            {editingIndex === index ? (
              <textarea
                value={example}
                onChange={(e) => handleEdit(index, e.target.value)}
                onBlur={() => setEditingIndex(null)}
                className="w-full p-2 bg-gray-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
                autoFocus
              />
            ) : (
              <div 
                onClick={() => setEditingIndex(index)}
                className="cursor-pointer overflow-hidden relative"
                style={{ height: '8rem' }} // 8rem = 128px, adjust as needed
              >
                <div className="absolute inset-0 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
                  <pre className="whitespace-pre-wrap font-sans">{example}</pre>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-gray-700 to-transparent pointer-events-none"></div>
              </div>
            )}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <textarea
          value={newExample}
          onChange={(e) => setNewExample(e.target.value)}
          placeholder="Add a new example"
          className="w-full p-2 border rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2 h-32 resize-none"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200 self-start">
          Add Example
        </button>
      </form>
    </section>
  )
}