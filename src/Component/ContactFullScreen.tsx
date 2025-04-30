import '../Style/ContactFullScreen.css'
import { Link } from "react-router-dom";

const ContactFullScreen = () => {
    return (
        <div className="contact-fullScreen">
            <div className="sson">
                <div className="os">
                    <h1>Contact</h1>
                    <ul className="list-unstyled list">
                        <li className="list-item"><Link to='/'>Home / </Link></li>
                        <li className="list-item">  Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ContactFullScreen
