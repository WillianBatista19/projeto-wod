import styles from '../../Sobre/sobre.module.css'

function Text() {
    return(
        <main className={styles.mainText}>
            <div className={styles.divText}>
                <h1 className={styles.hText} >World Of Darkness</h1>
                <section className={styles.sectionText}>
                    <p className={styles.pText} >Mundo das Trevas é o nome dado a dois universos ficcionais relacionados, mas distintos, criados como configurações de campanha para role-playing games de horror originalmente da editora estadunidense White Wolf. O primeiro foi concebido por Mark Rein-Hagen, enquanto o segundo foi projetado por várias pessoas da White Wolf Gaming Studio, que Rein-Hagen ajudou a criar.
                    </p>
                    <p className={styles.pText} >Em 2006 a White Wolf e suas propriedades intelectuais foram adquiridas pela CCP Games, uma desenvolvedora Irlandesa, que tinha o objetivo de desenvolver uma adaptação para vídeo game de World of Darkness.
                    </p>
                    <p className={styles.pText} >
                    O seu primeiro lançamento foi Vampiro: A Máscara em julho de 1991, seguido de Lobisomem: O Apocalipse em 1992, Mago: A Ascensão em 1993, Assombração: O Oblívio em 1994 e Changeling: O Sonhar em 1995, onde todos usavam o mesmo cenário e sistema base de regras.
                    </p>
                    <p className={styles.pText} >
                    Em 2015, novamente, a White Wolf e suas propriedades foram vendidas para a editora de videogames sueca Paradox Interactive. Onde teve o cenário reiniciado e nomeado de Crônicas das Trevas, permanecendo o antigo cenário com o nome de Mundo das Trevas, com o intuito de separar os dois para evitar confusões. 
                    </p>
                </section>
            </div>

            <div className={styles.divText} >
                <h1 className={styles.hText} >Projeto World Of Darkness</h1>
                <section className={styles.sectionText}>

                    <p className={styles.pText} >
                        O projeto foi criado pela junção de dois fatores, o estudo e o amor pelo RPG. O site foi projetado para fins de estudo na área da programação, e nada melhor do que estudar enquanto espalha seu hobby favorito. O objetivo do site é apresentar o universo de WoD para novos jogadores e os ensinar a jogar (ou servir de consulta para veteranos).
                    </p>
                    <p className={styles.pText} >
                        O projeto ainda não está concluído e será atualizado aos poucos, podendo ser possível acompanhar as próximas alterações que planejo implementar, pela tabela na página de “Novidades” , as mudanças de “Designer do site” e os “Próximos sistemas” que chegarão ao site.
                    </p>
                    <p className={styles.pText} >
                        Me chamo Willian, apelido NatalNaLua, (estranho, eu sei… uma longa história) sou estudante na área de programação, voltado principalmente para o Front-End. Jogo RPG desde 2014, e a por volta de 2021/2022 conheci o incrível cenário de Mundo das trevas através de um jovem Narrador (que não poderei citar o nome, pois não pedi permissão 🙂) que encontrei no primeiro semestre da faculdade (vida triste com cálculo 1).
                    </p>
                    <p className={styles.pText} >
                        ATENÇÃO, estou tentando espalhar a palavra do RPG ao mundo, porém tenho um limite até onde posso ir, por isso, esse site não irá disponibilizar materiais (PDF´s), ou qualquer documento de forma ilegal (pirata), dá qual não tenha permissão. É um site feito de fã para fã, onde recomendarei materiais gratuitos ou disponibilizados por criadores de conteúdo voltados ao assunto (você pode encontrar alguns na sessão de Recomendações).
                    </p>
                    <p className={styles.pText} >
                        De lá pra cá, o amor pelo cenário de Mundo das trevas  foi só aumentando, principalmente quando conheci Mago: A Ascensão, meu cenário favorito de RPG. Mas o problema começou quando percebi que não encontrava muito material sobre o assunto, ou a maioria estava em inglês, e resumindo para não fazer uma redação, aqui estou eu, criando um site para incentivar a novos jogadores, ou até mesmo a veteranos que se afastaram um pouco desse universo, a entrarem de cabeça e fazer o que existe de melhor nesse mundo: JOGAR RPG.
                    </p>
                    <p className={styles.pText} >
                        Atenção 2.0: Nas partes de muito texto o site será Branco e com fontes padrões, pelo bem de sua visão, mesmo que fique estranho, é o recomendado.
                    </p>
                </section>
            </div>
        </main>
    )
}

export default Text