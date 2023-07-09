import styles from './navbar.module.css'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'

const NavLinksDesk = () => {
    const animateFrom = {opacity: 0, y: -40}
    const animateTo = {opacity: 1, y: 0}

    return (
        <div className={styles.divListLeft}>
                <ul className={styles.list}>
                    <motion.li 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.05}}
                        className={styles.itemlist}>
                        <Link className={styles.a_link} to="/sobre">SOBRE</Link>
                    </motion.li>
                    <motion.li 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.10}}
                        className={styles.itemlist}>
                        <Link className={styles.a_link} to="/sistemas">SISTEMAS</Link>
                    </motion.li>
                </ul>
        </div> 
     );
}

export default NavLinksDesk;