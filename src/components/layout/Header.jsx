import Navbar from "./Navbar"
import Navbar2 from "./Navbar2"
import Title from "./Title"
import styles from '../Pages/Home/HomeCSS/home.module.css'

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