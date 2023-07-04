import styles from '../StakingView.module.scss';


export default function Reward(){
    return(

                    <div className={styles.card}>
                        <div className={styles.card__title}>ARP</div>
                        <div className={styles.card__row}><span>1 month</span><span>4-6%</span></div>
                        <div className={styles.card__row}><span>3 month</span><span>10%</span></div>
                        <div className={styles.card__row}><span>6 month</span><span>15%</span></div>
                        <div className={styles.card__row}><span>12 month</span><span>25%</span></div>
                    </div>
    )
}
