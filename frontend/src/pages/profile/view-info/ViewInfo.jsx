import styles from './ViewInfo.module.css'
import { DataProfile } from '../../../fake-data/DataProfile.jsx'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Dialog from '../../../components/dialog/Dialog.jsx'

function ViewInfo() {
    const usuario = DataProfile();
    const [showDialog, setShowDialog] = useState(false);

    return (
        <div className={styles.container}>
            <Dialog 
            open={showDialog}
            title='Confirmar desativação da Conta'
            subTitle='Tem certeza que deseja desativar a sua conta?'
            textNegative='Desativar'
            doNegative={null}
            textPositive='Voltar'
            doPositive={() => setShowDialog(false)}
            />
            <h1>Visualizar Infomações</h1>
            <h2>Mantenha seus dados pessoais e de acesso atualizados.</h2>
            <div className={styles.dados}>
                <label>Dados Pessoais</label>
                <div>
                    <div className={`${styles.divInputI} ${styles.disabled}`}>
                        <label>Nome:</label>
                        <input type='text' value={usuario.name} disabled />
                    </div>
                    <div className={`${styles.divInputII} ${styles.disabled}`}>
                        <label>CPF:</label>
                        <input type='text' value={usuario.CPF} disabled />
                    </div>
                    <div className={styles.divInputII}>
                        <label>Telefone:</label>
                        <input type='text' placeholder={usuario.phone} />
                    </div>
                </div>

            </div>
            <div className={styles.dados}>
                <label>Credenciais de acesso</label>
                <div>
                    <div className={styles.divInputI}>
                        <label>E-mail:</label>
                        <input type='text' placeholder={usuario.email} />
                    </div>
                    <div className={styles.divInputII}>
                        <label>Senha:</label>
                        <input type='password' placeholder='*********' />
                    </div>
                </div>
            </div>
            <div className={styles.buttons}>
                <button className={styles.desativar}
                    onClick={() => setShowDialog(true)}
                >Desativar</button>
                <div>
                    <Link to='/perfil' className={styles.cancelar}>Cancelar</Link>
                    <button type='submit'>Salvar</button>
                </div>
            </div>
        </div>
    )
}

export default ViewInfo;