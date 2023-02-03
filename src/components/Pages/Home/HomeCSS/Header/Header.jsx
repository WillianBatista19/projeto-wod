import Navbar from "./Navbar/Navbar"
import Navbar2 from "./Navbar/Navbar2"
import Title from "./Tilte/Title"
import styles from '../../HomeCSS/Header/Css/header.module.css'

function Header() {
    return(
       <div className={styles.header}>
                <Navbar />
                <Title />
                <Navbar2 />
        </div>
    )
}

export default Header