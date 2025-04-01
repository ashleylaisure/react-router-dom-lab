import {useState} from 'react';
import { useNavigate } from 'react-router';

const initialState = {
    // boxSize: '',
    boxOwner: '',
}

const MailboxForm = (props) => {

    const [formData, setFormData] = useState(initialState)
    const navigate = useNavigate()

    console.log(formData)

    const handleSubmit = (e) => {
        e.preventdefault()
        props.addBox(formData)
        setFormData(initialState)
        navigate('/mailboxes')
        
    }

    const handleChange = ({target}) => {
        setFormData({...formData, [target.name]: target.value})
    }

    return (
        <main>
            <h2>New Mailbox</h2>

            <form onSubmit={handleSubmit}>
                <label htmlFor="boxOwner">Enter a boxholder:</label>
                <input 
                    type="text"
                    id="boxOwner"
                    name="boxOwner"
                    value={formData.boxOwner}
                    onChange={handleChange}/>


                {/* <label htmlFor="boxSize">Select a Box Size:</label>
                <select id="boxSize" name="boxSize" onChange={handleChange}>
                    <option value=""></option>
                    <option value={formData.boxSize = 'small'}>Small</option>
                    <option value={formData.boxSize = 'medium'}>Medium</option>
                    <option value={formData.boxSize = 'large'}>Large</option>
                </select> */}

                <button type="submit">Submit</button>
            </form>
        </main>
    )
}

export default MailboxForm;