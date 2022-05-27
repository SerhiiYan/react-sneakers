import './App.scss'
import Users from './Users';

function App() {


  return (
    <div className="wrapper clear">

      <div style={{display: 'none'}} className="overlay">
        <div className="drawer">
          <h2 className='d-flex justify-between mb-30'>Cart
            <img className='cu-p' src="/img/btn-remove.svg" alt="btn remove" />
          </h2>
          <div className="items">
            <div className="cartItem d-flex align-center mb-20">
              <img className='mr-20' width={70} height={70} src="/img/sneakers/img1.jpg" alt="sneakers" />
              <div className='mr-20'>
                <p className='mb-5'>Men's Sneakers Nike Blazer Mid Suede</p>
                <b>69 $</b>
              </div>
              <img className='removeBtn' src="/img/btn-remove.svg" alt="btn remove" />
            </div>
            <div className="cartItem d-flex align-center mb-20">
              <img className='mr-20' width={70} height={70} src="/img/sneakers/img1.jpg" alt="sneakers" />
              <div className='mr-20'>
                <p className='mb-5'>Men's Sneakers Nike Blazer Mid Suede</p>
                <b>69 $</b>
              </div>
              <img className='removeBtn' src="/img/btn-remove.svg" alt="btn remove" />
            </div>
          </div>
          <div className="cartTotalBlock">
            <ul>
              <li>
                <span>Total:</span>
                <div></div>
                <b>69 $</b>
              </li>
              <li>
                <span>Tax 5%:</span>
                <div></div>
                <b>4.56 $</b>
              </li>
            </ul>
            <button className='greenButton'>Make a purchase <img src="/img/arrow.svg" alt="arrow" /></button>
          </div>
        </div>
      </div>

      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="sneakers" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Shop with the best sneakers</p>
          </div>
        </div>
        <ul className="d-flex">
            <li className="mr-30">
              <img width={18} height={18} src="/img/cart.svg" alt="cart" />
              <span>39 $</span>
            </li>
            <li>
              <img width={18} height={18} src="/img/user.svg" alt="user" />
            </li>
          </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>All sneakers</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input placeholder="Search..." />
          </div>
        </div>

        <div className="d-flex justify-around">
          <div className="card">
            <div className="favorite">
              <img src="/img/heart-unliked.svg" alt="Unliked" />
            </div>
            <img width={133} height={112} src="/img/sneakers/img1.jpg" alt="sneakers" />
            <h5>Men's Sneakers Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price: </span>
                <b>69 $</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/img2.jpg" alt="sneakers" />
            <h5>Men's Sneakers Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price: </span>
                <b>69 $</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/img3.jpg" alt="sneakers" />
            <h5>Men's Sneakers Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price: </span>
                <b>69 $</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/img4.jpg" alt="sneakers" />
            <h5>Men's Sneakers Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price: </span>
                <b>69 $</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
