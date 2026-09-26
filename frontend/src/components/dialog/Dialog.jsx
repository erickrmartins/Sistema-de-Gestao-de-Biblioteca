import styles from './Dialog.module.css';

function Dialog({ open, title, subTitle, textPositive, doPositive, textNegative, doNegative }) {

    if (!open) {
        return null;
    }

    return (
        <div className={styles.filter}>
            <div className={styles.dialog}>
                <h1>{title}</h1>
                <h2>{subTitle}</h2>
                <div className={styles.buttons}>
                    <button className={styles.positive}
                        onClick={doPositive}
                    >{textPositive}</button>
                    <button className={styles.negative}
                        onClick={doNegative}
                    >{textNegative}</button>
                </div>
            </div>
        </div>
    )
}

export default Dialog;