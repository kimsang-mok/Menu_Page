import './App.scss';
import HomePage from './components/Pages/HomePage/HomePage';
import Menu from './components/Pages/MenuPage/Menu';
import SubMenu from './components/Pages/MenuPage/SubMenu';
import { Routes, Route } from "react-router-dom"
import Customize from './components/Pages/MenuPage/Customize';
import Rewards from './components/Pages/RewardsPage/Rewards';

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/rewards" element={<Rewards />} />
      <Route path="/:sub_category" element={<SubMenu />} />
      <Route path='/:item_type/:item_id' element={<Customize />} />
    </Routes>
  );
}

export default App;
