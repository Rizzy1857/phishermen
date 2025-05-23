import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const commands = {
  help: {
    description: 'Show available commands',
    execute: () => `Available commands:\n${Object.keys(commands).join(', ')}`
  },
  clear: {
    description: 'Clear the terminal',
    execute: (_, setOutput) => setOutput([])
  },
  about: {
    description: 'About Phishermen',
    execute: () => 'Phishermen 2.0 - Advanced cybersecurity event\nType "help" for commands'
  },
  hack: {
    description: 'Initiate hacking sequence',
    execute: () => {
      const responses = [
        'Hacking initiated...\n> Bypassing firewall... [OK]\n> Cracking encryption... [OK]\n> Just kidding! This is a simulation.',
        'Nice try, script kiddie.\nReal hacking requires skill.',
        'sudo rm -rf /\nERROR: Permission denied'
      ]
      return responses[Math.floor(Math.random() * responses.length)]
    }
  },
  sudo: {
    description: 'Execute as superuser',
    execute: (args) => {
      if (args[0] === 'hack') {
        return `> Initializing advanced penetration...\n${Array(5).fill().map((_, i) => 
          `[${i+1}/5] Exploiting vulnerability... [OK]`).join('\n')}\nACCESS GRANTED!`
      }
      return `Usage: sudo [command]\nTry "sudo hack"`
    }
  },
  scan: {
    description: 'Scan network',
    execute: () => `Scanning network...\nFound 3 devices:\n- 192.168.1.1 (Router)\n- 192.168.1.2 (Unknown)\n- 192.168.1.3 (This terminal)`
  },
  exit: {
    description: 'Exit terminal',
    execute: (_, __, navigate) => {
      navigate('/')
      return 'Exiting terminal...'
    }
  }
}

export default function Terminal() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState([
    'Phishermen Terminal v2.0',
    'Type "help" for available commands',
    ''
  ])
  const [history, setHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const inputRef = useRef(null)
  const endRef = useRef(null)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    
    // Add command to output
    setOutput(prev => [...prev, `> ${input}`])
    
    // Process command
    const [cmd, ...args] = input.split(' ')
    if (commands[cmd]) {
      const result = commands[cmd].execute(args, setOutput, navigate)
      if (result) {
        setOutput(prev => [...prev, result])
      }
    } else {
      setOutput(prev => [...prev, `Command not found: ${cmd}`])
    }
    
    // Add to history
    setHistory(prev => [...prev, input])
    setHistoryIndex(-1)
    setInput('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp' && history.length > 0) {
      e.preventDefault()
      const newIndex = historyIndex >= history.length - 1 ? history.length - 1 : historyIndex + 1
      setHistoryIndex(newIndex)
      setInput(history[history.length - 1 - newIndex] || '')
    } else if (e.key === 'ArrowDown' && historyIndex > 0) {
      e.preventDefault()
      const newIndex = historyIndex - 1
      setHistoryIndex(newIndex)
      setInput(history[history.length - 1 - newIndex] || '')
    } else if (e.key === 'Tab') {
      e.preventDefault()
      // Basic tab completion
      const matching = Object.keys(commands).filter(c => c.startsWith(input))
      if (matching.length === 1) {
        setInput(matching[0])
      }
    }
  }

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [output])

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen bg-black text-green-400 p-4 overflow-hidden font-mono"
    >
      <div className="h-full flex flex-col">
        <div className="flex items-center justify-between border-b border-green-800 pb-2 mb-2">
          <h1 className="text-xl">Phishermen Terminal</h1>
          <button 
            onClick={() => navigate('/')}
            className="text-red-400 hover:text-red-600"
          >
            [X]
          </button>
        </div>
        
        <div className="flex-grow overflow-y-auto mb-2">
          {output.map((line, i) => (
            <div key={i} className="whitespace-pre-wrap">
              {line}
              {i === output.length - 1 && <div ref={endRef} />}
            </div>
          ))}
        </div>
        
        <form onSubmit={handleSubmit} className="flex items-center">
          <span className="text-green-600 mr-2">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-grow bg-transparent border-none outline-none text-green-400 caret-green-600"
            autoFocus
          />
        </form>
      </div>
    </motion.div>
  )
}