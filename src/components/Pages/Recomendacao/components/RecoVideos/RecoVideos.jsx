import styles from './recoVideos.module.css'

function RecoVideos() {
    return(
        <>
            <div className={styles.div_h1_videos_play}>
                    <h1 className={styles.h1_videos_play}>Procurando por mais?</h1>
            </div>
            <div>
                <section className={styles.section_videos}>
                    <div className={styles.div_videos}>
                        <div className={styles.title_videos_play} >
                            <h2 className={styles.h2_videos_play}>1. Novidades</h2>
                            <p className={styles.p_videos_play}>Vídeos para você que quer se manter atualizado e nem perder nada sobre o Mundo das Trevas. Conheça canais que produzem conteúdos sobre novidades no cenário!</p>
                        </div>

                        <div className={styles.div_videos_play}>
                            <iframe src="https://www.youtube-nocookie.com/embed/MjBudLUMbc0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                            <iframe src="https://www.youtube.com/embed/vvX8t1hMyi8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                            <iframe src="https://www.youtube.com/embed/HXd4vPoOFKQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                            <iframe src="https://www.youtube.com/embed/zuBmPV3Buwg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>
                </section>
            </div>

            <div>
                <section className={styles.section_videos}>
                    <div className={styles.div_videos}>
                        <div className={styles.title_videos_play} >
                            <h2 className={styles.h2_videos_play}>2. Como jogar</h2>
                            <p className={styles.p_videos_play}>Videos para você que quer aprender sobre regras e sistemas do Mundo das Trevas. Conheça aqui canais de criadores de conteúdos que ensinam como jogar!</p>
                        </div>

                        <div className={styles.div_videos_play}>

                            <iframe src="https://www.youtube.com/embed/cOSJj03zBNg" title="YouTube video player" frameborder="0"    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                            <iframe src="https://www.youtube-nocookie.com/embed/XqMRXO6FtWM" title="YouTube video player" frameborder="0"    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                            <iframe src="https://www.youtube.com/embed/w8V8RXSQEDE" title="YouTube video player" frameborder="0"    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                            <iframe src="https://www.youtube.com/embed/caN12NJYCmU" title="YouTube video player" frameborder="0"    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
                        </div>
                    </div>
                </section>
            </div>

            <div>
                <section className={styles.section_videos}>
                    <div className={styles.div_videos}>
                        <div className={styles.title_videos_play} >
                            <h2 className={styles.h2_videos_play}>3. Crônica</h2>
                            <p className={styles.p_videos_play}>Vídeos para você que quer assistir narrativas do Mundo das Trevas. Conheça aqui canais de criadores que jogam, ao vivo, em vários cenários!</p>
                        </div>

                        <div className={styles.div_videos_play}>

                            <iframe src="https://www.youtube.com/embed/XtOKFhCDjDE" title="YouTube video player" frameborder="0"    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 

                            <iframe src="https://www.youtube-nocookie.com/embed/FPne_UFhDjQ" title="YouTube video player" frameborder="0"    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 

                            <iframe src="https://www.youtube-nocookie.com/embed/zqED4wpGx6A" title="YouTube video player" frameborder="0"    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 

                            <iframe src="https://www.youtube.com/embed/dmokNliBQDo" title="YouTube video player" frameborder="0"    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
export default RecoVideos