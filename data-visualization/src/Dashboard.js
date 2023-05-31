import React, { useState, useEffect } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://run.mocky.io/v3/7b5525b3-52cd-4511-adc2-94b517b33bca');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <img src={product.image} alt={product.name} style={{ width: '300px', height: '300px' }} />
            <h3>{product.name}</h3>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <p>Location: {product.location}</p>
            <p>Stock: {product.stock}</p>
            <p>Is New: {product.is_new ? 'Yes' : 'No'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
