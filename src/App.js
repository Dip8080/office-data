import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Tablehead from './Components/TableHead/Tablehead';
import MoneyFlow from './Components/MoneyFlow/MoneyFlow';
import { Route, Routes } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Requisition from './Components/Requisition/Requisition';
import Expenses from './Components/Expenses/Expenses';
import Madhob from './Components/Madhob/Madhob';




function App() {
  return (
    <div className="App">
      <Nav></Nav>
      

      <Routes>
        <Route path='/' element={<Requisition></Requisition>}></Route>
        <Route  path='expenses' element={<Expenses></Expenses>}></Route>
        <Route path='Madhob' element={<Madhob></Madhob>}></Route>
        
      </Routes>


    </div>
  );
}

export default App;
