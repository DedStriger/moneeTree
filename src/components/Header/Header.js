import styles from './Header.module.scss';
import {ReactComponent as Logo} from '../../assets/logo.svg';
import Button from "../Button/Button";

export default function Header(){
    return(
        <header className={styles.header}>
                <Logo/>
                <Button
                    title='Connect'
                />
        </header>
    )
}
