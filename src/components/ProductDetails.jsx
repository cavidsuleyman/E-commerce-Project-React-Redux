import React, { useState } from 'react'
import { productData } from '../fakedata/data'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cartSlice';



const ProductDetails = () => {

  const {id} = useParams();

  const product = productData.find(product => product.id == id);
  const [previewImg, setPreviewImg] = useState(product.cover[0].cover)
  const {name, price, category, cover} = product

  const dispatch = useDispatch()
  const addToCart = () => {
    dispatch(cartActions.addToCart({ id, name, price, cover }))
  }

  return (
    <div className='product-details-main'>
        <div className='product-details-cart-main'>
            <div className='details-cart-image'>
                <div className='cart-other-image'>
                    <div className='image-item' onClick={() => setPreviewImg(product.cover[1].cover)}>
                      <img src={product.cover[1].cover} alt="" />
                    </div>
                    <div className='image-item' onClick={() => setPreviewImg(product.cover[2].cover)}>
                      <img src={product.cover[2].cover} alt="" />
                    </div>
                    <div className='image-item' onClick={() => setPreviewImg(product.cover[3].cover)}>
                      <img src={product.cover[3].cover} alt="" />
                    </div>
                </div>
                <div className='cart-main-image'>
                    <img width='300' src={previewImg} alt="" />
                </div>
            </div>
            <div className='details-cart-desc'>
                <h2>{name}</h2>
                <div className='cart-desc-lorem'>
                  <p>Price: <span style={{background: '#d4f8c4'}}>${price}</span></p>
                  <p>Category: <span style={{background: '#d4f8c4'}}>{category}</span></p>
                </div>
                <button onClick={addToCart}>Add to Cart</button>
            </div>
        </div>       
    </div>
  )
}

export default ProductDetails