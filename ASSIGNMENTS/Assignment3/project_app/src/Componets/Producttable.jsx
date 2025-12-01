import React from "react";

const Producttable = () => {
  const products = [
    { id: 1, name: "Laptop", price: 899 },
    { id: 2, name: "Phone", price: 499 },
    { id: 3, name: "Headphones", price: 149 },
  ];

  return (
    <table border="1" cellPadding="8" >
      <thead>
        <tr>
          <th>ID</th>
          <th>Product Name</th>
          <th>Price ($)</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Producttable;
