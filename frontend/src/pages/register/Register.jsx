import styles from './Register.module.css';
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <div className={styles.divTitle}>
                    <span className={styles.title}>Junte-se a nossa comunidade de leitores!</span>
                    <span className={styles.subtitle}>Preencha o formulário ao lado para criar sua conta e começar a explorar nosso acervo de livros.</span>
                </div>

                <form className={styles.form}>
                    <div className={styles.divItem}>
                        <label>Nome Completo</label>
                        <input type="text" placeholder="Digite seu nome completo" />
                    </div>
                    <div className={styles.divItem}>
                        <label>CPF</label>
                        <input type="text" placeholder="Digite seu CPF" />
                    </div>
                    <div className={styles.divItem}>
                        <label>Telefone</label>
                        <input type="text" placeholder="Digite seu telefone" />
                    </div>
                    <div className={styles.divItem}>
                        <label>E-mail</label>
                        <input type="text" placeholder="Digite seu e-mail" />
                    </div>

                    <div className={styles.divItem}>
                        <label>Senha:</label>
                        <input type="password" placeholder="Digite sua senha" />
                    </div>

                    <div className={styles.divSubmit}>
                        <button type="submit" onClick={() => navigate('/acervo')}
                        >Cadastrar</button>
                    </div>

                    <div className={styles.divRegister}>
                        <label>Já possui uma conta?</label>
                        <button type="button" onClick={() => navigate('/login')}
                        >Login</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Register;