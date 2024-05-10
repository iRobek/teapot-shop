
'use client';

import * as React from 'react';
import Container from '@mui/material/Container';
import { useState, useEffect } from 'react';
import styles from "../dashboard.module.css";
import { Rotate90DegreesCcw } from '@mui/icons-material';


export  default function AdminDashboard() {

  //get total number or orders
  //get total sales
  //get list of orders

  const [orders, setOrders] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3000/api/displayOrders')
      .then((res) => res.json())
      .then((orders) => {
        setOrders(orders)
      })
    }, []);

    //count of orders
    const [orderCnt, setOrderCnt] = useState(null)

    useEffect(() => {
        fetch('http://localhost:3000/api/ordersCount')
        .then((res) => res.json())
        .then((orderCnt) => {
            setOrderCnt(orderCnt)
        })
        }, []);

    // total value of orders    
    // const [orderSum, setOrderSum] = useState(null)

    // useEffect(() => {
    //  fetch('http://localhost:3000/api/ordersSum')
    //      .then((res) => res.json())
    //      .then((orderSum) => {
    //          setOrderSum(orderSum)
    //      })
    //  }, [])


     const [weather, setWeatherData] = useState(0)

     useEffect(() => {
     fetch('http://localhost:3000/api/getWeather')
      .then((res) => res.json())
      .then((weather) => {
        setWeatherData(weather)
      })
    },[])

  

  //if(!orders) return<p>Loading...</p>
   
  return (
      <Container component="main"  maxWidth="md">
      <br/>
      <div style={{fontSize: '40px'}} >
          Todays temperature: {JSON.stringify(weather.temp)} &deg;C
      </div>
      <br/>
      <div style={{fontSize: '40px'}} >
            Number of orders: {orderCnt}
      </div>
      <br/>

       {/* <div style={{fontSize: '40px'}} >
           Total sales: {orderSum}
      </div>  */}

      <div style={{fontSize: '40px'}} >
          Orders
      </div>
     <div className={styles.container}>
            <table>
                <tr>
                    <th>Order ID</th>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
                {orders.map((order) => (
                <tr key={order._id}>
                    <td>{order._id}</td>
                    <td>{order.product_name}</td>
                    <td>{order.quantity}</td>
                    <td>{order.product_price}</td>
                </tr>
                ))}
            </table>
        </div> 
      </Container>

    
      );

}