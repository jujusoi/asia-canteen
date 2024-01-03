import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import logo from './assets/image/Asiacanteenlogo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <section style={{height: 700, width: '100%', backgroundColor: '#FDF8F5' }}>
      <div style={{ display: 'flex', flexDirection: 'column', color: 'black' }}>  
        <div className='main-div' style={{ border: '1px solid black' }}>hello there</div>
        <div className='main-div' style={{ border: '1px solid black' }}>hello there</div>
      </div>
    </section>
    </>
  )
}

export default App
