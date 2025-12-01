import React, { useState } from "react";

const Fruits = () => {
  const [fruits, setFruits] = useState(["Apple", "Banana", "Orange"]);
  const [newFruit, setNewFruit] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newFruit.trim() === "") return;

    setFruits([...fruits, newFruit]);

    setNewFruit("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Fruit List</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Enter fruit name"
          value={newFruit}
          onChange={(e) => setNewFruit(e.target.value)}
          style={{
            padding: "8px",
            marginRight: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />

        <button
          type="submit"
          style={{
            padding: "8px 12px",
            borderRadius: "4px",
            border: "none",
            backgroundColor: "green",
            color: "white",
            cursor: "pointer",
          }}
        >
          Add Fruit
        </button>
      </form>

      <ul>
        {fruits.map((fruit, index) => (
          <li key={index} style={{ fontSize: "18px", marginBottom: "6px" }}>
            {fruit}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Fruits;
