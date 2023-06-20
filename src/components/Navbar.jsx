import React, { useState } from 'react';
import logo from '../assets/image/logo.png'
import Badge from './Badge';
import User from './User';
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { productData } from '../fakedata/data';

const Navbar = () => {

  const [searchTerm, setSearchTerm] = useState(productData);

const handleSearch = (e) => {
  e.preventDefault()
  let searchData= e.target.value;
  setSearchTerm(searchTerm.filter(v => v.name.toUpperCase().match(searchData.toUpperCase())))
  console.log(3);
}



  return (
    <nav>
        <Link to='/'>
          <img className='logo' src={logo} alt="" />
        </Link> 
        <form>
          <button style={{border: "none", background: "transparent"}} onClick={handleSearch}>
             <BsSearch/>
          </button>
          <input 
          onChange={handleSearch} 
          type="text" 
          placeholder='Search...' />
        </form>
        <div className='nav-right'>
            <Badge/>
            <User/>
        </div>
    </nav>
  )
}

export default Navbar