import { useState } from 'react'
import {Header} from './components/Header';
import {Aside} from './components/Aside';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <Aside/>

    </div>
  )
}

export default App
