import React from "react";

const ArraystudentsDetail = () => {
  const students = [
    { name: "sandy", dept: "Computer Science", year: "3rd" },
    { name: "mala", dept: "Mechanical", year: "2nd" },
    { name: "santhiya", dept: "Electrical", year: "1st" },
  ];

  return (
    <div style={styles.container}>
      {students.map((student, index) => (
        <div key={index} style={styles.card}>
          <h3>Name: {student.name}</h3>
          <p>Department: {student.dept}</p>
          <p>Year: {student.year}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display:"flex",
    flexDirection:"column",
    gap: "20 px",
    padding: "10px",
  },
  card: {
    border: "3px solid #396207ff",
    padding: "10px",
    borderRadius: "10px",
    width: "180px",
    textAlign: "center",
    boxShadow: "8px 8px 8px rgba(0,0,0,0.1)",
  },
};

export default ArraystudentsDetail;
