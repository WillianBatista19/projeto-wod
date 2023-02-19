import styles from './Css/navbar.module.css'
import MobileNavegation from "./MobileNavegation"
// import Navigation from "./Navegation"

const NavBar = () => {
    return (
        <nav className={styles.nav_Bar}>
            <div className={styles.div_Bar}>
                {/* <Navigation /> */}
                <MobileNavegation />
            </div>
        </nav>
            

    )
}

export default NavBar;