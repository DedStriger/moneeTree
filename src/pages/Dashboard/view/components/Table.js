import styles from '../DashboardView.module.scss';
import {useState} from "react";

const conf = [
    {
        id: '1',
        name: 'Ivan',
        stake: '700 BNB',
        time: '1 month',
        percent: '4-6%',
        profit: '356 BNB'
    },
    {
        id: '2',
        name: 'Ivan',
        stake: '700 BNB',
        time: '1 month',
        percent: '4-6%',
        profit: '356 BNB'
    },
    {
        id: '3',
        name: 'Ivan',
        stake: '700 BNB',
        time: '1 month',
        percent: '4-6%',
        profit: '356 BNB'
    }
]

export default function Table(){
    const [state, setState] = useState('first')
    return(
        <div className={styles.table}>
            <div className={styles.header}>
                <div className={`${styles.header__item} ${state === 'first' && styles.header__item_active}`} onClick={() => setState('first')}>Holder rewards</div>
                <div className={`${styles.header__item} ${state === 'second' && styles.header__item_active}`} onClick={() => setState('second')}>Burnt</div>
                <div className={`${styles.header__item} ${state === 'third' && styles.header__item_active}`} onClick={() => setState('third')}>Holder Balance</div>
                <div className={`${styles.header__item} ${state === 'fourth' && styles.header__item_active}`} onClick={() => setState('fourth')}>Holder quantity</div>
            </div>
            <div className={styles.table__top}>
                <span>№</span>
                <span>Name</span>
                <span>Stake</span>
                <span>Time</span>
                <span>%</span>
                <span>Profit</span>
            </div>
            {
                conf.map(c => (
                    <div className={styles.table__row} key={c.id}>
                        <span>{c.id}</span>
                        <span>{c.name}</span>
                        <span>{c.stake}</span>
                        <span>{c.time}</span>
                        <span>{c.percent}</span>
                        <span>{c.profit}</span>
                    </div>
                ))
            }
        </div>
    )
}
