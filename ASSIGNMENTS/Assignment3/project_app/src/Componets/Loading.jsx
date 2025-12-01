import React, { useEffect, useState } from "react";

const Loading = () => {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(true);   
  const [error, setError] = useState(false);      

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network error");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data.products);
        setLoad(false);  
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError(true);     
        setLoad(false);   
      });
  }, []);

 
  if (load) {
    return <h2>Loading...</h2>;
  }


  if (error) {
    return <h2>Error loading data</h2>;
  }

  return (
    <div style={{ padding: "10px" }}>
      <h1>Products</h1>

      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          marginTop: "10px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "16px",
              width: "220px",
              boxShadow: "2px 2px 10px rgba(215, 72, 72, 0.1)",
            }}
          >
            <h2 style={{ fontSize: "18px" }}>{product.title}</h2>
            <p style={{ fontWeight: "bold", color: "purple" }}>
              Price: ${product.price}
            </p>
            <p>Brand: {product.brand}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;