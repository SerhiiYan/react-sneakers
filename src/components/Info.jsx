import React, { useContext } from 'react';
import { AppContext } from '../App';

const Info = ({title, image, description}) => {

  const {setCartOpen} = useContext(AppContext)
  
  

  return (
    <div className='cartEmpty d-flex align-center justify-center flex-column'>
      <img width={120} height={120} className="mb-20" src={image} alt="empty cart" />
      <h2>{title}</h2>
      <p className='opacity-6'>{description}</p>
      <button onClick={() => setCartOpen(false)} className='greenButton'>
        <img src="/img/arrow.svg" alt="arrow" />
        back
      </button>
    </div>
  );
};

export default Info;