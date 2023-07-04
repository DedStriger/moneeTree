import WalletLayout from "../../../components/WalletLayout/WalletLayout";
import Stake from "./components/Stake";
import Reward from "./components/Reward";
import {useState} from "react";
import Modal from "./components/Modal";

export default function StakingView(){
    const [show, setShow] = useState(false)
    return(
        <>
            <WalletLayout
                first={<Stake onClick={() => setShow(true)}/>}
                second={<></>}
                third={<Reward/>}
            />
            {show && <Modal close={() => setShow(false)} />}
        </>
    )
}
