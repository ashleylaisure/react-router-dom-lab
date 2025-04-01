import {useParams} from 'react-router'

const MailboxDetails = (props) => {

    console.log(props)

    const {mailboxId} = useParams();
    const selectedBox = props.mailboxes.find(
        (mailbox) => mailbox._id === Number(mailboxId)
    )
    const selectedLetters = props.letters.filter(
        (letter) => letter.mailboxId === mailboxId
    )

    console.log("selected letters", selectedLetters)
    
    return (
        <>
            <h2>Mailbox {selectedBox._id}</h2>
            <p>Details</p>

            <p>Boxholder: {selectedBox.boxOwner}</p>
            <p>Box Size: {selectedBox.boxSize}</p>

            {!selectedLetters.length ? (<h2>No Letters</h2>) : (

                <div>
                    <h2>Letters</h2>
                    {selectedLetters.map((letter) => (
                        <div className="letter">
                            <p>Dear {letter.recipient},</p>
                            <p>{letter.message}</p>
                        </div>
                    ))}
                </div>
                
            )}
            

        </>
    )
}

export default MailboxDetails;