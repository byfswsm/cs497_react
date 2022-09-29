import React from "react";
import "./Course.css";

const Course = ({ course }) => (
    <div className="course">
        <div className="top">
            <h2>{course.term} CS {course.number}</h2>
            <p>{course.title}</p>
        </div>
        <hr />
        <p>{course.meets}</p>
    </div>
);

export default Course;