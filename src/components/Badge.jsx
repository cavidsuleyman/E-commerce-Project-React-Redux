import React, { useState } from "react"
import { BiShoppingBag } from "react-icons/bi"
import { AiOutlineClose } from "react-icons/ai"
import CartItems from "./CardItems";
import { useSelector } from "react-redux"

const Badge = () => {
  const [cardOpen, setCardOpen] = useState(false)
  const closeCard = () => {
    setCardOpen(null)
  }

  const quantity = useSelector((state) => state.cart.totalQuantity)
  const cartItems = useSelector((state) => state.cart.itemsList)

  let total = 0
  const itemsLists = useSelector((state) => state.cart.itemsList)
  itemsLists.forEach((item) => {
    total += item.totalPrice
  })

  return (
    <>
      <div className='card' onClick={() => setCardOpen(!cardOpen)}>
        <BiShoppingBag className='cardIcon' />
        <span className='flexCenter'>{quantity}</span>
      </div>
      <div className={cardOpen ? "overlay" : "nonoverlay"}></div>

      <div className={cardOpen ? "cartItem" : "cardhide"}>
        <div className='title flex'>
          <h2>Shopping Cart</h2>
          <button style={{border: "none", background: 'transparent', cursor: 'pointer'}} onClick={closeCard}>
            <AiOutlineClose className='icon' />
          </button>
        </div>
        {cartItems.map((item) => (
          <CartItems key={item} id={item.id} cover={item.cover[0].cover} name={item.name} price={item.price} quantity={item.quantity} totalPrice={item.totalPrice} />
        ))}

        <div className='checkOut'>
          <button>
            <span>Priced To Checkout</span>
            <label htmlFor=''>${total.toFixed(2)}</label>
          </button>
        </div>
      </div>
    </>
  )
}


export default Badge