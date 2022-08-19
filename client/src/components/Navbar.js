import {Link} from 'react-router-dom'


const Navbar = () => {
    return(
        <nav>
            <ul>
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
        </nav>
     
    )
}

export default Navbar;