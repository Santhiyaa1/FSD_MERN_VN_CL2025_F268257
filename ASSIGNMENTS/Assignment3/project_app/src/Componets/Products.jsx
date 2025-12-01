import React, { useState } from "react";

export default function Products() {
  const product = [
    { name: "Laptop", category: "Electronics" },
    { name: "Phone", category: "Electronics" },
    { name: "Dress", category: "Clothes" },
    { name: "Jeans", category: "Clothes" },
    { name: "saree", category: "Clothes" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? product
      : product.filter((p) => p.category === selectedCategory);

  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "Arial",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>Product Filter</h2>

      <div style={{ display: "flex", gap: "15px", marginBottom: "30px" }}>
        {["All", "Electronics", "Clothes"].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              padding: "10px 20px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              cursor: "pointer",
              background: selectedCategory === cat ? "#1e90ff" : "white",
              color: selectedCategory === cat ? "white" : "black",
              fontWeight: selectedCategory === cat ? "bold" : "normal",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div
        style={{
          width: "250px",
          padding: "15px",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          background: "#141313ff",
        }}
      >
        <ul style={{ listStyle: "none", padding: 0 }}>
          {filteredProducts.map((pro, index) => (
            <li
              key={index}
              style={{
                padding: "10px",
                borderBottom: "1px solid #eee",
              }}
            >
              <strong>{pro.name}</strong>
              <div style={{ fontSize: "13px", color: "white" }}>
                {pro.category}
              </div>
            </li>
          ))}

          {filteredProducts.length === 0 && (
            <p style={{ textAlign: "center", color: "green" }}>
              No products found
            </p>
          )}
        </ul>
      </div>
    </div>
  );
}