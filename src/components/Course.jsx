import React from "react";
import "./Course.css";

const Course = ({ course, selected, toggleSelected, id, disabled }) => (
    <div className="course" onClick={() => disabled.includes(course) ? null : toggleSelected(course)}>
        <div className={`card-body ${selected.includes(course) ? 'selected' : ''} ${disabled.includes(course) ? 'disabled' : ''}`}>
            <div className="top">
                <h3>{course.term} CS {course.number}</h3>
                <p>{course.title}</p>
            </div>
            <hr className="hr" />
            <p>{course.meets}</p>
        </div>
    </div>

);

export default Course;
