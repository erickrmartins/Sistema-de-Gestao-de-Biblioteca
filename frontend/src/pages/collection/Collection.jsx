import styles from './Collection.module.css';
import { DataBooks } from '../../fake-data/DataBooks';
import Book from '../../components/book/Book.jsx'
import { DataGenre } from '../../fake-data/DataGenre.jsx';
import { useState } from 'react';
import Circle from '../../assets/circle.svg?react'

function Collection() {
    const books = DataBooks();
    const genres = DataGenre();
    const recommendeds = books.filter((book) => book.recomendado === true);

    function getBooksByGenre(genre) {
        const filtered = books.filter((book) => book.idGenero.id === genre.id);

        return (filtered.length === 0) ? null :
            (
                <div className={styles.genreDiv}>
                    <label>{genre.nome}</label>
                    <div className={styles.books}>
                        {filtered.map((book) => {
                            return (
                                <Book key={book.id} book={book} />
                            )
                        }
                        )}
                    </div>
                </div>
            )
    }

    function recommendedSection(recommendeds) {
        const [counter, setCounter] = useState(0);

        const next = () => {
            if (counter === (recommendeds.length - 1)) {
                setCounter(0);
            } else {
                setCounter(counter + 1);
            }
        }

        let book = recommendeds[counter];

        return (
            <div className={styles.recommendedSection}>
                <div className={styles.recommendedDiv}>
                    <div className={styles.recommendedCover}>
                        <img src={`/bookCovers/${book.id}.jpg`} alt={book.titulo} />
                    </div>
                    <div className={styles.recommendedData}>
                        <span>{book.idGenero.nome}</span>
                        <h1>{book.titulo}</h1>
                        <h2>{book.idAutor.nome}</h2>
                        <p>{book.sinopsis}</p>
                    </div>
                    <div className={styles.next}>
                        <button onClick={next}>&gt;</button>
                    </div>
                </div>
                <div className={styles.circle}>
                    {recommendeds.map((book, index) => (
                        <button onClick={() => setCounter(index)}><Circle className={(index === counter) ? styles.active : styles.inactive} /></button>
                    ))}
                </div>

            </div>
        )

    }

    return (
        <div className={styles.container}>
            <div className={styles.recommended}>
                {recommendedSection(recommendeds)}
            </div>

            <div className={styles.main}>
                {genres.map((genre) => getBooksByGenre(genre))}
            </div>
        </div>
    )
}

export default Collection;