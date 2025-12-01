import React, { useEffect, useState } from "react";

const Api = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") 
      .then((res) => res.json())
      .then((data) => {
        const fullData = [...data, ...data].slice(0, 20);
        setUsers(fullData);
      })
      .catch((err) => console.error(err));
  }, []);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const nextPage = () => {
    if (currentPage < Math.ceil(users.length / usersPerPage)) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Users List (Page {currentPage})</h2>

      {currentUsers.map((user) => (
        <p key={user.id}>
          <strong>{user.name}</strong> — {user.email}
        </p>
      ))}

      <div style={{ marginTop: "15px" }}>
        <button onClick={prevPage} disabled={currentPage === 1}>
          Prev
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage === Math.ceil(users.length / usersPerPage)}
          style={{ marginLeft: "10px" }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Api;
