import React from 'react'
import './Departments.css'

const Departments = () => {
  return (
    
    <div className='depts'>
        <h1>OUR COLLEGE COURSE</h1>
        <div>
              <div className='can'>

        <div className='dept'>
          <img src="data:image/jpeg;base64,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" alt="Dept" />
          <h3 className="course-name">Course Name: B.E Computer Science</h3>
          <p className="course-code">Course Code: CSE101</p>
          <button className='view-btn'>View Details</button>
        </div>

        <div className='dept'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaVGNiciyaaQAEmA1RfmzjC9WA2pwtEV4M-Q&s" alt="Dept" />
          <h3 className="course-name">Course Name: B.E Mechanical</h3>
          <p className="course-code">Course Code: ME102</p>
          <button className='view-btn'>View Details</button>
        </div>

        
        <div className='dept'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaVGNiciyaaQAEmA1RfmzjC9WA2pwtEV4M-Q&s" alt="Dept" />
          <h3 className="course-name">Course Name: B.E ECE</h3>
          <p className="course-code">Course Code: ECE102</p>
          <button className='view-btn'>View Details</button>
        </div>
        </div>
        </div>

        <div>
          <div className='do'>
            <div className='dept'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaVGNiciyaaQAEmA1RfmzjC9WA2pwtEV4M-Q&s" alt="Dept" />
          <h3 className="course-name">Course Name: B.E civil</h3>
          <p className="course-code">Course Code: CIV102</p>
          <button className='view-btn'>View Details</button>
        </div>

        
        <div className='dept'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaVGNiciyaaQAEmA1RfmzjC9WA2pwtEV4M-Q&s" alt="Dept" />
          <h3 className="course-name">Course Name: B.E IT</h3>
          <p className="course-code">Course Code: IT102</p>
          <button className='view-btn'>View Details</button>
        </div>

        
        <div className='dept'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaVGNiciyaaQAEmA1RfmzjC9WA2pwtEV4M-Q&s" alt="Dept" />
          <h3 className="course-name">Course Name:MBA </h3>
          <p className="course-code">Course Code: MBA102</p>
          <button className='view-btn'>View Details</button>
        </div>
          </div>
        </div>
    </div>
  )
}

export default Departments
