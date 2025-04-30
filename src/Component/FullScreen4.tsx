import '../Style/FullScreen4.css'
import { Link } from "react-router-dom";

const FullScreen4 = () => {
    return (

        <div className="fullscreen4">
            <div className="sson">
                <div className="os">
                    <h1>Testimonials</h1>
                    <ul className="list-unstyled list">
                        <li className="list-item"><Link to='/'>Home / </Link></li>
                        <li className="list-item">  Testimonials</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FullScreen4
