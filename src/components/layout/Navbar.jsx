import styles from '../Pages/Home/HomeCSS/home.module.css'

function Navbar() {

    return (
        <ul className={styles.list}>
            <li className={styles.itemlist}>Sobre</li>
            <li className={styles.itemlist}>Sistemas</li>
        </ul>
    )
    
}

export default Navbar