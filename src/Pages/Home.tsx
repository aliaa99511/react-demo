import Agency from "../Component/Agency"
import PortfolioGallery from "../Component/PortfolioGallery"
import ServicesCard from "../Component/ServicesCard"
import Testimonials from "../Component/Testimonials"
import LegalSolutionsSection from "../Component/LegalSolutionsSection"
import BookPromoSection from "../Component/BookPromo"
import FeaturedProperties from "../Component/FeaturedProperties"
import FoodGallery from "../Component/FoodGallery"
import QuoteCarousel from "../Component/QuoteCarousel"
import BlogSection from "../Component/BlogSection"
import DrinkCategories from "../Component/DrinkCategories"
import RecipeGallery from "../Component/RecipeGallery"
import CourseSection from "../Component/CourseSection"
import PricingPlans from "../Component/PricingPlans"
import ExperienceSection  from "../Component/ExperienceSection"
import TeamSection from "../Component/TeamSection"
import HomeFullScreen from "../Component/HomeFullScreen"

const Home = () => {
    return (
        <div>
            <HomeFullScreen />
            <ServicesCard />
            <Agency />
            <Testimonials />
            <LegalSolutionsSection />
            <PortfolioGallery />
            <QuoteCarousel />
            <BookPromoSection />
            <FeaturedProperties />
            <FoodGallery />
            <BlogSection />
            <DrinkCategories />
            <RecipeGallery />
            <CourseSection />
            <PricingPlans />
            <TeamSection />
            <ExperienceSection  />
        </div>
    )
}

export default Home
