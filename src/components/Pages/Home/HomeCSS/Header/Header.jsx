import Title from "./Tilte/Title"
import styles from '../../HomeCSS/Header/Css/header.module.css'
import NavBar from "./Navbar/NavBar"

function Header() {
    return(
        <>
            <NavBar />
            <div className={styles.header}>
                <Title />
            </div> 
        </>
       
    )
}

export default Header