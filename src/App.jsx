import { useState } from 'react'
import {Header} from './components/Header';
import {Aside} from './components/Aside';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import {Form} from './components/Form';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <Aside/>
      <Form/>

    </div>
  )
}

export default App
