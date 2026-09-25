import styles from './Book.module.css';
import { Link } from 'react-router-dom';

function Book({book}) {

    return (
        <Link to={'/acervo/livro/' + book.ISBN} className={styles.book}>
            <img
                src={`/bookCovers/${book.id}.jpg`}
                alt={book.titulo}
            />
            <h1>{book.titulo}</h1>
            <h2>{book.idAutor.nome}</h2>
        </Link>
    )
}

export default Book;