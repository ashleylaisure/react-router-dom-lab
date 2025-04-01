import {Link} from 'react-router';

const MailboxList = (props) => {

    return (
        <>
            <h2>Mailbox List</h2>
            <div>
                {!props.mailboxes.length ? (<h2>No Current Mailboxes</h2>) : (
                    
                    <ul >
                        {props.mailboxes.map((currentBox) => (
                            <li key={currentBox._id} className="mail-box">

                                <Link 
                                    to={`/mailboxes/${currentBox._id}`} 
                                    style={{textDecoration: 'none', color: 'aqua'}}>
                                        MailBox: {currentBox._id}</Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            
        </>
    )
}

export default MailboxList;