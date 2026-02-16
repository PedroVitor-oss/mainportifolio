import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Home></Home>      
    </>
  )
}

export default App
