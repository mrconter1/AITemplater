export default function InstructionSection({ instruction, onInstructionChange }) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Instruction</h2>
      <textarea
        className="w-full p-2 border rounded"
        value={instruction}
        onChange={(e) => onInstructionChange(e.target.value)}
        rows="4"
        placeholder="Enter your instruction here..."
      />
    </section>
  )
}