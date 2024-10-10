import React from 'react';

const GeneratePromptButton = ({ examples, infoBits, instruction }) => {
  const generatePrompt = () => {
    let prompt = '';

    // Add examples
    examples.forEach((example, index) => {
      prompt += `Example ${index + 1}:\n${example}\n\n`;
    });

    // Add info bits
    infoBits.forEach((infoBit) => {
      prompt += `${infoBit.title}:\n${infoBit.content}\n\n`;
    });

    // Add instruction
    prompt += `Instruction:\n${instruction}\n\n`;

    return prompt;
  };

  const copyToClipboard = () => {
    const prompt = generatePrompt();
    navigator.clipboard.writeText(prompt)
      .then(() => alert('Prompt copied to clipboard!'))
      .catch(err => console.error('Failed to copy: ', err));
  };

  return (
    <button 
      onClick={copyToClipboard}
      style={{
        marginTop: '2rem',
        backgroundColor: '#48bb78',
        color: 'white',
        padding: '0.5rem 1rem',
        borderRadius: '0.25rem',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1rem',
        fontWeight: 'bold',
      }}
    >
      <span style={{ marginRight: '0.5rem' }}>📋</span>
      Generate and Copy Prompt
    </button>
  );
};

export default GeneratePromptButton;