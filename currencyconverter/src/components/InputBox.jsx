import React, { useId} from 'react'

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = 'USD',
  amountDisabled = false,
  currencyDisabled = false,
  className = '',
}) {
  
  const id = useId()
  return (
    <div className ={`bg-white p3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1-2">
        <label htmlFor= {id} className="text-black/40 mb-2 inline-block">{label}</label>
        <input
        id={id}
          type="number"
          value={amount}
          onChange= {(e) => onAmountChange && onAmountChange(Number(e.target.value))}
          disabled={amountDisabled}
          className="outline-none bg-transparent w-full p-1.5"
          placeholder='Amount'
        />
      </div>
      <div className="w-1-2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full"> Currency Type</p>
        <select
          value={selectedCurrency}
          onChange={(e) => {onCurrencyChange && onCurrencyChange(e.target.value)}}
          disabled={currencyDisabled}
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default InputBox