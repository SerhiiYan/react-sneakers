import React, { useContext, useState } from 'react';
import axios from 'axios';
import { AppContext } from '../../App';
import CartItem from '../CartItem';
import Info from '../Info';
import { useCart } from '../../hooks/useCart';
import cls from './drawer.module.scss'

const Drawer = ({onRemoveItem, opened}) => {

  const [isOrderComplete, setIsOrderComplete] = useState(false)
  const [orderId, setOrderId] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const {cartItems, setCartOpen, setCartItems} = useContext(AppContext)
  
  const {price, tax} = useCart()

  function offDeligation(event) {
    if(event.target.className !== "drawer_overlay__5kirM drawer_overlayVisible__rwuqY") {
      console.log(event.target.className);
      return;
    }
    setCartOpen(false)
  }

  async function onClickOrder() {
    try {
      setIsLoading(true)
      const {data} = await axios.post('https://629489d4a7203b3ed06b09a5.mockapi.io/orders', {
        items: cartItems
      })
      for(const item of cartItems) {
        await axios.delete(`https://629489d4a7203b3ed06b09a5.mockapi.io/cart/${item.id}`)
      }
      setOrderId(data.id)
      setIsOrderComplete(true)
      setCartItems([])
    } catch (e) {
      console.log('error in order');
    }
    setIsLoading(false)
  }
  
  return (
    <div onClick={offDeligation} className={`${cls.overlay} ${opened ? cls.overlayVisible : ''}`}>
      <div className={cls.drawer}>
        <h2 className='d-flex justify-between mb-30'>Cart
          <img className='cu-p' onClick={() => setCartOpen(false)} src="/img/btn-remove.svg" alt="btn remove" />
        </h2>

        <div className='flex-column d-flex flex justify-between'>
          {
            cartItems.length ? 
            <>
            <div className={cartItems.length ? 'items' : 'empty'}> 
                <>
                  {cartItems.map((item) => 
                    <CartItem 
                    key={item.id} 
                    id={item.id} 
                    onRemoveItem={onRemoveItem} 
                    cartTitle={item.title} 
                    cartPrice={item.price} 
                    cartImageUrl={item.imageUrl}
                    />
                  )}
                </>
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Total:</span>
                  <div></div>
                  <b>{price}$</b>
                </li>
                <li>
                  <span>Tax 5%:</span>
                  <div></div>
                  <b>{tax} $</b>
                </li>
              </ul>
              <button disabled={isLoading} onClick={onClickOrder} className='greenButton'>
                Make a purchase 
                <img src="/img/arrow.svg" alt="arrow" />
              </button>
            </div>
            </>
            :
            <Info 
              title={isOrderComplete ? "Order Complete" : "Add product"}
              description={isOrderComplete ? `order id ${orderId}` : null} 
              image={isOrderComplete ? "/img/order-complete.svg" : "/img/empty-cart.png"}/>
          }
        </div>
      </div>
    </div>
  )
}

export default Drawer