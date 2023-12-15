import React, { useContext } from 'react';
import Items from './Items';
import { Scrollbars } from 'react-custom-scrollbars';
import { CartContext } from './Cart';
const ContextCart = () => {
    const { item } = useContext(CartContext)
  return (
    <div>
        <header className="shopping">
        <img src="./images/271218.png" alt="arrow" className='arrow'/>
        <h3>Shopping Cart</h3>
        <div className='cartIcon'>
          <img src="./images/cart.png" alt="CartIcon" />
          <p>8</p> 
        </div>
    </header>
    <section className='main-cart-section'>
      <h2>Shopping Cart</h2>
      <p>You have <span>7</span> items in your cart</p>
    <div className='cart-items'>
    <Scrollbars>
      <div className='cart-items-container'>
        {item.map((cur)=>{
        return <Items
        id={cur.id} 
        key={cur.id} 
        title={cur.title} 
        discription={cur.description} 
        price={cur.price} 
        img={cur.img}
        />
        })}
      </div>
      </Scrollbars>
    </div>
    <div className="actions">
      <h3>Total Amount <span>23000</span></h3>
      <button>Cheakout</button>
    </div>
    </section> 
    </div>
  )
}

export default ContextCart