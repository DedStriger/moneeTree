import styles from '../DashboardView.module.scss';
import Button from "../../../../components/Button/Button";

export default function Banner(){
    return(
        <div className={styles.banner}>
            <div className={styles.banner__title}>Lorem ipsum Money Tree</div>
            <div className={styles.banner__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
            <Button
                className={styles.banner__btn}
                title='Buy and earn'
            />
        </div>
    )
}
