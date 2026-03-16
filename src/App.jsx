import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import Header from './components/lyouts/Header.jsx'
import Home from './components/sections/Home.jsx'
import About from './components/sections/About.jsx'
import Habilidades from './components/sections/Habilidades.jsx'
import Works from './components/sections/Works.jsx'
import Contact from './components/sections/Contact.jsx'
import Rodape from './components/sections/Rodape.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Home></Home> 
      <About></About>     
      <Habilidades/>
      <Works/>
      <Contact/>
      <Rodape/>
    </>
  )
}

export default App
