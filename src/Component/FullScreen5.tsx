import '../Style/FullScreen5.css'
import {Link} from "react-router-dom";

const FullScreen5 = () => {
        return (
            <div className="fullscreen5">
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

export default FullScreen5
