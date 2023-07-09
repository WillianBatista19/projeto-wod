import FundoPrincipal from '../../img/fundoWod.jpg'
import styles from '../ImagemPrincipal/Css/imagemPrincipal.module.css'

function ImagemPrincipal() {
    return (
        <>
            <img className={styles.img} src={FundoPrincipal} loading='lazy' alt="World of Darkness"/>
        </>
    )
}

export default ImagemPrincipal