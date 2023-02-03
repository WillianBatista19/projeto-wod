import styles from '../../components/Pages/Home/HomeCSS/home.module.css'

function Footer() {
    return (
        <>
            <div className={styles.footer}>
                <p className={styles.p_footer}>Follow us:</p>
                <a className={styles.logo_footer} href="https://github.com/WillianBatista19" target="blank"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="logo-github" /></a>
                <a className={styles.logo_footer} href="https://www.instagram.com/natalnalua" target="blank"><img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="logo-instagram" /></a> 
                <a className={styles.logo_footer} href="https://www.linkedin.com/in/willian-alves-batista-b32b14206" target="blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="logo-linkedin" /></a> 
                <a className={styles.logo_footer} href="https://twitter.com/Natalnalua" target="blank"><img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="logo-twitter" /></a>
            </div>

            <div className={styles.footer2}>
                <p className={styles.p_footer}>Follow us:</p>
                    <a className={styles.logo_footer} href="https://github.com/WillianBatista19" target="blank"><img src="https://img.icons8.com/plasticine/42/null/github-squared.png" alt="logo_github" /></a>
                    <a className={styles.logo_footer} href="https://www.instagram.com/natalnalua" target="blank"><img src="https://img.icons8.com/fluency/42/null/instagram-new.png" alt="logo-Instagram" /></a> 
                    <a className={styles.logo_footer} href="https://www.linkedin.com/in/willian-alves-batista-b32b14206" target="blank"><img src="https://img.icons8.com/fluency/42/null/linkedin.png" alt="logo-linkedin" /></a> 
                    <a className={styles.logo_footer} href="https://twitter.com/Natalnalua" target="blank"><img src="https://img.icons8.com/color/42/null/twitter-squared.png" alt="logo-twitter" /></a>
            </div>
        </>
    )
}
export default Footer