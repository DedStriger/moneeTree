import styles from './WalletLayout.module.scss';
import {useState} from "react";
import WalletCard from "./WalletCard";

export default function WalletLayout({first, second, third}){
    const [state, setState] = useState('first')
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <div className={`${styles.header__item} ${state === 'first' && styles.header__item_active}`} onClick={() => setState('first')}>Stake</div>
                    <div className={`${styles.header__item} ${state === 'second' && styles.header__item_active}`} onClick={() => setState('second')}>Unstake</div>
                    <div className={`${styles.header__item} ${state === 'third' && styles.header__item_active}`} onClick={() => setState('third')}>Reward</div>
                </div>
                {state === 'first' && first}
                {state === 'second' && second}
                {state === 'third' && third}
            </div>
            <WalletCard/>
        </div>
    )
}
