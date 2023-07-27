import React, { useEffect, useState } from 'react'

const SelectedContact = ({ selectedContactId, setSelectedContactId }) => {
  useEffect(() => {
    async function fetchContact() {
      try {
        const resp = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        )
        const result = await resp.json()
        setContact(result)
      } catch (error) {
        console.error(error)
      }
    }
    fetchContact()
  }, [])

  const [contact, setContact] = useState(null)

  return (
    <>
      {contact ? (
        <div>
          {contact.name}{' '}
          <button
            onClick={() => {
              setSelectedContactId(null)
            }}
          >
            X
          </button>
        </div>
      ) : (
        <h1>loading</h1>
      )}
    </>
  )
}

export default SelectedContact
