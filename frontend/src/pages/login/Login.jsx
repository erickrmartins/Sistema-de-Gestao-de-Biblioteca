import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    
    return (
        <div className={styles.container}>
            <form className={styles.form}>

                <div className={styles.divTitle}>
                    <span className={styles.title}>Bem-vindo de volta!</span>
                    <span className={styles.subtitle}>Digite suas credenciais para se autenticar na plataforma</span>
                </div>

                <div className={styles.divEmail}>
                    <label>E-mail:</label>
                    <input type="email" placeholder="Digite seu e-mail" />
                </div>

                <div className={styles.divPassword}>
                    <label>Senha:</label>
                    <input type="password" placeholder="Digite sua senha" />
                    <button type="button">Esqueceu a senha?</button>
                </div>

                <div className={styles.divSubmit}>
                    <button type="submit" onClick={() => navigate('/')}
                    >Entrar</button>
                </div>

                <div className={styles.divRegister}>
                    <label>Não possui uma conta?</label>
                    <button type="button" onClick={() => navigate('/registrar')}
                    >Cadastrar</button>
                </div>

            </form>
        </div>
    )
}

export default Login;