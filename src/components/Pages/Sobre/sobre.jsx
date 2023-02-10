import Footer from '../../layout/Footer/Footer';
import NavLinks from './components/NavLinks';
import Title from '../Sobre/components/Title.jsx';
import styles  from '../Sobre/sobre.module.css'
import Text from '../Sobre/components/Text'


function Sobre() {

    return (
        <>
            <div className={styles.divSobre}>
                <NavLinks />
                <Title />
            </div>
            <Text />
            <Footer />
        </>
    )
}

export default Sobre