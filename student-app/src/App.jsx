
import React from "react";

function App() {
  const students = [
    { name: "Arun", marks: 85 },
    { name: "Ravi", marks: 32 },
    { name: "Priya", marks: 90 },
    { name: "Sneha", marks: 25 },
    { name: "Rahul", marks: 65 }
  ];

  return (
    <>
      <header>
        <h1>Student Management</h1>
      </header>

      <h2>Student List</h2>

      {students.map((s, i) => (
        <p key={i}>
          {s.name} - {s.marks} - 
          {s.marks >= 40 ? "Pass" : "Fail"}
        </p>
      ))}

      <footer>
        <p>End of Student List</p>
      </footer>
    </>
  );
}

export default App;
