import styles from './App.module.scss';
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import {Routes, Route} from "react-router-dom";
import {CHART_URL, MAIN_URL, MIT_URL} from '../../utils/links';
import Comming from "../../pages/Comming/Comming";

function App() {
  return (
    <>
      <Header/>
        <main className={styles.main}>
            <Menu/>
            <Routes>
                <Route path={MAIN_URL} element={<></>} />
                <Route path={CHART_URL} element={<Comming/>} />
                <Route path={MIT_URL} element={<Comming/>} />
            </Routes>
        </main>
    </>
  );
}

export default App;
