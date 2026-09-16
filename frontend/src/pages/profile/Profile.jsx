import styles from './Profile.module.css'
import ProfilePicture from '../../assets/profile-picture.svg?react'
import BookIcon from '../../assets/book.svg?react'
import { Link } from 'react-router-dom'

function Profile() {
    const user = {
        name: "Nome Completo",
        memberSince: 2026,
        booksRead: 3
    }

    const books = [
        { id: 1, name: "Livro 1" },
        { id: 2, name: "Livro 2" },
        { id: 3, name: "Livro 3" },
        { id: 4, name: "Livro 4" },
        { id: 5, name: "Livro 5" },
        { id: 6, name: "Livro 6" },
    ]

    const loans = [
        {
            id: 1,
            book: books[0],
            tillDate: 2
        },
        {
            id: 2,
            book: books[1],
            tillDate: 3
        },
        {
            id: 3,
            book: books[2],
            tillDate: 3
        },
        {
            id: 4,
            book: books[3],
            tillDate: 2
        },
        {
            id: 5,
            book: books[4],
            tillDate: 3
        }
    ]

    return (
        <div className={styles.container}>
            <div className={styles.char}>
                <div className={styles.info}>
                    <ProfilePicture className={styles.icon} />
                    <div className={styles.data}>
                        <span className={styles.name}>{user.name}</span>
                        <span className={styles.since}>Membro desde {user.memberSince}</span>
                        <div className={styles.booksRead}>
                            <label>Livros Lidos</label>
                            <span>{user.booksRead}</span>
                        </div>
                    </div>
                </div>
                <button className={styles.infoButton}>Visualizar Informações</button>
            </div>

            <div className={styles.cards}>
                <div className={styles.card}>
                    <label className={styles.cardTitle}>Empréstimos Atuais</label>
                    <div className={styles.items}>
                        {loans.slice(-2).map((loan) => (
                            <Link to='/' key={loan.id} className={styles.item}>
                                <BookIcon className={styles.bookIcon} />
                                <div>
                                    <label>{loan.book.name}</label>
                                    <span
                                        className={loan.tillDate < 3 ? styles.close : styles.far}
                                    >Entrega em {loan.tillDate} dias.</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className={styles.card}>
                    <label className={styles.cardTitle}>Histórico de Leitura</label>
                    <div className={styles.items}>
                        {books.slice(-2).map((book) => (
                            <Link to='/' key={book.id} className={styles.item}>
                                <BookIcon className={styles.bookIcon} />
                                <label>{book.name}</label>
                            </Link>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile;