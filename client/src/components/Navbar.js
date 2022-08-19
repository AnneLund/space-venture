import {Link} from 'react-router-dom'
import {TiSocialFacebookCircular, TiSocialTwitter, TiSocialGooglePlus, TiSocialInstagram} from 'react-icons/ti'


const Navbar = () => {
    return(
        <nav>
            <ul className='links'>
                <li>
                    <Link to="/">Hjem</Link>
                </li>
                <li>
                    <Link to="./spaceship">Rumfærgen</Link>
                </li>
                <li>
                    <Link to="/trips">Ture</Link>
                </li>
                <li>
                    <Link to="/gallery">Galleri</Link>
                </li>
                <li>
                    <Link to="/security">Sikkerhed</Link>
                </li>
                <li>
                    <Link to="/contact">Kontakt</Link>
                </li>
            </ul>
<ul className='icons'>
    <li><TiSocialFacebookCircular/></li>
    <li><TiSocialTwitter/></li>
    <li><TiSocialGooglePlus/></li>
    <li><TiSocialInstagram/></li>
</ul>

        </nav>
     
    )
}

export default Navbar;