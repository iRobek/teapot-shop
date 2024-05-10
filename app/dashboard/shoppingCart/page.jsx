'use client'

import { useState, useEffect } from 'react';
import styles from "./cart.module.css";
import Button from '@mui/material/Button';


export default function Cart () {
    
    function processOrder (prodName, prodQuant, prodPrice) {
            
    }
    
    //get cart content
    const [products, setProducts] = useState(null)

    useEffect(() => {
      fetch('http://localhost:3000/api/displayCart')
        .then((res) => res.json())
        .then((products) => {
          setProducts(products)
        })
      }, [])
    
  
    if(!products) return<p>Loading...</p>

    console.log(products);

    return (
        <div className={styles.container}>
            <table>
                <tr>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Total Amount</th>
                </tr>
                {products.map((prod) => (
                <tr key={prod._id}>
                    <td>{prod._id}</td>
                    <td>{prod.product_name}</td>
                    <td>1</td>
                    <td>25.00</td>
                </tr>
                ))}
            </table>
            <br/>
            <Button onClick={() => submitOrder(prod.product_name, prod.quantity, prod.price)}
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}>
                Place order
            </Button>
        </div>
    )
}