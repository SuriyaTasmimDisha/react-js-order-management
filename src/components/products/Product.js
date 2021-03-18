import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function Product() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async() => {
       const data = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');

        const products = await data.json();
        const items = products.data;
        console.log(items);
        setItems(items);
    };

    return (
        <div>
           <h1>Product</h1> 
           {items.map( item => (
               <h4 key={item.itemId}>
               <Link to={`/product/${item.itemId}`}>{item.item.name}</Link>
               </h4>
           ))}
        </div>
    )
}

export default Product;