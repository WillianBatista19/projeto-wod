import Title from '../Recomendacao/components/Title'
import Footer from '../../layout/Footer/Footer'
// import NavLinks from '../../layout/NavLinks/NavLinks'
import styles from '../Recomendacao/recomendacoes.module.css'
import RecoVideos from './components/RecoVideos'
import ImagemPrinpical from '../../layout/ImagemPrincipal/ImagemPrincipal'


function Recomendacao() {
    return(
        <>
            <div className={styles.divSobre}>
                {/* <NavLinks /> */}
                <Title />
                <ImagemPrinpical />
                <RecoVideos />
                <Footer />
            </div>
        </>
    )
}

export default Recomendacao