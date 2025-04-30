import Cardes from '../Component/Aboutfiles/Cardes';
import Food from '../Component/Aboutfiles/Food';
import FullScreen2 from '../Component/Aboutfiles/FullScreen2';
import Hoverlay from '../Component/Aboutfiles/Hoverlay';
import Price from '../Component/Aboutfiles/Price';
import Shadow from '../Component/Aboutfiles/Shadow';
import Shapes from '../Component/Aboutfiles/Shapes';
import Works from '../Component/Aboutfiles/Works';

const About = () => {
    return (
        <div>
            <FullScreen2 />
            <Hoverlay />
            <Shapes />
            <Works />
            <Price />
            <Food />
            <Cardes/>
            <Shadow/>
        </div>
    );
};

export default About;