import styles from './title.module.css'
import Logo from '../../../../../img/wod-logo.svg'

function Title() {
    return (
        <div className={styles.titles}>
            <img className={styles.logo} src={Logo} alt="Lobisomem: O Apocalipse"/>
            {/* <h2 className={styles.title}>WORLD OF</h2>
            <h1 className={styles.title1}>DARKNESS</h1> */}
        </div>
        
    )
}

export default Title