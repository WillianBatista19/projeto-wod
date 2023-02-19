import Footer from '../../layout/Footer/Footer';
import NavLinks from '../../layout/NavLinks/NavLinks';
import Title from '../Sobre/components/Title.jsx';
import styles  from '../Sobre/sobre.module.css'
import Text from '../Sobre/components/Text'
import ToTop from '../../layout/ToTop'


function Sobre() {

    return (
        <>
            <div className={styles.divSobre}>
                <NavLinks />
                <Title />
            </div>
            <Text />
            <Footer />
            <ToTop />
        </>
    )
}

export default Sobre