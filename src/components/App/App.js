import styles from './App.module.scss';
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import {Routes, Route} from "react-router-dom";
import {CHART_URL, MAIN_URL, MIT_URL, STAKING_URL, SWAP_URL} from '../../utils/links';
import Comming from "../../pages/Comming/Comming";
import Dashboard from "../../pages/Dashboard";
import Staking from "../../pages/Staking";

function App() {
  return (
    <>
      <Header/>
        <main className={styles.main}>
            <Menu/>
            <Routes>
                <Route path={MAIN_URL} element={<Dashboard/>} />
                <Route path={SWAP_URL} element={<Comming/>} />
                <Route path={STAKING_URL} element={<Staking/>} />
                <Route path={CHART_URL} element={<Comming/>} />
                <Route path={MIT_URL} element={<Comming/>} />
            </Routes>
        </main>
    </>
  );
}

export default App;
