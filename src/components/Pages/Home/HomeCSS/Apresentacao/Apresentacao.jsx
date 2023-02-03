import styles from '../../HomeCSS/Apresentacao/Css/apresentacao.module.css'
import FundoMago from '../../../../img/fundoMago.jpeg'
import FundoVamp from '../../../../img/fundoVamp.jpg'
import FundoLobo from '../../../../img/fundoLobo.jpg'

function Apresentacao() {
    return (
        <>
            <div className={styles.apresentacao}>
                <div>
                    <h2 className={styles.h2_apresentacao}>O que é RPG?</h2>
                    <p className={styles.p_apresentacao}>Do inglês, a sigla RPG significa “Role Playing Game", um jogo de interpretação de papéis. Indo muito mais além do que os clássicos jogos de tabuleiro, o jogador interpreta um personagem, levando em consideração suas emoções, personalidade e habilidades. Jogar RPG é muito mais que sentar em volta de uma mesa, é um hobby que estimula a imaginação, criatividade e desenvolvimento social.</p>
                </div>
                <img className={styles.img_apresentacao} src={FundoLobo} alt="Lobisomem: O Apocalipse"/>
            </div>

            <div className={styles.apresentacao}>
                <img className={styles.img_apresentacao_left} src={FundoVamp} alt="Vampiro: A Mascara"/>
                <div>
                    <h1 className={styles.h2_apresentacao}>O que é World of Darkness?</h1>
                    <p className={styles.p_apresentacao}>Mundo das Trevas é o nome dado a dois universos ficcionais relacionados, mas distintos, criados como configurações de campanha para role-playing games de horror originalmente da editora estadunidense White Wolf. O primeiro foi concebido por Mark Rein-Hagen, enquanto o segundo foi projetado por várias pessoas da White Wolf Gaming Studio, que Rein-Hagen ajudou a criar.</p>
                </div>
                <img className={styles.img_apresentacao_left2} src={FundoVamp} alt="Vampiro: A Mascara"/>
            </div>

            <div className={styles.apresentacao}>
                <div>
                    <h1 className={styles.h2_apresentacao}>Sobre o Projeto</h1>
                    <p className={styles.p_apresentacao}>O projeto foi criado pela junção de dois fatores, o estudo e o amor pelo RPG. O site foi projetado para fins de estudo na área da programação, e nada melhor do que estudar enquanto espalha seu hobby favorito. O objetivo do site é apresentar o universo de WoD para novos jogadores e os ensinar a jogar (ou servir de consulta para veteranos). <a href="https://github.com/WillianBatista19">Saiba mais!</a></p>
                </div>
                <img className={styles.img_apresentacao} src={FundoMago} alt="Mago: A Ascensão"/>
            </div>

        </>
    )
}

export default Apresentacao