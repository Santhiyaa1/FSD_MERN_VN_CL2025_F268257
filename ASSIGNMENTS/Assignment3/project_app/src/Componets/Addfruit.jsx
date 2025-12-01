import React, { useState } from "react";

const Addfruit = () => {
  const [fruits, setFruits] = useState(["Apple", "Banana", "Orange"]);
  const [newFruit, setNewFruit] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newFruit.trim() === "") return;

    setFruits([...fruits, newFruit]);
    setNewFruit("");
  };

  const deleteFruit = (indexToDelete) => {

    const updatedFruits = fruits.filter((_, index) => index !== indexToDelete);
    setFruits(updatedFruits);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Fruit List</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Enter the fruit name"
          value={newFruit}
          onChange={(e) => setNewFruit(e.target.value)}
          style={{
            padding: "8px",
            marginRight: "10px",
            borderRadius: "4px",
            border: "1px double black",
            boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.3)',
          }}
        />
        <button
          type="submit"
          style={{
            padding: "8px 12px",
            borderRadius: "4px",
            backgroundColor: "#1b199aff",
            color: "white",
            border: "5px double black",
          }}
        >
          Add Fruit
        </button>
      </form>

      <ul style={{ padding: 0 }}>
        {fruits.map((fruit, index) => (
          <li
            key={index}
            style={{
              fontSize: "18px",
              marginBottom: "8px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "250px",
              listStyle: "none",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "6px",
            }}
          >
            {fruit}

            <button
              onClick={() => deleteFruit(index)}
              style={{
                padding: "5px 10px",
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Addfruit;