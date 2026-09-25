import styles from './Login.module.css';
import { Link } from 'react-router-dom';
import BackgroundEsquerda from '../../assets/background-login.png'

function Login() {

    return (
        <div className={styles.container}>
            <div className={styles.esquerda}>
                <img src={BackgroundEsquerda} alt='' className={styles.background} />
            </div>
            <form className={styles.form}>

                <div className={styles.divTitle}>
                    <h1>Bem-vindo de volta!</h1>
                    <h2>Digite suas credenciais para se autenticar na plataforma</h2>
                </div>

                <div className={styles.divEmail}>
                    <input type="email" placeholder="E-mail" />
                </div>

                <div className={styles.divPassword}>
                    <input type="password" placeholder="Senha" />
                    <Link to='/esqueci-senha' className={styles.buttonEsqueciSenha}>Esqueceu a senha?</Link>
                </div>

                <div className={styles.divSubmit}>
                    <Link to='/acervo' className={styles.buttonEntrar}><button>Entrar</button></Link>
                </div>

                <div className={styles.divRegister}>
                    <label>Não possui uma conta?</label>
                    <Link to='/cadastrar' className={styles.buttonCadastrar}>Cadastrar</Link>
                </div>

            </form>
        </div>
    )
}

export default Login;