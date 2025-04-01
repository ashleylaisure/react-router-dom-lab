import {Link} from 'react-router';

const MailboxList = (props) => {

    return (
        <>
            <h2>Mailbox List</h2>
            <div>
                {!props.mailboxes.length ? (<h2>No Current Mailboxes</h2>) : (
                    
                    <ul className="mail-box">
                        {props.mailboxes.map((currentBox) => (
                            <li key={currentBox._id}>
                                {currentBox._id}
                                {/* <Link to={`/mailboxes/${currentBox._id}`}>{currentBox._id}</Link> */}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            
        </>
    )
}

export default MailboxList;