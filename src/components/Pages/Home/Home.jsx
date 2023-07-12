import Header from './HomeCSS/Header/Header';
// import Frase from './HomeCSS/Frase/Frase';
// import Apresentacao from './HomeCSS/Apresentacao/Apresentacao';
import Footer from '../../layout/Footer/Footer';
import ImagemPrincipal from '../../layout/ImagemPrincipal/ImagemPrincipal';
import styles from './homecss.module.css'
import Apresentacao2 from './HomeCSS/Apresentacao/Apresentacao2.jsx';
import NavTopBar from '../../layout/NavTop/NavTopBar';
// import CardsSistemas from '../../layout/CardsSistemas/CardsSistemas';


function Home() {
    
    return (
        <>
            <NavTopBar />
            <div className={styles.div_home}>
                <Header />
                <ImagemPrincipal />
                {/* <Frase /> */}
                <Apresentacao2 />
                {/* <Apresentacao /> */}
                {/* <CardsSistemas /> */}
            </div>
            <Footer />
        </>

    )
}

export default Home;