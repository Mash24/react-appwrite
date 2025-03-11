import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

function changeColor(color){
  setColor(color)
}

  return (
   <div className='w-full h-screen duration -200' style={{backgroundColor: color}}>
    <h1 className='text-3xl text-center text-white font-bold p-3'>Background Changer</h1>
    <div className="fixed flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
        <button className='bg-blue-500 text-white px-3 py-2 rounded-md font-bold' onClick= {() => changeColor('red')}>Red</button>
        <button className='bg-blue-500 text-white px-3 py-2 rounded-md font-bold' onClick= {() => changeColor('green')}>Green</button>
        <button className='bg-blue-500 text-white px-3 py-2 rounded-md font-bold' onClick= {() => changeColor('blue')}>Blue</button>
      </div>
    </div>
   </div>
  )
}

export default App
