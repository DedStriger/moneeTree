import WalletLayout from "../../../components/WalletLayout/WalletLayout";
import Stake from "./components/Stake";
import Reward from "./components/Reward";
import {useCallback, useState} from "react";
import Modal from "./components/Modal";
import styles from './StakingView.module.scss'

export default function StakingView(){
    const [show, setShow] = useState(false)
    const [success, setState] = useState(false);
    const onSubmit = useCallback((e) => {
        e.preventDefault();
        setShow(false)
        setState(true)
        setTimeout(() => setState(false), 3000)
    }, [])
    return(
        <>
            <WalletLayout
                first={<Stake onClick={() => setShow(true)}/>}
                second={<></>}
                third={<Reward/>}
            />
            {show && <Modal onSubmit={onSubmit} close={() => setShow(false)} />}
            {success && <div className={styles.success}>success</div>}
        </>
    )
}
