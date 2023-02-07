import styles from './Css/navbar.module.css'

import MobileNavegation from "./MobileNavegation"
import Navigation from "./Navegation"

const NavBar = () => {
    return (
        <div className={styles.div_Bar}>
            <Navigation />
            <MobileNavegation />
        </div>
    )
}

export default NavBar