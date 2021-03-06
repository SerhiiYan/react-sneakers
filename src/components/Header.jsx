import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

const Header = ({onClickCart}) => {

  const {price} = useCart()

  return (
    <header className="d-flex justify-between align-center p-40">
    <Link to="/">
      <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="sneakers" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Shop with the best sneakers</p>
          </div>
      </div>
    </Link>
      <ul className="d-flex">
        <li onClick={onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src="/img/cart.svg" alt="cart" />
          <span>{price}</span>
        </li>
        <li className="mr-20 cu-p">
          <Link to="favorites">
            <img width={18} height={18} src="/img/heart.svg" alt="heart" />
          </Link>
        </li>
        <li className="cu-p">
          <Link to="orders">
            <img width={18} height={18} src="/img/user.svg" alt="user" />
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;