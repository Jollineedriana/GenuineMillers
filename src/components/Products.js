// Products.js
import React from 'react';

function Products() {
  const products = [
    { id: 1, name: 'Product A', price: '$10' },
    { id: 2, name: 'Product B', price: '$20' },
    { id: 3, name: 'Product C', price: '$30' },
  ];

  return (
    <div>
      <h2>Our Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
