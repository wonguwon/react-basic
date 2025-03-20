import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import JavaScript from './components/JavaScript'
import Style from './components/Style'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>JSX</h1>
      {/* <JavaScript/> */}
      <Style />
    </>
  )
}

export default App
