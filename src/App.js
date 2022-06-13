import React, { useEffect, useState, createContext} from 'react'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Drawer from './components/Drawer/Drawer'
import Header from './components/Header'
import axios from 'axios'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import Orders from './pages/Orders'

export const AppContext = createContext({})

function App() {

  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [favorites, setFavorites] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [cartOpen, setCartOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  
  async function onAddToCart(item) {
    let existCard = cartItems.find(cartItem => cartItem.refId == item.id)
    if(existCard) {
      await axios.delete(`https://629489d4a7203b3ed06b09a5.mockapi.io/cart/${existCard.id}`)
      setCartItems(cartItems.filter(cartItem => cartItem.refId != item.id))
      } else {
        let {id, ...requestData} = item
        requestData = {refId: id, ...requestData}
        const {data} = await axios.post("https://629489d4a7203b3ed06b09a5.mockapi.io/cart", requestData)
        setCartItems([...cartItems, data])
      }
    }


  async function onAddToFavorites(item) {
    try {
      if(favorites.find(favorite => favorite.id == item.id)) {
        axios.delete(`https://629489d4a7203b3ed06b09a5.mockapi.io/favorites/${item.id}`)
        setFavorites(favorites => favorites.filter(favorite => favorite.id != item.id))
      } else {
        const {data} = await axios.post("https://629489d4a7203b3ed06b09a5.mockapi.io/favorites", item)
        setFavorites([...favorites, data])
      }
    } catch (error) {
      console.log('error onAddToFavorites');
    }
  }

  function onRemoveItem(id) {

    axios.delete(`https://629489d4a7203b3ed06b09a5.mockapi.io/cart/${id}`)
    setCartItems(cartItems => cartItems.filter(cartItem => cartItem.id != id))
  }

  function hasCartItem(id) {
    return cartItems.some(item => item.refId == id)
  }

  useEffect(() => {
    
    async function fetchData() {
      try {
        setIsLoading(true)
          const [cartResponse, favoritesResponse, itemsResponse] = await Promise.all([
          axios.get("https://629489d4a7203b3ed06b09a5.mockapi.io/cart"),
          axios.get("https://629489d4a7203b3ed06b09a5.mockapi.io/favorites"),
          axios.get("https://629489d4a7203b3ed06b09a5.mockapi.io/items")
        ])
        setCartItems(cartResponse.data)
        setFavorites(favoritesResponse.data)
        setItems(itemsResponse.data)
      } catch (error) {
        console.log('error fetchData');
      }
      setIsLoading(false)
    }
    fetchData()
  }, [])

  return (
    <AppContext.Provider value={{items, cartItems, favorites, onAddToFavorites, onAddToCart, setCartItems, setCartOpen, hasCartItem}}>

      <div className="wrapper clear">
        <Drawer onRemoveItem={onRemoveItem} opened={cartOpen}/>
        <Header onClickCart={() => setCartOpen(true)} />
        <Routes>
          <Route path='/' element={
            <Home 
              items={items} 
              cartItems={cartItems}
              searchValue={searchValue} 
              setSearchValue={setSearchValue} 
              onAddToCart={onAddToCart}
              onAddToFavorites={onAddToFavorites}
              isLoading={isLoading}
          />}
            />
          <Route 
            path='favorites' 
            element={<Favorites  onAddToFavorites={onAddToFavorites}/>}
          />
          <Route 
            path='orders' 
            element={<Orders />}
          />
          </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
