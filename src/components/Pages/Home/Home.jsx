import styles from './HomeCSS/home.module.css';
import fundoWod from '../../img/fundoWod.jpg';
import Header from '../../layout/Header';
import Frase from '../../layout/Frase';
import Apresentacao from '../../layout/Apresentacao';
import Footer from '../../layout/Footer';

function Home() {
    
    return (

        <>
            <Header />
            <img className={styles.img} src={fundoWod} alt="World of Darkness" />
            <Frase />
            <Apresentacao />
            <Footer />
        </>

    )
}

export default Home;