import styles from '../StakingView.module.scss';

const conf = [
    {
        id: '1',
        title: 'APR',
        first: '4%',
        second: '5%',
    },
    {
        id: '2',
        title: 'APR',
        first: '4%',
        second: '5%',
    },
    {
        id: '3',
        title: 'APR',
        first: '4%',
        second: '5%',
    }
]

export default function Stake({onClick}){
    return(
        <>
            {
                conf.map(c => (
                    <div className={styles.card} key={c.id} onClick={onClick}>
                        <div className={styles.card__title}>{c.title}</div>
                        <div className={styles.card__row}><span>Current APR(%)/day</span><span>{c.first}</span></div>
                        <div className={styles.card__row}><span>Referral link</span><span>{c.second}</span></div>
                    </div>
                ))
            }
        </>
    )
}
