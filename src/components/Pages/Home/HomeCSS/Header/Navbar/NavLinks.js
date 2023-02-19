import styles from './navbar.module.css'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'

const NavLinks = () => {
    const animateFrom = {opacity: 0, y: -40}
    const animateTo = {opacity: 1, y: 0}

    return (
        <div className={styles.divList}>
                <ul className={styles.list}>
                    <motion.li 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.05}}
                        className={styles.itemlist}>
                        <Link className={styles.a_link} to="/sobre">Sobre</Link>
                    </motion.li>
                    <motion.li 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.10}}
                        className={styles.itemlist}>
                        <Link className={styles.a_link} to="/sistemas">Sistemas</Link>
                    </motion.li>
                    <motion.li
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.20}}
                        className={styles.itemlist}>
                        <Link className={styles.a_link} to="/recomendacoes">Recomendações</Link>
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

export default NavLinks;