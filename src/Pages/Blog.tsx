import BlogFullScreen from "../Component/BlogFullScreen";
import CourseSection from "../Component/CourseSection";
import FoodGallery from "../Component/FoodGallery";
import RecipeGallery from "../Component/RecipeGallery";
import DrinkCategories from "../Component/DrinkCategories";
import TeamSection from "../Component/TeamSection";

const Blog = () => {
  return (
    <div>
      <BlogFullScreen />
      <FoodGallery />
      <DrinkCategories />
      <RecipeGallery />
      <CourseSection />
      <TeamSection />
    </div>
  );
};

export default Blog
