import './App.scss';
import {Dashboard} from './pages/dashboard/dashboard';
import { Header } from './components/header/header';
import { Panel } from './components/panel/panel';
function App() {
  return (
    <>
    <header><Header/></header>
    <div className="container">
      <Panel></Panel>
      <Dashboard></Dashboard>
    </div>
    </>
  );
}

export default App;
