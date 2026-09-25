import styles from './Profile.module.css'
import ProfilePicture from '../../assets/profile-picture.svg?react'
import { DataProfile } from '../../fake-data/DataProfile.jsx'
import { DataBooks } from '../../fake-data/DataBooks.jsx'
import { DataLoans } from '../../fake-data/DataLoans.jsx'
import Book from '../../components/book/Book.jsx'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Profile() {
    const user = DataProfile();
    const books = DataBooks();
    const loans = DataLoans();
    const [show, setShow] = useState('emprestimos');

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

        return (
            <div className={styles.tillDate}>
                <span className={styles[result]}>{result.toUpperCase()}</span>
            </div>
        );
    }

    function getLoansByUser(loan) {
        return (loan.idPerfil.id != user.id) ? null : (
            <Book key={loan.id} book={loan.idExemplar.idLivro} className={styles.book} />
        )

    }

    function callHistory() {
        return loans.map((loan) => {
            if (loan.status === 'Devolvido') {
                return getLoansByUser(loan);
            }
            return null;
        });
    }

    function callLoans() {
        return loans.map((loan) => {
            if (loan.status != 'Devolvido') {
                return (
                    <div className={styles.emprestimosLivro}>
                        {getTillDate(loan.dtEta)}
                        {getLoansByUser(loan)}
                    </div>
                )
            }
            return null;
        });
    }

    return (
        <div className={styles.container}>
            <div className={styles.char}>
                <img src={`/profilePictures/${user.id}.jpe`} className={styles.icon} />
                <div className={styles.data}>
                    <span className={styles.name}>{user.name}</span>
                    <span className={styles.since}>Membro desde {user.createdAt.split('/')[2]}</span>
                </div>
                <Link to='/perfil/visualizar-informacoes' className={styles.infoButton}>Visualizar Informações</Link>
            </div>

            <div className={styles.cards}>
                <div className={styles.buttons}>
                    <label>Mostrar: </label>
                    <button onClick={() => setShow('historico')} className={(show === 'historico') ? styles.activeButton : styles.notActiveButton}>Historico</button>
                    <button onClick={() => setShow('emprestimos')} className={(show === 'emprestimos') ? styles.activeButton : styles.notActiveButton}>Emprestimos</button>
                </div>
                <div className={(show === 'emprestimos') ? styles.active : styles.notActive}>
                    <div className={styles.items}>
                        {callLoans()}
                    </div>
                </div>

                <div className={(show === 'historico') ? styles.active : styles.notActive}>
                    <div className={styles.items}>
                        {callHistory()}
                    </div>
                </div>
            </div>



        </div>
    )
}
export default Profile;