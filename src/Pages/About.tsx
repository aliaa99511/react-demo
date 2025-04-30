import Cardes from '../Component/Cardes';
import Food from '../Component/Food';
import FullScreen2 from '../Component/FullScreen2';
import Hoverlay from '../Component/Hoverlay';
import Price from '../Component/Price';
import Shadow from '../Component/Shadow';
import Shapes from '../Component/Shapes';
import Works from '../Component/Works';

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