import React, { useState } from "react";

function SimpleForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showData, setShowData] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    setShowData(true);
  };

  return (
    <div>
      <h2>Simple Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        /><br />

        <input
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        /><br />

        <button type="submit">Submit</button>
      </form>

      {showData && (
        <div>
          <h3>Submitted Data:</h3>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
        </div>
      )}
    </div>
  );
}

export default SimpleForm;
