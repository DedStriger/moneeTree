import styles from './Button.module.scss';

export default function Button({ title, className, ...rest}){
    return(
        <button className={`${className} ${styles.btn}`}>
            {title}
        </button>
    )
}
