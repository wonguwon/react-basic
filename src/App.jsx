import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './components/MyComponent'
import UseStateTest from './components/useState/useStateTest'
import LandingPage from './components/useState/LandingPage'
import UseRefTest from './components/useRef/UseRefTest'
import UseRefScroll from './components/useRef/UseRefScroll'
import UseEffectTest from './components/useEffect/UseEffectTest'
import UseMemoTest from './components/useMemo/useMemoTest'
import UseCallbackTest from './components/useCallback/UseCallbackTest'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <MyComponent message={"함수형 컴포넌트 입니다."}/> */}
      {/* <UseStateTest /> */}
      {/* <LandingPage /> */}
      {/* <UseRefTest /> */}
      {/* <UseRefScroll /> */}
      {/* <UseEffectTest/> */}
      {/* <UseMemoTest /> */}
      <UseCallbackTest />
    </>
  )
}

export default App
