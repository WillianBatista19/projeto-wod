import Header from './HomeCSS/Header/Header';
import Frase from './HomeCSS/Frase/Frase';
import Apresentacao from './HomeCSS/Apresentacao/Apresentacao';
import Footer from '../../layout/Footer/Footer';
import ImagemPrincipal from '../../layout/ImagemPrincipal/ImagemPrincipal';


function Home() {
    
    return (

        <>
            <Header />
            <ImagemPrincipal />
            <Frase />
            <Apresentacao />
            <Footer />
        </>

    )
}

export default Home;