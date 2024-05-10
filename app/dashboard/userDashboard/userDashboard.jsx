
'use client';

import * as React from 'react';
import Button from '@mui/material/Button';
import Image from 'next/image'
import Container from '@mui/material/Container';
import { useState, useEffect } from 'react';
import styles from "../dashboard.module.css";


export  default function UserDashboard() {

  //Function for adding items into the cart
  function addToCart(prodName, prodPrice) {

    fetch(`api/addToCart?prodName=${prodName}&prodPrice=${prodPrice}`);

  }

  const [products, setProducts] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3000/api/getProducts')
      .then((res) => res.json())
      .then((products) => {
        setProducts(products)
      })
    }, [])
  

  if(!products) return<p>Loading...</p>
   
  return (
      <Container component="main"  maxWidth="xs">

      <div style={{fontSize: '40px'}} > Product list</div>

      <div>
        {products.map((product, i) => (
          <div className= {styles.prodCard} style={{padding: '20px'}} key={i} >
            Unique ID: {product._id}
            <br/>
            <div>
              <Image
              src={`/${product.img}.jpeg`}
              width={200}
              height={200}
              alt="Picture of the author"
              />
            </div>
              <h3>{product.name}</h3>
              <p>{product.desc}</p>
              Price: {product.price} EUR
              <br/>
            <Button onClick={()=>addToCart(product.name, product.price)} variant="outlined"> Add to cart </Button>
          </div>
        ))}
      </div>

      </Container>

    
      );

}