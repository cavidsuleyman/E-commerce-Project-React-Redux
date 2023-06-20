import { useContext, useEffect, useState } from 'react';
import './App.css';
import Account from './components/Account';
import Navbar from './components/Navbar';
import Home from './page/Home';
import { Button, Result } from 'antd';
import load_photo from './assets/image/logo.png'
import {BrowserRouter, Routes, Route, Outlet, Navigate, Link} from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import Registr from './page/Registr';
import Login from './page/Login'
import { AuthContext } from './context/AuthContext';


function App() {

const [loading, setLoading] = useState(false);

const {currentUser} = useContext(AuthContext);
// console.log(currentUser);


useEffect(() => {
  setLoading(true)
  setTimeout(() => {
      setLoading(false)
  }, 5000)
}, [])

  return (
    <>

{
      loading ? 
      <div className='loading-main'>
          <img src={load_photo} alt=''/>
      </div>

      :
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route>
                <Route path='/' element={<Home/>}/>        
                <Route path='/registr' element={<Registr/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/account' element={<Account/>}/>
                <Route path='product/:id' element={<ProductDetails/>}/>
                <Route path='*' element={<Navigate to="404"/>}/>
            </Route>
            <Route path='404' element={
                <Result
                className='error-side'
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={
                  <Link to="/">
                      <Button style={{background: "#1746A2"}} type="primary">Back Home</Button>
                  </Link> 
              }
              />            
            }/>
          </Routes>          
       </BrowserRouter>           
       
}
    </>
  );
}

export default App;
