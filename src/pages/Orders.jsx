import axios from 'axios';
import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { AppContext } from '../App';
import Card from '../components/Card/Card';

const Orders = () => {

  const [orders, setOrders] = useState([])
  const {onAddToFavorites, onAddToCart} = useContext(AppContext)
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    async function getOrders() {
      try {
        const {data} = await axios.get("https://629489d4a7203b3ed06b09a5.mockapi.io/orders")
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items],[]))
        setIsLoading(false)
      } catch (error) {
        console.log('get orders error');
      }
    }
    getOrders()
  }, [])

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>My Orders</h1>
        
      </div>

      <div className="d-flex flex-wrap justify-around">
        {(isLoading ? [...Array(12)] : orders).map((order, index) => {
          return (
            <Card 
              key={index} 
              {...order}
              loading={isLoading}
            />
          )
        }
        )}
      </div>
    </div>
  );
};

export default Orders;