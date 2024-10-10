export default function InstructionSection({ instruction, onInstructionChange }) {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md mt-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Instruction</h2>
      <textarea
        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={instruction}
        onChange={(e) => onInstructionChange(e.target.value)}
        rows="4"
        placeholder="Enter your instruction here..."
      />
    </section>
  )
}