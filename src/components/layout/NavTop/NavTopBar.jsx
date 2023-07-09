import Logo from '../../img/wod-logo.svg'
import styles from './NavBarTop.module.css'
import { Link } from 'react-router-dom'

function NavTopBar() {
    return(
        <div className={styles.navTop}>
            <div>
                <Link className={styles.a_link} to="/"><a href="http://"><img className={styles.logo} src={Logo} alt="Logo"/></a></Link>
            </div>
            <div>
                <p><a className={styles.a_link} href="https://www.worldofdarkness.com" target="blank">SITE OFICIAL</a></p>
            </div>
        </div>
    )
}

export default NavTopBar