import { useState } from 'react'
import Contactlist from './components/Contactlist'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Contactlist />
    </>
  )
}

export default App
