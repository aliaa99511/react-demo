import Agency from "../Component/Agency"
import BookPromoSection from "../Component/BookPromo"
import Build from "../Component/Build"
import TestimonialsFullScreen from "../Component/TestimonialsFullScreen"

const Testimonials = () => {
    return (
        <div>
            <TestimonialsFullScreen />
            <Build />
            <Agency />
            <BookPromoSection />
        </div>
    )
}

export default Testimonials
