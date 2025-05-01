import AboutFullScreen from '../Component/AboutFullScreen';
// import Cardes from '../Component/Cardes';
import BlogSection from '../Component/BlogSection';
// import Hoverlay from '../Component/Hoverlay';
import PricingPlans from '../Component/PricingPlans';
import ServicesBanner from '../Component/ServicesBanner';
// import ReasonsSection from '../Component/ReasonsSection';
import LegalSolutionsSection from '../Component/LegalSolutionsSection';

const About = () => {
    return (
        <div>
            <AboutFullScreen />
            {/* <Hoverlay /> */}
            {/* <ReasonsSection /> */}
            <LegalSolutionsSection />
            <PricingPlans />
            <BlogSection />
            {/* <Cardes/> */}
            <ServicesBanner/>
        </div>
    );
};

export default About;