import { useState } from 'react'
import {Route, Routes} from 'react-router'
import NavBar from './components/NavBar/NavBar.jsx'
import MailboxList from './components/MailboxList/MailboxList.jsx'
import MailboxDetails from './components/MailboxDetails/MailboxDetails.jsx'
import MailboxForm from './components/MailboxForm/MailboxForm.jsx'
import LetterForm from './components/LetterForm/LetterForm.jsx'
import './App.css'

function App() {
  const [mailboxes, setMailboxes] = useState([])
  const [letters, setLetters] = useState([])

  console.log(mailboxes)
  console.log(letters)

  const addBox = (newMailbox) => {
    newMailbox._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newMailbox])
  }

  const addLetter = (newLetter) => {
    newLetter._id = letters.length + 1;
    setLetters([...letters, newLetter])
  }

  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<main><h1>POST OFFICE</h1></main>}/>
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes}/>}/>
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox}/>}/>
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} letters={letters}/>}/>
        <Route path="/new-letter" element={<LetterForm 
          addLetter={addLetter}
          mailboxes={mailboxes}/>}/>
      </Routes>
    </>
  )
}

export default App;
