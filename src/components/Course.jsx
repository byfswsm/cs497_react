import React from "react";
import "./Course.css";

const Course = ({ course, selected, toggleSelected, id }) => (
    <div className="course" onClick={() => toggleSelected(course)}>
        <div className={`card-body ${selected.includes(course) ? 'selected' : ''}`}>
            <div className="top">
                <h2>{course.term} CS {course.number}</h2>
                <p>{course.title}</p>
            </div>
            <hr />
            <p>{course.meets}</p>
        </div>
    </div>

);

export default Course;
