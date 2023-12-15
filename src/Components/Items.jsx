import React from 'react'
import "./Items.css";
const Items = (props) => {
  const listRemoveHandler = () => {
    document.getElementById(props.id).remove();
  }
  return (
    <li className='list' id={props.id}>
      <div className='prog-img'>
        <img src={props.img} alt="samsung" />
      </div>
      <div className="title">
        <h3>{props.title}</h3>
        <p> {props.discription}</p>
      </div>
      <div className='add-minus'>
        <i class="ri-subtract-line"></i>
        <input type="text" />
        <i class="ri-add-line"></i>
      </div>
      <div className="price">
        <h3>{props.price}</h3>
      </div>
      <div className="remove">
        <i class="ri-delete-bin-6-line" onClick={listRemoveHandler}></i>
      </div>
    </li>
  )
}

export default Items