import styles from './DashboardView.module.scss';
import Banner from "./components/Banner";
import Cards from "./components/Cards";
import Table from "./components/Table";

const cards = [
    {title: 'Supply Inicial', text: '1,456'},
    {title: 'Current Supply', text: '1,456'},
    {title: 'Burnt', text: '1,456'},
    {title: 'Holders', text: '1,456'}
]

const cardsSecond = [
    {title: 'Balance', text: '1,456'},
    {title: 'Total', text: '1,456'},
    {title: 'Receive', text: '1,456'},
    {title: 'System Blocks loaded', text: '1,456'}
]

export default function DashboardView(){
    return(
        <div className={styles.container}>
            <Banner/>
            <Cards items={cards}/>
            <Table/>
            <h3 className={styles.title}>Holder Status</h3>
            <Cards items={cardsSecond}/>
        </div>
    )
}
