import { useState } from 'react'
import reactLogo from './assets/react.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-full flex flex-col h-screen bg-black bg-hero justify-around">
      <div className="w-full z-50">
        <h1 className='text-[#e3e3e3] text-4xl font-bold mt-8 ml-7 drop-shadow-md'>Ahh... <br/>Você não vai <br/>perder o melhor <br/>evento do distrito <br/>né?</h1>
      </div>
      <div className='w-full flex justify-center flex-col items-center'>
        <button className='bg-[#1d1d1d] items-center justify-center w-[80%] mb-3 text-lg rounded-3xl h-[50px] text-[#e3e3e3] drop-shadow-2xl'>Entrar</button>
        <h5 className='text-center text-[#e3e3e3] text-md font-bold mb-5 drop-shadow-md'>Me inscrever</h5>
        <span className='text-center text-[#e3e3e3] text-xs font-light	opacity-70 '>developed by</span>
        <span className='text-center text-[#e3e3e3] text-xs font-bold italic opacity-70 '>LEO Clube Omega Fraiburgo</span>
      </div>
     
    </div>
  )
}

export default App
