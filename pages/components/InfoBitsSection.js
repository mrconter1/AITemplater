export default function InfoBitsSection({ infoBits, addInfoBit, updateInfoBit }) {
  return (
    <section className="bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-blue-400">Info Bits</h2>
      {infoBits.map((infoBit, index) => (
        <div key={index} className="mb-4 p-4 border border-gray-700 rounded bg-gray-700">
          <input
            type="text"
            value={infoBit.title}
            onChange={(e) => updateInfoBit(index, 'title', e.target.value)}
            placeholder="Title"
            className="w-full p-2 mb-2 border rounded bg-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            value={infoBit.description}
            onChange={(e) => updateInfoBit(index, 'description', e.target.value)}
            placeholder="Description"
            className="w-full p-2 mb-2 border rounded bg-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            value={infoBit.content}
            onChange={(e) => updateInfoBit(index, 'content', e.target.value)}
            placeholder="Content"
            rows="3"
            className="w-full p-2 border rounded bg-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      ))}
      <button 
        onClick={addInfoBit}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
      >
        Add Info Bit
      </button>
    </section>
  )
}