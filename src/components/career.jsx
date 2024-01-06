import React from 'react'
import './all.css'

function Career() {
    const coursesData = [
        {
          id: 1,
          courseName: "Full Stack Development",
          description: "Learn front-end and back-end development technologies.",
          image: "https://i.pinimg.com/564x/fa/e8/62/fae862fff4f6100d000a1c01c4030db0.jpg"
        },
        {
          id: 2,
          courseName: "Data Science",
          description: "Explore data analysis, machine learning, and data visualization.",
          image: "https://i.pinimg.com/564x/e7/ab/99/e7ab99f68b3e8f3bec6e11acd7ceabed.jpg"
        },
        {
            id: 3,
            courseName: "Cyber Security",
            description: "Explore the whole new world of securities.",
            image: "data:image/jpeg;base64,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"
          },
        // Add more courses as needed
      ];

      const CourseCard = ({ course }) => {
        const { courseName, description, image } = course;
    
        return (
          <div className='card-container'>
            <div className="card">
            <img src={(`${image}`)} alt={courseName} className='course-image' />
            <h2>{courseName}</h2>
            <p>{description}</p>
            <a href="#">Read More</a>
          </div>
          </div>
        );
      };

  return (
    <div className="course-list">
      {coursesData.map(course => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  )
}

export default Career