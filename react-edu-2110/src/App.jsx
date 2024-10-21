import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ButtonOne from './ButtonOne.jsx';
import Toolbar from './Toolbar.jsx';



function App() {


  return (
    <>
      <div>
        <ButtonOne />
      </div>

      <div>
        <Toolbar />
      </div>
    </>
  )
}

export default App
