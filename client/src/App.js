import Login from './components/login-page';
import Otp from './components/otp';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Test from './components/test';
import Questions from './components/questions';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
   <Route path="/" element = {<Login/>}/>
    <Route path="/otp" element = {<Otp/>}/>
    <Route path='/test' element={<Test/>}/>
    <Route path='/questions' element={<Questions/>}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
