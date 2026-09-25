import styles from './Register.module.css';
import { useNavigate } from 'react-router-dom';
import BackgroundEsquerda from '../../assets/background-registrar.png';
import { Link } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.esquerda}>
                <img src={BackgroundEsquerda} alt='' />
            </div>

            <form className={styles.form}>
                <div className={styles.divTitle}>
                    <h1>Seja um de nossos leitores!</h1>
                </div>
                <div className={styles.divItem}>
                    <input type="text" placeholder="Nome Completo" />
                </div>
                <div className={styles.divItem}>
                    <input type="text" placeholder="CPF" />
                </div>
                <div className={styles.divItem}>
                    <input type="text" placeholder="Telefone" />
                </div>
                <div className={styles.divItem}>
                    <input type="text" placeholder="E-mail" />
                </div>
                <div className={styles.divItem}>
                    <input type="password" placeholder="Senha" />
                </div>

                <div className={styles.divSubmit}>
                    <Link to='/acervo' className={styles.buttonCadastrar}><button>Cadastrar</button></Link>
                </div>

                <div className={styles.divRegister}>
                    <label>Já possui uma conta?</label>
                    <Link to='/login' className={styles.buttonEntrar}>Entrar</Link>
                </div>

            </form>
        </div>
    )
}

export default Register;