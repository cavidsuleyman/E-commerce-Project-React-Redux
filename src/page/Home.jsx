import React from 'react'
import Product from '../components/Product'
import { FloatButton } from 'antd';

const Home = () => {



  return (
    <>
        <div className='home-main'>
          <Product/>
        </div>
        <FloatButton.BackTop />
    </>
    
  )
}

export default Home