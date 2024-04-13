import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import { Button } from './components/Button'//
//import { WapperList } from './components/WrapperList'//
//import { List } from './components/List'//
import { RandomComponent } from './components/RandomComponent'
import './App.css'

function App() {

  const buttonText = "Count: ";
  return (
    <>
      <h1>HOLA DESDE VITE</h1>
      <RandomComponent text={buttonText}/>
    </>
  )
}

export default App
