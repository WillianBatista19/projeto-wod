import styles from './navbar.module.css'
import MobileNavegation from "./MobileNavegation"

const NavBar = () => {
    return (
        <nav className={styles.nav_Bar}>
            <div className={styles.div_Bar}>
                <MobileNavegation />
            </div>
        </nav>
            

    )
}

export default NavBar;