import './App.scss';
import {Dashboard} from './pages/dashboard/dashboard';
import { Header } from './components/header/header';
function App() {
  return (
    <>
    <header><Header/></header>
    <div className="container">
      <Dashboard></Dashboard>
    </div>
    </>
  );
}

export default App;
