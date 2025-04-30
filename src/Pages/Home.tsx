import Agency from "../Component/Agency"
import FullScreen from "../Component/FullScreen"
import Hoverlay from "../Component/Hoverlay"
import Show from "../Component/Show"
import Slides from "../Component/Slides"
import Works from "../Component/Works"
import Bublich from "../Component/Bublich"
import Offer from "../Component/Offer"
import Delicious from "../Component/Delicious"
import Carousel from "../Component/Carousel"
import Food from "../Component/Food"
import Storiees from "../Component/Storiees"
import Recipe from "../Component/Recipe"
import Courses from "../Component/Courses"
import Price from "../Component/Price"
import Boorder from "../Component/Boorder"
import Build from "../Component/Build"

const Home = () => {
    return (
        <div>
            <FullScreen />
            <Show />
            <Agency />
            <Slides />
            <Works />
            <Hoverlay />
            <Carousel />
            <Bublich />
            <Offer />
            <Delicious />
            <Food />
            <Storiees />
            <Recipe />
            <Courses />
            <Price />
            <Boorder />
            <Build />
        </div>
    )
}

export default Home
