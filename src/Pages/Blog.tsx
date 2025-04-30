import BlogFullScreen from "../Component/BlogFullScreen";
import Courses from "../Component/Courses";
import Delicious from "../Component/Delicious";
import Recipe from "../Component/Recipe";
import Storiees from "../Component/Storiees";
import TeamSection from "../Component/TeamSection";

const Blog = () => {
  return (
    <div>
      <BlogFullScreen />
      <Delicious />
      <Storiees />
      <Recipe />
      <Courses />
      <TeamSection />
    </div>
  );
};

export default Blog
