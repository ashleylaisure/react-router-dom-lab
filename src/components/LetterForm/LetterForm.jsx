import {useState} from 'react';
import {useNavigate} from 'react-router'

const initialState= {
    mailboxId: 0,
    recipient: '',
    message: '',
}
function LetterForm(props) {

    const [formData, setFormData] = useState(initialState)
    const navigate = useNavigate()

    console.log(formData)

    const handleSubmit = (e) => {
        const id = Number(formData.mailboxId)

        e.preventDefault()
        props.addLetter(formData)
        setFormData(initialState)
        navigate(`/mailboxes/${id}`)
    }

    const handleChange = ({target}) => {
        // setFormData({...formData, [target.name]: target.name === 'mailboxId' ? Number(target.value) : target.value})
        setFormData({...formData, [target.name]: target.value})
    }
    
    return (
        <main>
            <h1>New Letter</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="mailboxId">Select a Mailbox</label>
                <select
                    id="mailboxId"
                    name="mailboxId"
                    value={formData.mailboxId}
                    onChange={handleChange}>
                        <option value="">Select a Box</option>
                        {props.mailboxes.map((mailbox) => (
                            <option key={mailbox._id} value={mailbox._id}>{mailbox._id}</option>
                        ))}

                </select>

                <label htmlFor="recipient">Recipient:</label>
                <input 
                    type="text"
                    id="recipient"
                    name="recipient"
                    value={formData.recipient}
                    onChange={handleChange}/>

                <label htmlFor="message">Message:</label>
                <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}/>

                <button type="submit">Submit</button>

            </form>
        </main>
    )
}

export default LetterForm;