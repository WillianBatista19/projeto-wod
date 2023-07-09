import Footer from '../../layout/Footer/Footer';
import Title from '../Sobre/components/Title.jsx';
import styles  from '../Sobre/sobre.module.css'
import Text from '../Sobre/components/Text'
import ToTop from '../../layout/ToTop'
import NavTopBar from '../../layout/NavTop/NavTopBar';

function Sobre() {

    return (
        <>
            <NavTopBar />
            <div className={styles.divSobre}>
                <Title />
            </div>
            <Text />
            <Footer />
            <ToTop />
        </>
    )
}

export default Sobre