
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './Signup';
import Login from './Login';
import Dashboard from './Dashboard';
import Transaction from './Transaction';
import Transaction1 from './Transaction1';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/transaction' element={<Transaction/>}></Route>
        <Route path='/transaction1' element={<Transaction1/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
