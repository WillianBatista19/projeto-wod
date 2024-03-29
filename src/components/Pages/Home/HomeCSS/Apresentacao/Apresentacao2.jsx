import styles from '../../HomeCSS/Apresentacao/apresentacao.module.css'
import { Link } from 'react-router-dom'
import FundoMago from '../../../../img/fundoMago.jpeg'
import FundoVamp from '../../../../img/fundoVamp.jpg'
import FundoLobo from '../../../../img/fundoLobo.jpg'
import LoboCard from '../../../../img/lobo_banner.png'
import VampCard from '../../../../img/vamp_banner.png'
import MageCard from '../../../../img/mage_banner.jpg'
import MoreCard from '../../../../img/more_banner.jpg'

function Apresentacao2() {
    return (
        <div className={styles.geralApresentacao}>
            <div className={styles.separacao}>
                <h2>Apresentações</h2>
            </div>

            <div className={styles.gridApresentacao}>

                <div className={styles.apresentacao}>
                    <div>
                        <div className={styles.apresentacao2}>
                            <img className={styles.img_apresentacao} src={FundoLobo} loading='lazy' alt="Lobisomem: O Apocalipse"/>
                        </div>
                        <h2 className={styles.h2_apresentacao}>O que é RPG?</h2>
                        <p className={styles.p_apresentacao}>Do inglês, a sigla RPG significa “Role Playing Game", um jogo de interpretação de papéis. Indo muito mais além do que os clássicos jogos de tabuleiro, o jogador interpreta um personagem, levando em consideração suas emoções, personalidade e habilidades. Jogar RPG é muito mais que sentar em volta de uma mesa, é um hobby que estimula a imaginação, criatividade e desenvolvimento social.</p>
                    </div>
                </div>

                <div className={styles.apresentacao}>
                    <div>
                        <div className={styles.apresentacao2}>
                            <img className={styles.img_apresentacao} src={FundoVamp} loading='lazy' alt="Vampiro: A Mascara"/>
                        </div>
                        <h1 className={styles.h2_apresentacao}>O que é World of Darkness?</h1>
                        <p className={styles.p_apresentacao}>Mundo das Trevas é o nome dado a dois universos ficcionais relacionados, mas distintos, criados como configurações de campanha para role-playing games de horror originalmente da editora estadunidense White Wolf. O primeiro foi concebido por Mark Rein-Hagen, enquanto o segundo foi projetado por várias pessoas da White Wolf Gaming Studio, que Rein-Hagen ajudou a criar.</p>
                    </div>
                </div>

                <div className={styles.apresentacao}>
                    <div>
                        <div className={styles.apresentacao2}>
                            <img className={styles.img_apresentacao} src={FundoMago} loading='lazy' alt="Mago: A Ascensão"/>
                        </div>
                        <h1 className={styles.h2_apresentacao}>Sobre o Projeto</h1>
                        <p className={styles.p_apresentacao}>O projeto foi criado pela junção de dois fatores, o estudo e o amor pelo RPG. O site foi projetado para fins de estudo na área da programação, e nada melhor do que estudar enquanto espalha seu hobby favorito. O objetivo do site é apresentar o universo de WoD para novos jogadores e os ensinar a jogar (ou servir de consulta para veteranos). <Link to='/sobre'>Saiba mais!</Link></p>
                    </div>
                </div>
            </div>

            <div className={styles.Cards}>

                <div className={styles.CardImg}>
                    <img src={LoboCard} loading='lazy' alt="Lobo Banner" />
                </div>

                <div className={styles.CardImg}>
                    <img src={VampCard} loading='lazy' alt="Vampiro Banner" />
                </div>

                <div className={styles.CardImg}>
                    <img src={MageCard} loading='lazy' alt="Lobo Banner" />
                </div>

                <div className={styles.CardImg}>
                    <img src={MoreCard} loading='lazy' alt="Vampiro Banner" />
                </div>
                    
            </div>

        </div>
    )
}

export default Apresentacao2