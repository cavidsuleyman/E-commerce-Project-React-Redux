import React from 'react'
import ProductCart from './ProductCart';
import Dashboard from './Dashboard';
import OrderSide from './OrderSide';
import SliderProduct from './SliderProduct';
import { productData } from '../fakedata/data';

const Product = () => {



 const scrollDeyis = () => {
    console.log(1);
  }

  return (
    <div className='hero' onScroll={scrollDeyis}>
        <Dashboard/>
        <OrderSide/>
        <SliderProduct/>
        <section className='product'>
        <div className='container grid3'>
          {productData.map((item) => (         
            <ProductCart key={item.id} id={item.id} cover={item.cover} name={item.name} price={item.price} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Product