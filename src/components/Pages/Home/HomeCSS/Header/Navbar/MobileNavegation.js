import styles from './navbar.module.css'
import NavLinks from "./NavLinks";
import {CgMenuRound} from 'react-icons/cg'
import {CgCloseO} from 'react-icons/cg'
import { useState } from 'react';

const MobileNavigation = () => {

    const [open, setOpen] = useState(false);

    const hamburgerIcon = <CgMenuRound className={styles.hamburger} size='40px' color='white' onClick={() => setOpen(!open)} />

    const closeIcon = <CgCloseO className={styles.hamburger} size='40px' color='white' onClick={() => setOpen(!open)} />

    return (
        <nav className={styles.mobileNavigation}>
            {open ? closeIcon : hamburgerIcon}
            {open && <NavLinks />}
        </nav>
     );
}

export default MobileNavigation;