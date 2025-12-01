import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products')
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Products List </h2>
      {products.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <strong>Name:</strong> {product.title} <br />
              <strong>Brand:</strong> {product.brand} <br />
              <strong>Price:</strong> ${product.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductsList;
