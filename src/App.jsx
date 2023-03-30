import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='px-10 container mx-auto'>
      <nav className='flex justify-between items-center py-10 border-b-2'>
        <h2 className='text-2xl font-bold'>Know Programming</h2>
        <img className='w-16 h-16 rounded-full' src="https://randomuser.me/api/portraits/men/64.jpg" alt="" />
      </nav>
    </div>
  )
}

export default App
