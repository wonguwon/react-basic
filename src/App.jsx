import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './components/MyComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyComponent message={"함수형 컴포넌트 입니다."}/>
    </>
  )
}

export default App
