// Products.js

import React from 'react'
import { useEffect, useState } from "react";
import axios from 'axios';
import "./Products.css";

export function Products() {
    const [product , setProducts] = useState([]);
  useEffect(()=>{
    const fetchData = async() => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data)
    }
    fetchData();
  },[])
  return (
    <div className="row" >
     <h1 class="head"> PRODUCT DETAILS </h1>
     <div >
        <h1 class="head">Employees list</h1>
        {product.map((record, i) =>
          <div key={i} className="App">
            <img src={record.image} />
            <br></br><br></br>
            <p>{record.title}</p>
            <p>RS: {record.price}</p></div>)}
      </div>
    </div>
  );
}