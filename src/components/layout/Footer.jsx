import styles from '../../components/Pages/Home/HomeCSS/home.module.css'

function Footer() {
    return (
        <>
            <div className={styles.footer}>
                <a className={styles.p_footer} href="https://github.com/WillianBatista19">Willian Batista</a>
                <p className={styles.p_footer_follow}>Follow us:</p>
                <a className={styles.logo_footer} href="https://github.com/WillianBatista19" target="blank"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="Logo" /></a>
                <a className={styles.logo_footer} href="https://github.com/WillianBatista19" target="blank"><img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Logo" /></a> 
                <a className={styles.logo_footer} href="https://github.com/WillianBatista19" target="blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="Logo" /></a> 
                <a className={styles.logo_footer} href="https://github.com/WillianBatista19" target="blank"><img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="Logo" /></a>                 
            </div>
        </>
    )
}

export default Footer