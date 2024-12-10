import {Link} from 'react-router-dom';
import styles from './Navbar.module.css'

const Navbar = () =>{
    return(
        <nav className={styles.nav}>
            <ul>
                <div className={styles["left-links"]}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/favorites'>Favorites</Link></li>
                </div>
                <li><Link to='/contact' className={styles.contactButton}>Contact Us</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar