// import { getProducts } from "./api/getProducts/route";


'use client';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Image from 'next/image'

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {ThemeProvider } from '@mui/material/styles';

import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';
import { useState, useEffect } from 'react';

import styles from "./dashboard.module.css";


export default function Dashboard() {

  //Function for adding items into the cart
  function addToCart(prodName) {
    console.log(prodName);
    fetch("http://localhost:3000/api/addToCart?prodName="+prodName);
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

  const theme = createTheme({
    palette: {
     
      secondary: {
        main: green[500],
      },
    },
    });
   
    return (

      <ThemeProvider theme={theme}>
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
                <Button onClick={()=>addToCart(product.name)} variant="outlined"> Add to cart </Button>
              </div>
            ))
          }
      </div>
    
      </Container>
    
      </ThemeProvider>
    
      );

}