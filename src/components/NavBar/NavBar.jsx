import {Link} from 'react-router'

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li>
                    <Link to="/mailboxes" className="nav-link">Mailboxes</Link>
                </li>
                <li>
                    <Link to="/new-mailbox" className="nav-link">New Mailbox</Link>
                </li>
                
                <li>
                    <Link to="/new-letter" className="nav-link">New Letter</Link>
                </li>

            </ul>
        </nav>
    )
}

export default NavBar