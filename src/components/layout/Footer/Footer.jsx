import styles from '../../layout/Footer/Css/footer.module.css'

function Footer() {
    return (
        <>
            <div className={styles.footer}>
                
                <div className={styles.div_footer_list}>
                    <h3 className={styles.h3}>SOBRE</h3>

                    <ul className={styles.list_footer}>
                        <li className={styles.li_list_footer}><span>Atualizações</span></li>
                        <li className={styles.li_list_footer}><span>Projeto | WoD</span></li>
                        <li className={styles.li_list_footer}><span>World Of Darkness</span></li>
                    </ul>
                </div>

                <div className={styles.div_footer_list}>
                    <h3 className={styles.h3}>PLANOS</h3>

                    <ul className={styles.list_footer}>
                        <li className={styles.li_list_footer}><span>Novidades</span></li>
                        <li className={styles.li_list_footer}><span>Novos Sistemas</span></li>
                        <li className={styles.li_list_footer}><span>Mudanças no Designer</span></li>
                    </ul>
                </div>

                <div className={styles.div_footer_list}>
                    <h3 className={styles.h3}>SISTEMAS</h3>

                    <ul className={styles.list_footer}>
                        <li className={styles.li_list_footer}><span>Mago: A Ascensão</span></li>
                        <li className={styles.li_list_footer}><span>Vampiro: A Mascara</span></li>
                        <li className={styles.li_list_footer}><span>Lobisomem: O Apocalipse</span></li>
                </ul>
                </div>

                <div className={styles.div_footer_list}>
                    <h3 className={styles.h3}>COMO JOGAR?</h3>

                    <ul className={styles.list_footer}>
                        <li className={styles.li_list_footer}><span>Mago: 3º edição</span></li>
                        <li className={styles.li_list_footer}><span>Vampiro: 5º edição</span></li>
                        <li className={styles.li_list_footer}><span>Lobisomem: 3º edição</span></li>
                    </ul>
                </div>

                <div className={styles.div_footer_list_follow}>
                    <h3 className={styles.h3}>FOLLOW US</h3>

                    <a className={styles.logo_footer} href="https://github.com/WillianBatista19" target="blank"><img src="https://img.icons8.com/arcade/40/null/github.png" alt="logo_github" /></a>
                    <a className={styles.logo_footer} href="https://www.instagram.com/natalnalua" target="blank"><img src="https://img.icons8.com/fluency/40/000000/instagram-new.png" alt="logo-Instagram" /></a> 
                    <a className={styles.logo_footer} href="https://www.linkedin.com/in/willian-alves-batista-b32b14206" target="blank"><img src="https://img.icons8.com/color/40/null/linkedin-circled--v1.png" alt="logo-linkedin" /></a> 
                    <a className={styles.logo_footer} href="https://twitter.com/Natalnalua" target="blank"><img src="https://img.icons8.com/fluency/40/null/twitter-circled.png" alt="logo-twitter" /></a>
                </div>
            </div>
        </>
    )
}
export default Footer