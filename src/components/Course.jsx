import React from "react";

const Course = ({ course }) => (
    <div>
        <h4>{course.term} CS {course.number}</h4>
        <p>{course.title}</p>
        <hr />
        <p>{course.meets}</p>
    </div>
);

export default Course;