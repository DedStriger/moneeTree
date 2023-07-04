import styles from './Menu.module.scss';
import {NavLink} from "react-router-dom";
import {CHART_URL, MAIN_URL, MIT_URL, STAKING_URL, SWAP_URL} from '../../utils/links';
import {ReactComponent as Dash} from "../../assets/dash.svg";
import {ReactComponent as Staking} from "../../assets/staking.svg";
import {ReactComponent as Swap} from "../../assets/swap.svg";
import {ReactComponent as Chart} from "../../assets/chart.svg";
import {ReactComponent as MIT} from "../../assets/find.svg";

const menu = [
    {
        id: '1',
        url: MAIN_URL,
        Icon: <Dash/>,
        text: 'Dashboard'
    },
    {
        id: '2',
        url: STAKING_URL,
        Icon: <Staking/>,
        text: 'Staking'
    },
    {
        id: '3',
        url: SWAP_URL,
        Icon: <Swap/>,
        text: 'Swap'
    },
    {
        id: '4',
        url: CHART_URL,
        Icon: <Chart/>,
        text: 'Chart'
    },
    {
        id: '5',
        url: MIT_URL,
        Icon: <MIT/>,
        text: 'MTT Audit'
    }
]

export default function Menu(){
    return(
        <div className={styles.menu}>
            {menu.map(i => (
                <NavLink
                    key={i.id}
                    className={({isActive}) => `${styles.item} ${isActive && styles.item__active}`}
                    to={i.url}
                >
                    {i.Icon}
                    <span>{i.text}</span>
                </NavLink>
            ))}
        </div>
    )
}
