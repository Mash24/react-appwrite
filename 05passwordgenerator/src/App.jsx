import { useState , useCallback , useEffect} from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const generatePassword = useCallback(() => {
    let pass = '';
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'; // Default character set (lowercase and uppercase letters)}

    if(numberAllowed) str += '0123456789'; // Add numbers to the character set
    if(charAllowed) str += '!@#$%^&*'; // Add special characters to the character set

    for(let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length +1); // Generate a random number between 0 and the length of the character set
      pass += str.charAt(char); // Append the character at the random index to the password
    }

    setPassword(pass); // Set the password state to the generated password
  },[length,numberAllowed,charAllowed]); // Dependecies for the useCallback hook to watch for changes in`length`, `numberAllowed`, and `charAllowed` states to trigger re-generation when they change in the future.

const copyPasswordToClipboard = () => {
  window.navigator.clipboard.writeText(password); // Copy the password to the clipboard
  alert('Password copied to clipboard'); // Show an alert to the user
};

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed]) // useEffect hook to run the `generatePassword` function when the component mounts and whenever the `generatePassword` function changes.

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-3xl font-bold mb-2 text-center'>Password Generator</h1>

      {/* Password Display & Copy Button */}
      <div className='flex justify-between items-center'>
        <input
          type='text'
          value={password}
          className='outline-none w-full py-1 px-3 bg-gray-700 text-white'
          placeholder='Generated Password'
          readOnly
        />
        <button onClick={copyPasswordToClipboard}
        className='bg-gray-700 hover:bg-gray-600 transition-colors duration-300 ease-in-out text-white px-4 py-2 rounded-md ml-2'>
          Copy
        </button>
      </div>

      {/* Length Slider */}
      <div className='mt-4 flex gap-x-4 items-center'>
        <label htmlFor='length' className='text-lg'>Length: {length}</label>
        <input
          type='range'
          min={8}
          max={100}
          value={length}
          className='outline-none w-full cursor-pointer'
          onChange={(e) => setLength(Number(e.target.value))}
          id='length'
        />
      </div>

      {/* Options */}
      <div className='mt-4 flex flex-col gap-2'>
        <div>
          <input
            type='checkbox'
            checked={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
            id='char'
          />
          <label htmlFor='char' className='ml-2 text-lg'>Include Characters</label>
        </div>

        <div>
          <input
            type='checkbox'
            checked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
            id='number'
          />
          <label htmlFor='number' className='ml-2 text-lg'>Include Numbers</label>
        </div>
      </div>
    </div>
  );
}

export default App;
