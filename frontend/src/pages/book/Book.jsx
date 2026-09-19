import styles from './Book.module.css';
import { DataBooks } from '../../fake-data/DataBooks';
import { useLocation, Link } from 'react-router-dom';
import BookIcon from '../../assets/Book.svg?react';
import { DataCopy } from '../../fake-data/DataCopy.jsx';

function Book() {
    const location = useLocation();

    function getBookByISBN() {
        const books = DataBooks();
        const path = location.pathname.split('/')[3];

        for (let c = 0; c < books.length; c++) {
            if (path === books[c].ISBN) {
                return books[c];
            }
        }
    }

    const book = getBookByISBN();

    function getBookCopies() {
        const copies = DataCopy();
        const bookCopies = [];

        for (let c = 0; c < copies.length; c++) {
            if (copies[c].book.id === book.id) {
                bookCopies.push(copies[c])
            }
        }

        return bookCopies;
    }

    const copies = getBookCopies();

    function getStatus() {
        let result = 'Esgotado';

        for (let c = 0; c < copies.length; c++) {
            if (copies[c].status === 'Disponível') {
                result = 'Disponível';
            }
        }

        return (
            <div className={styles.status}>
                <span className= {result === 'Disponível' ? styles.green : styles.red}>{result}</span>
                <Link className={styles.button}>
                {result === 'Disponível' ? "Reservar Livro" : "Entrar na Lista de Espera"}
                </Link>
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <BookIcon className={styles.icon} />
                {getStatus()}
            </div>

            <div className={styles.right}>
                <div className={styles.mainData}>
                    <span className={styles.genre}>{book.genre.toUpperCase()}</span>
                    <h1>{book.title}</h1>
                    <h2>por {book.author.nome}</h2>
                </div>

                <div className={styles.cardData}>
                    <div>
                        <label>Editora</label>
                        <span>Nome</span>
                    </div>
                    <div>
                        <label>Ano</label>
                        <span>{book.publishedAt}</span>
                    </div>
                    <div>
                        <label>Páginas</label>
                        <span>{book.numPages}</span>
                    </div>
                </div>

                <div className={styles.synopsis}>
                    <label>Sinopse</label>
                    <span>{book.synopsis}</span>
                </div>


            </div>
        </div>
    );
}

export default Book;