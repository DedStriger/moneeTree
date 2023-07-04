import styles from '../DashboardView.module.scss';

export default function Cards({items}){
    return(
        <div className={styles.cards}>
            {
                items.map(i => (
                    <div className={styles.card} key={i.title + i.text}>
                        <div className={styles.card__title}>{i.title}</div>
                        <div className={styles.card__text}>{i.text}</div>
                    </div>
                ))
            }
        </div>
    )
}
