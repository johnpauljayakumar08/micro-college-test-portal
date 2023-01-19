import Login from './components/login-page';
import Otp from './components/otp';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Test from './components/test';
import { Easy } from './components/easy';
import { Modurate } from './components/modurate';
import { Advance } from './components/advance';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Header } from './components/header';
function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
   <Route path="/" element = {<Login/>}/>
    <Route path="/otp" element = {<Otp/>}/>
    <Route path='/test' element={<Test/>}/>
    <Route path='/questions' element={<Easy/>}/>
    <Route path='/modurate' element={<Modurate/>}/>
    <Route path='/advance' element={<Advance/>}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
