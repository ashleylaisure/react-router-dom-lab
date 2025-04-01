import {useParams} from 'react-router'

const MailboxDetails = (props) => {

    console.log(props)

    const {mailboxId} = useParams();
    const selectedBox = props.mailboxes.find(
        (mailbox) => mailbox._id === Number(mailboxId)
    )
    const selectedLetters = props.letters.filter(
        (letter) => letter.mailboxId === Number(mailboxId)
    )
    
    return (
        <>
            <h2>Mailbox {selectedBox._id}</h2>
            <p>Details</p>

            <p>Boxholder: {selectedBox.boxOwner}</p>
            <p>Box Size: {selectedBox.boxSize}</p>

            {!props.letters.length ? (<h2>No Letters</h2>) : (
                <div>
                    <h3>Letters</h3>

                    <p>Dear {selectedLetters.recipient},</p>
                    <p>{selectedLetters.message}</p>
                </div>
                
            )}
            

        </>
    )
}

export default MailboxDetails;