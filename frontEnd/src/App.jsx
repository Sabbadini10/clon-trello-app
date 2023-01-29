import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from '../pages/Login';
import Register  from '../pages/Register';
import RecoverPassword from '../pages/RecoverPassword';
import ForgetPassword from '../pages/ForgetPassword';
import Home from '../pages/Home';


function App() {
  return (
    <div className="App bg-opacity-75">
  <ul class="background">
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>
<Routes>
  <Route exact path='/' element={< Home />}></Route>
               <Route exact path='/login' element={< Login />}></Route>
               <Route exact path='/register' element={< Register />}></Route>
               <Route exact path='/recoverPassword' element={< RecoverPassword />}></Route>
               <Route exact path='/forgetPassword' element={< ForgetPassword />}></Route>
        </Routes>
      </div>


)
 
}

export default App
