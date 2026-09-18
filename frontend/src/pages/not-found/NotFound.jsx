import styles from './NotFound.module.css';
import { Link } from 'react-router-dom';

function NotFound() {

    return (
        <div>
            <h1>Página não encontrada</h1>
            <h2>Esta página não está em nosso acervo.</h2>
            <p>Verifique se o endereço digitado está correto ou clique no botão abaixo para retornar à página inicial.</p>
            <Link to='/'>Voltar ao acervo</Link>
        </div>
    )
}

export default NotFound;