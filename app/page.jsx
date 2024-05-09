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


export default function Home() {

  // const products = await getProducts();

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
    // <div>
    //   Product list
    //   {products.map((prod) => (
    //     <div key={prod._id}>
    //       <h1>{prod.name}</h1>
    //       <h3>{prod.desc}</h3>
    //       <h3>{prod.price}</h3>
    //     </div>
    //   ))}
    // </div>

      <ThemeProvider theme={theme}>
      <Container component="main"  maxWidth="xs">
     
         <div style={{fontSize: '40px'}} > Dashboard</div>
          <div>
        {
          products.map((product, i) => (
            <div style={{padding: '20px'}} key={i} >
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
              <br/>
              {product.name}
              <br/>
              Price: {product.price} EUR
              <br/>
              <Button variant="outlined"> Add to cart </Button>
            </div>
          ))
        }
      </div>
    
      </Container>
    
      </ThemeProvider>
    
      );

}