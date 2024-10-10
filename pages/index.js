import Head from 'next/head'
import { useState } from 'react'
import ExamplesSection from './components/ExampleSection'
import InfoBitsSection from './components/InfoBitsSection'
import InstructionSection from './components/InstructionSection'

export default function Home() {
  const [infoBits, setInfoBits] = useState({})
  const [instruction, setInstruction] = useState('')

  const handleInfoBitChange = (key, value) => {
    setInfoBits(prev => ({ ...prev, [key]: value }))
  }

  const handleInstructionChange = (value) => {
    setInstruction(value)
  }

  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>AITemplater</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-10">
        <h1 className="text-4xl font-bold text-center mb-8">
          AITemplater
        </h1>
        
        <ExamplesSection />
        
        <InfoBitsSection 
          infoBits={infoBits} 
          onInfoBitChange={handleInfoBitChange} 
        />
        
        <InstructionSection 
          instruction={instruction}
          onInstructionChange={handleInstructionChange}
        />
      </main>
    </div>
  )
}