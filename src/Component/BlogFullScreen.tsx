import '../Style/BlogFullScreen.css'
import { Link } from "react-router-dom";

const BlogFullScreen = () => {
    return (
        <div className="blog-fullScreen">
            <div className="sson">
                <div className="os">
                    <h1>Blog</h1>
                    <ul className="list-unstyled list">
                        <li className="list-item"><Link to='/'>Home / </Link></li>
                        <li className="list-item">  Blog</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BlogFullScreen
