import {useParams} from 'react-router'
const MailboxDetails = (props) => {

    const {mailboxId} = useParams();
    const selectedBox = props.mailboxes.find(
        (mailbox) => mailbox._id === Number(mailboxId)
    )
    
    return (
        <>
            <h2>Mailbox {selectedBox._id}</h2>
            <p>Details</p>

            <p>Boxholder: {selectedBox.boxOwner}</p>
            <p>Box Size: {selectedBox.boxSize}</p>
        </>
    )
}

export default MailboxDetails;