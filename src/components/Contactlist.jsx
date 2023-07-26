import React from 'react'
import { useState, useEffect } from 'react'
import ContactRow from './ContactRow'

const Contactlist = ({ setSelectedContactId }) => {
  const [contacts, setContacts] = useState([])
  useEffect(() => {
    async function fetchContacts() {
      try {
        const resp = await fetch(
          'https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users'
        )
        const result = await resp.json()
        setContacts(result)
      } catch (error) {
        console.error(error)
      }
    }
    fetchContacts()
  }, [])

  // console.log('Contacts: ', contacts)

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {contacts.map(contact => (
          <ContactRow
            contact={contact}
            key={contact.id}
            setSelectedContactId={setSelectedContactId}
          />
        ))}
      </tbody>
    </table>
  )
}

export default Contactlist
