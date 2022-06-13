import React from 'react';

const CartItem = ({cartPrice, cartImageUrl, cartTitle, id, onRemoveItem}) => {

  return (
    <div className="cartItem d-flex align-center mb-20">
      <img className='mr-20' width={70} height={70} src={cartImageUrl} alt="sneakers" />
      <div className='mr-20'>
        <p className='mb-5'>{cartTitle}</p>
        <b>{cartPrice} $</b>
      </div>
      <img onClick={() => onRemoveItem(id)} className='removeBtn' src="/img/btn-remove.svg" alt="btn remove" />
    </div>
  );
};

export default CartItem;