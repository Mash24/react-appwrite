import { useState } from 'react'
import Footer from './Footer/Footer'  // Importing Footer component
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <main>
          <Outlet/>
        </main>
      </div>
      <h1 className="text-3xl font-bold text-center mt-5 bg-slate-900 text-white p-5 rounded-md border-solid border-4 border-blue-600 hover:bg-green-700 transition-all duration-300 ease-in-out cursor-pointer" >Youtube Blog</h1>
      <Footer />  // Adding Footer component to render the footer
    </>
  )
}

export default App
