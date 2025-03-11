import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCurrencyInfo from './components/hooks/useCurrencyInfo'
import { InputBox } from './components/index.js'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('USD')
  const [to, setTo] = useState('USD')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = currencyInfo ? Object.keys(currencyInfo) : [] // Prevents error when currencyInfo is null or when API fails
  // useCurrencyInfo(to)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div className='w-full h-screen flex justify-center items-center relative bg-cover bg-no-repeat'>
      <img className='absolute inset-0 w-full h-full object-cover' src= 'https://images.pexels.com/photos/210600/pexels-photo-210600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='react logo'/>
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
        <form onSubmit={(e) => {
          e.preventDefault()
          convert()
        }} >

          <div className="w-full mb-1">
            <InputBox
            label="from"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency)=> setFrom(currency)}
            onAmountChange={(amount)=> setAmount(amount)}
            selectedCurrency={from}
            />
            </div>
            
            <div className="relative w-full h-0.5">
              <button
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-100 rounded-lg px-2 py-1 text-sm"
                onClick={swap}>Swap
              </button>
            </div>
            
            <div className="w-full mb-1">
            <InputBox
            label="to"
            amount={convertedAmount}
            amountDisabled={true}
            currencyOptions={options}
            onCurrencyChange={(currency)=> setTo(currency)}
            selectedCurrency={to}
            />
            </div>

            <button
            type='submit'
            className="w-full bg-blue-500 text-white rounded-lg px-4 py-3 rounded-lg"
            >Convert {from} to {to}</button>
          
        </form>
        </div>
      </div>
    </div>
  )
}

export default App
