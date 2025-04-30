import Agency from "../Component/Agency"
import Hoverlay from "../Component/Hoverlay"
import Show from "../Component/Show"
import Slides from "../Component/Slides"
import Works from "../Component/Works"
import BookPromoSection from "../Component/BookPromo"
import Offer from "../Component/Offer"
import Delicious from "../Component/Delicious"
import Carousel from "../Component/Carousel"
import Food from "../Component/Food"
import Storiees from "../Component/Storiees"
import Recipe from "../Component/Recipe"
import Courses from "../Component/Courses"
import Price from "../Component/Price"
import Build from "../Component/Build"
import TeamSection from "../Component/TeamSection"
import HomeFullScreen from "../Component/FullScreen"

const Home = () => {
    return (
        <div>
            <HomeFullScreen />
            <Show />
            <Agency />
            <Slides />
            <Works />
            <Hoverlay />
            <Carousel />
            <BookPromoSection />
            <Offer />
            <Delicious />
            <Food />
            <Storiees />
            <Recipe />
            <Courses />
            <Price />
            <TeamSection />
            <Build />
        </div>
    )
}

export default Home
