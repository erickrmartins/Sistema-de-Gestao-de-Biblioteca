import styles from './Profile.module.css'
import ProfilePicture from '../../assets/profile-picture.svg?react'
import BookIcon from '../../assets/book.svg?react'
import { Link } from 'react-router-dom'
import { DataProfile } from '../../fake-data/DataProfile.jsx'
import { DataBooks } from '../../fake-data/DataBooks.jsx'
import { DataLoans } from '../../fake-data/DataLoans.jsx'
import Book from '../../components/book/Book.jsx'

function Profile() {
    const user = DataProfile();
    const books = DataBooks();
    const loans = DataLoans();

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    function getTillDate(date) {
        let eta = new Date(date + "T00:00:00");
        let tillDate = Math.round((eta - today) / (1000 * 60 * 60 * 24));
        let result;

        if (tillDate < 0) {
            result = "atrasado";
        } else {
            if (tillDate === 0) {
                result = "hoje";
            } else {
                if (tillDate === 1) {
                    result = "amanha";
                } else {
                    result = tillDate + " DIAS";
                }
            }
        }

        return (<span className={styles[result]}>{"" + result.toUpperCase()}</span>);
    }

    return (
        <div className={styles.container}>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <Link to='/perfil/emprestimos' className={styles.cardTitle}>Empréstimos Atuais</Link>
                    <div className={styles.items}>
                        {loans.map((loan) => (
                            <div className={styles.book}><Book key={loan.id} book={loan.copy.book} /></div>
                        ))}
                            </div>
                </div>

                    <div className={styles.card}>
                        <Link to='/perfil/historico' className={styles.cardTitle}>Histórico de Leitura</Link>
                        <div className={styles.items}>
                            {books.slice(-5).map((book) => (
                                <Book key={book.id} book={book} className={styles.book} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className={styles.char}>
                    <ProfilePicture className={styles.icon} />
                    <div className={styles.data}>
                        <span className={styles.name}>{user.name}</span>
                        <span className={styles.since}>Membro desde {user.createdAt.split('/')[2]}</span>
                    </div>
                    <button className={styles.infoButton}>Visualizar Informações</button>
                </div>


            </div>
            )
}
            export default Profile;