import '../Style/ServicesFullScreen.css'
import {Link} from "react-router-dom";

const ServicesFullScreen = () => {
        return (
            <div className="services-fullScreen">
                <div className="sson">
                    <div className="os">
                        <h1>Services</h1>
                        <ul className="list-unstyled list">
                            <li className="list-item"><Link to='/'>Home / </Link></li>
                            <li className="list-item">  Services</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
}

export default ServicesFullScreen
