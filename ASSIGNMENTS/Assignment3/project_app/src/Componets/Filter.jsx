import React, { useState, useMemo } from 'react';

function Filter() {

  const studentNames = [
    'santhiyan',
    'Eleven',
    'Mike',
    'Dustin',
    'Lucas',
    'Max',
    'Hawkins',
    'kesavan',
    'Robin',
    'Jonathan',
    'Nancy'
  ];


  const [searchTerm, setSearchTerm] = useState('');

  const filteredStudents = useMemo(() => {
    if (!searchTerm) {
      return studentNames;
    }

    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    return studentNames.filter(student =>

      student.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }, [searchTerm, studentNames]);


  const handleSearchChange = (event) => {
    
    setSearchTerm(event.target.value);
  };

  
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2> Search the students</h2>
      
      <input
        type="text"
        placeholder="Start typing a student name..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={{
          padding: '10px',
          fontSize: '16px',
          width: '300px',
          marginBottom: '20px',
          borderRadius: '5px',
          border: '1px solid #ccc',
        }}
      />
      
      <h3>
        Results ({filteredStudents.length} of {studentNames.length})
      </h3>
      
      {filteredStudents.length > 0 ? (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {filteredStudents.map((student, index) => (
            <li 
              key={index} 
              style={{
                padding: '8px 0',
                borderBottom: '1px solid #eee',
                fontSize: '18px'
              }}
            >
              {student}
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ color: 'yellow' }}>No students match your search.</p>
      )}
    </div>
  );
}

export default Filter;