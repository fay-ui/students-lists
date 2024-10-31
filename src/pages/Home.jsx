import React from 'react';

function Home({ students }) {
    return (
        <div>
            <h2>Student List</h2>
            
                <ul>
                    {students.map((student) => (
                        <li key={student.id}>
                            
                            <p>Name: {student.name}</p>
                            <p>Age: {student.age}</p>
                            <p>Course: {student.course}</p>
                            <img src={student.image} alt={student.name} />
                        </li>
                    ))}
                </ul>
            
        </div>
    );
}

export default Home;
