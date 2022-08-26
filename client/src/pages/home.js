import {Slideshow} from '../components/Slideshow'
import Frontfigure from '../components/Figure'
import AboutUs from '../components/aboutus';
import Team from '../components/team';
import Form from '../components/form'

const Home = () => {
 
    return (
        <>
            <Slideshow/>
            <Frontfigure/>
            <AboutUs/>
            <Team/>
            <Form/>
        </>
    )
}

export default Home;