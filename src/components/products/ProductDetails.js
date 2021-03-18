import React, {useState, useEffect} from 'react';

function ProductDetails({match}) {
    useEffect(() => {
        fetchItem();
    }, []);

    const [item, setItem] = useState({
        images: {}
    });

    const fetchItem = async() => {
        const fetchItem = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`);
        const getItem = await fetchItem.json();
        const item = getItem.data.item;
        setItem(item);
        console.log(item);
    }

    return (
        <div>
           <h1>{item.name}</h1> 
           <img src={item.images.background} alt={item.name} />
           <p>{item.description}</p>
        </div>
    )
}

export default ProductDetails;