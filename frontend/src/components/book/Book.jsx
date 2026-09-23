import styles from './Book.module.css';
import { Link } from 'react-router-dom';

function Book({book}) {

    return (
        <Link to={'/acervo/livro/' + book.ISBN} className={styles.book}>
            <img
                src={book.cover}
                alt={book.title}
            />
            <h1>{book.title}</h1>
            <h2>{book.author.nome}</h2>
        </Link>
    )
}

export default Book;