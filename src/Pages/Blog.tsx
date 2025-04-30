import Boorder from "../Component/Blogfiles/Boorder";
import Courses from "../Component/Blogfiles/Courses";
import Delicious from "../Component/Blogfiles/Delicious";
import FullScreen3 from "../Component/Blogfiles/FullScreen3";
import Recipe from "../Component/Blogfiles/Recipe";
import Storiees from "../Component/Blogfiles/Storiees";

const Blog = () => {
    return (
            <div>
               <FullScreen3 />
              <Delicious />
              <Storiees />
              <Recipe />
              <Courses/>
              <Boorder/>
            </div>
    );
};

export default Blog
