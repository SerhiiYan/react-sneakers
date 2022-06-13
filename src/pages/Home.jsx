import { useContext } from 'react';
import { AppContext } from '../App';
import Card from '../components/Card/Card';


export default function Home({
  items, 
  searchValue, 
  setSearchValue, 
  onAddToCart, 
  onAddToFavorites,
  isLoading
}) {

  const renderItems = () => {
    const filterValue = items.filter(item => item.title.toLowerCase().includes(searchValue))
    return (
      (isLoading ? [...Array(12)] : filterValue).map((sneaker, index) => 
      <Card
          key={index}
          onAddToFavorites={onAddToFavorites}
          onAddToCart={onAddToCart}
          loading={isLoading}
          {...sneaker}
        />)
    )
  }

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>All sneakers</h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="search" />
          <input onChange={(e) => setSearchValue(e.target.value)} value={searchValue} placeholder="Search..." />
          <img onClick={() => setSearchValue(searchValue => searchValue = '')} className='search-block-btn cu-p' width={20} height={20} src="/img/btn-remove.svg" alt="btn remove" />
        </div>
      </div>

      <div className="d-flex flex-wrap justify-around">
        {renderItems()}
      </div>
    </div>
  )
}