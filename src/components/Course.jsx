import React from "react";
import "./Course.css";
import { Link } from 'react-router-dom';
import { isAuth } from './Banner';


const Course = ({ course, selected, toggleSelected, id, disabled, isAdmin }) => (
    <div className="course" onClick={() => disabled.includes(course) ? null : toggleSelected(course)}>
        <div className={`card-body ${selected.includes(course) ? 'selected' : ''} ${disabled.includes(course) ? 'disabled' : ''}`}>
            <div className="top">
                <h3>{course.term} CS {course.number}</h3>
                <p>{course.title}</p>
            </div>
            <hr className="hr" />
            <p>{course.meets}</p>
            {isAdmin ? <p><Link to={`/courses/${id}/edit`}><i className="bi bi-pencil-square"></i></Link></p> : null}
        </div>
    </div>

);

export default Course;
