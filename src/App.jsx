import { useState } from 'react'
import Contactlist from './components/Contactlist'
import './App.css'
import SelectedContact from './components/SelectedContact'

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null)

  return (
    <>
      {selectedContactId ? (
        <SelectedContact selectedContactId={selectedContactId} />
      ) : (
        <Contactlist setSelectedContactId={setSelectedContactId} />
      )}
    </>
  )
}

export default App
