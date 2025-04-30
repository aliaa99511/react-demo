import '../Style/FullScreen2.css'
import { Link } from "react-router-dom";

const FullScreen2 = () => {
    return (
        <div className="fullscreen2">
            <div className="sson">
                <div className="os">
                    <h1>About</h1>
                    <ul className="list-unstyled list">
                        <li className="list-item"><Link to='/'>Home / </Link></li>
                        <li className="list-item">  About</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FullScreen2