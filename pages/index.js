import Head from 'next/head'
import { useState } from 'react'
import ExamplesSection from './components/ExampleSection'
import InfoBitsSection from './components/InfoBitsSection'
import InstructionSection from './components/InstructionSection'
import GeneratePromptButton from './components/GeneratePromptButton'

export default function Home() {
  const [examples, setExamples] = useState([])
  const [infoBits, setInfoBits] = useState([])
  const [instruction, setInstruction] = useState('')

  const addExample = (text, index = null) => {
    if (index !== null) {
      // Update existing example
      setExamples(prev => prev.map((ex, i) => i === index ? text : ex))
    } else {
      // Add new example
      setExamples(prev => [...prev, text])
    }
  }

  const addInfoBit = () => {
    setInfoBits([...infoBits, { title: '', description: '', content: '' }])
  }

  const updateInfoBit = (index, field, value) => {
    const newInfoBits = [...infoBits]
    newInfoBits[index][field] = value
    setInfoBits(newInfoBits)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Head>
        <title>AITemplater</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-blue-400">
          AITemplater
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ExamplesSection examples={examples} addExample={addExample} />
          <InfoBitsSection infoBits={infoBits} addInfoBit={addInfoBit} updateInfoBit={updateInfoBit} />
        </div>
        
        <InstructionSection 
          instruction={instruction}
          onInstructionChange={setInstruction}
        />

        <GeneratePromptButton 
          examples={examples}
          infoBits={infoBits}
          instruction={instruction}
        />
      </main>
    </div>
  )
}