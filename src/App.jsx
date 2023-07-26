import { useState } from 'react'
import Contactlist from './components/Contactlist'

import './App.css'

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null)

  return (
    <>
      {selectedContactId ? (
        <div>test</div>
      ) : (
        <Contactlist setSelectedContactId={setSelectedContactId} />
      )}
    </>
  )
}

export default App
