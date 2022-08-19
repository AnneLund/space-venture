import {Link} from 'react-router-dom'
import Mars from '../images/mars-btn.jpg'
import Moon from '../images/moon-btn.jpg'
import {HiArrowNarrowRight} from 'react-icons/hi'



const frontFigure = () => {

    return(
        <figure className="frontFigure">
            <img src={Mars} alt="Mars"/>
            <img src={Moon} alt="Moon"/>
            <figcaption>
                <Link to="/trips">Vores ture <HiArrowNarrowRight/></Link>
            </figcaption>
        </figure>
    )
}

export default frontFigure;