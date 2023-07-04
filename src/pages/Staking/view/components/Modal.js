import styles from './Modal.module.scss';
import {ReactComponent as Close} from "../../../../assets/close.svg";
import Button from "../../../../components/Button/Button";

export default function Modal({close}){
    return(
        <div className={styles.modal} onClick={close}>
            <div className={styles.card} onClick={(e) => e.stopPropagation()}>
                <Close className={styles.close} onClick={close} />
                <div className={styles.card__title}>Staking</div>
                <div className={styles.card__banner}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </div>
                <div className={styles.label}>Staking plan</div>
                <div className={styles.input}>
                    <select value='1 month | 4-6%'>
                        <option value="1 month | 4-6%">1 month | 4-6%</option>
                        <option value="1 month | 4-6%">1 month | 4-6%</option>
                        <option value="1 month | 4-6%">1 month | 4-6%</option>
                        <option value="1 month | 4-6%">1 month | 4-6%</option>
                    </select>
                </div>
                <div className={styles.label}>Staking plan</div>
                <div className={styles.input}>
                    <input type="text" value='0'/>
                    <span>BNB</span>
                </div>
                <div className={styles.bord}>
                    <div className={styles.bord__item}>
                        <span>Start date</span>
                        <span>07.05.2023</span>
                    </div>
                    <div className={styles.bord__item}>
                        <span>Finish date</span>
                        <span>12.05.2023</span>
                    </div>
                    <div className={styles.bord__item}>
                        <span>Percent</span>
                        <span>6%</span>
                    </div>
                    <div className={styles.bord__item}>
                        <span>Profit</span>
                        <span>200 BNB</span>
                    </div>
                </div>
                <Button
                    className={styles.btn}
                    title='Get'
                />
            </div>
        </div>
    )
}
