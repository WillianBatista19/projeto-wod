import Title from "./Tilte/Title"
import styles from './header.module.css'
import NavBar from "./Navbar/NavBar"
import NavLinksDesk from "./Navbar/NavLinksDesk"
import NavLinksDeskRight from "./Navbar/NavLinksDeskRight"

function Header() {
    return(
        <>
            <NavBar />
            <div className={styles.header}>
                <NavLinksDesk />
                <Title />
                <NavLinksDeskRight />
            </div> 
        </>
       
    )
}

export default Header