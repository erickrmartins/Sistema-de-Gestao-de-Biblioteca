import styles from './NotFound.module.css';
import { Link } from 'react-router-dom';
import Engineer from '../../assets/hero-engineer.png'

function NotFound() {

    return (
        <div className={styles.container}>
            <div className={styles.dialog}>
                <img src={Engineer} />
                <h1>Página não encontrada</h1>
                <p>Verifique se o endereço digitado está correto ou clique no botão abaixo para retornar à página inicial.</p>
                <Link to='/'>Voltar ao acervo</Link>
            </div>
        </div>
    )
}

export default NotFound;