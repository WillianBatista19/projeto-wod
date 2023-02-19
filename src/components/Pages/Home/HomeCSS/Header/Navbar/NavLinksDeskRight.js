import styles from './navbar.module.css'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'

const NavLinksDeskRight = () => {
    const animateFrom = {opacity: 0, y: -40}
    const animateTo = {opacity: 1, y: 0}

    return (
        <div className={styles.divListRight}>
                <ul className={styles.list}>
                    <motion.li
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.20}}
                        className={styles.itemlist}>
                        <Link className={styles.a_link} to="/recomendacoes">Recomendado</Link>
                    </motion.li>
                    <motion.li 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.30}}
                        className={styles.itemlist}>
                        <a className={styles.a_link} href="https://www.worldofdarkness.com" target="blank">Site</a>
                    </motion.li>
                </ul>
        </div> 
     );
}

export default NavLinksDeskRight;