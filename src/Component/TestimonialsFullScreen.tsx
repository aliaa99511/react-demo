import '../Style/TestimonialsFullScreen.css'
import { Link } from "react-router-dom";

const TestimonialsFullScreen = () => {
    return (

        <div className="testimonials-fullScreen">
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

export default TestimonialsFullScreen
