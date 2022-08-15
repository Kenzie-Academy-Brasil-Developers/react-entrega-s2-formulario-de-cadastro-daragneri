import {Routes, Route, Navigate} from 'react-router-dom';
import Dashboard from './../pages/Dashboard';
import Login from './../pages/Login'
import Register from './../pages/Register';

function RoutesMain() {
  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='*' element={<Navigate replace to='/'/>}/>
    </Routes>     
  );
}

export default RoutesMain;