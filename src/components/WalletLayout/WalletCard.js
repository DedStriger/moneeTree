import styles from './WalletLayout.module.scss';

export default function WalletCard(){
    return(
        <div className={styles.card}>
            <div className={styles.card__title}>My wallet</div>
            <div className={styles.item}>
                <div className={styles.item__title}>Balance</div>
                <div className={styles.item__info}>
                    <span><b>1,456</b></span>
                    <span>($35 USD)</span>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.item__title}>Total staked</div>
                <div className={styles.item__info}>
                    <span><b>1,456</b></span>
                    <span>($35 USD)</span>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.item__title}>Total to claim</div>
                <div className={styles.item__info}>
                    <span><b>1,456</b></span>
                    <span>($35 USD)</span>
                </div>
            </div>
        </div>
    )
}
