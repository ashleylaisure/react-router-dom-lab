import { useState } from 'react'
import {Routes, Route} from 'react-router'
import NavBar from './components/NavBar/NavBar.jsx'
import MailboxList from './components/MailboxList/MailboxList.jsx'
import MailboxDetails from './components/MailboxDetails/MailboxDetails.jsx'
import MailboxForm from './components/MailboxForm/MailboxForm.jsx'
import './App.css'

function App() {
  const [mailboxes, setMailboxes] = useState([])

  console.log(mailboxes)

  const addBox = (newMailbox) => {
    newMailbox._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newMailbox])
  }

  return (
    <>
      <NavBar />
      <h1>Hello World!</h1>

      <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>}/>
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes}/>}/>
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox}/>}/>
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes}/>}/>
      </Routes>
    </>
  )
}

export default App
