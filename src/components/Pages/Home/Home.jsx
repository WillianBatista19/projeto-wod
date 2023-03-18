import Header from './HomeCSS/Header/Header';
import Frase from './HomeCSS/Frase/Frase';
import Apresentacao from './HomeCSS/Apresentacao/Apresentacao';
import Footer from '../../layout/Footer/Footer';
import ImagemPrincipal from '../../layout/ImagemPrincipal/ImagemPrincipal';
import styles from './homecss.module.css'


function Home() {
    
    return (
        <>
            <div className={styles.div_home}>
                <Header />
                <ImagemPrincipal />
                <Frase />
                <Apresentacao />
            </div>
            <Footer />
        </>

    )
}

export default Home;