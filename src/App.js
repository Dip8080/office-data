import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Tablehead from './Components/TableHead/Tablehead';
import MoneyFlow from './Components/MoneyFlow/MoneyFlow';

function App() {
  return (
    <div className="App">
      <MoneyFlow></MoneyFlow>

      <Header></Header>

      <Tablehead></Tablehead>

      

    </div>
  );
}

export default App;
