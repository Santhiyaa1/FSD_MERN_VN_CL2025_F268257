import React, { useEffect, useState } from "react";

const Putdummy = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
  });
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/users/1")
      .then((res) => res.json())
      .then((data) => {
        setUser({
          firstName: data.firstName || "",
          lastName: data.lastName || "",
          age: data.age || "",
          email: data.email || "",
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://dummyjson.com/users/1", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Updated user:", data);
        setMessage("User updated successfully!");
      })
      .catch((err) => {
        console.error(err);
        setMessage("Failed to update user.");
      });
  };

  if (loading) return <p>Loading user data...</p>;

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2>Edit User Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name: </label>
          <input
            type="text"
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label>Last Name: </label>
          <input
            type="text"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label>Age: </label>
          <input
            type="number"
            name="age"
            value={user.age}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <br />
        <button type="submit">Update User</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Putdummy;