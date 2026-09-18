import styles from './Profile.module.css'
import ProfilePicture from '../../assets/profile-picture.svg?react'
import BookIcon from '../../assets/book.svg?react'
import { Link } from 'react-router-dom'
import { DataProfile } from '../../fake-data/DataProfile.jsx'
import { DataBooks } from '../../fake-data/DataBooks.jsx'
import { DataLoans } from '../../fake-data/DataLoans.jsx'

function Profile() {
    const user = DataProfile();

    const books = DataBooks();

    const loans = DataLoans();

    return (
        <div className={styles.container}>
            <div className={styles.char}>
                <div className={styles.info}>
                    <ProfilePicture className={styles.icon} />
                    <div className={styles.data}>
                        <span className={styles.name}>{user.name}</span>
                        <span className={styles.since}>Membro desde {user.createdAt.split('/')[2]}</span>
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
                    <Link to='/perfil/emprestimos' className={styles.cardTitle}>Empréstimos Atuais</Link>
                    <div className={styles.items}>
                        {loans.slice(-2).map((loan) => (
                            <Link to={`/acervo/${loan.copy.book.ISBN}`}key={loan.id} className={styles.item}>
                                <BookIcon className={styles.bookIcon} />
                                <div>
                                    <label>{loan.copy.book.title}</label>
                                    <span>Entrega em x dias.</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className={styles.card}>
                    <Link to='/perfil/historico' className={styles.cardTitle}>Histórico de Leitura</Link>
                    <div className={styles.items}>
                        {books.slice(-2).map((book) => (
                            <Link to={`/acervo/${book.ISBN}`} key={book.id} className={styles.item}>
                                <BookIcon className={styles.bookIcon} />
                                <label>{book.title}</label>
                            </Link>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile;