import React, {useState} from 'react';
import { AiOutlinePlusCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cartSlice';
import { message } from 'antd';



const ProductCart = ({id,cover, name, price}) => {

    const [like, setLike] = useState(true);
    const [messageApi, contextHolder] = message.useMessage();
    
    const success = () => {
        messageApi.open({
        type: 'success',
        content: 'You like this product',
        });
    };

    const dispatch = useDispatch()
    const addToCart = () => {
      dispatch(cartActions.addToCart({ id, name, price, cover }))
    }

    const likeHeart = () => {
        setLike(false)  
    }

    const disLikeHeart = () => {
        setLike(true)
    }

  return (
    <div className='box boxItems' id='product'>
        <Link to={`product/${id}`}>
            <div className='img'>
                <img src={cover[0].cover} alt='cover' />
            </div>
        </Link>
        <div className='details'>
          <h3>${price}</h3>
          <p>{name}</p>
          <button onClick={addToCart}>
            <AiOutlinePlusCircle />
          </button>
          {contextHolder}
          {
            like ? 

            <button onClick={success} >
                <AiOutlineHeart onClick={likeHeart} color='red'/>
            </button>

            :

            <button>
                <AiFillHeart onClick={disLikeHeart} color='red' />
            </button>
          }
          
        </div>
      </div>
  )
}

export default ProductCart