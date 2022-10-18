import Course from './Course';

const CourseList = ({ courses, selected, toggleSelected, disabled, isAdmin }) => {
    return (
        courses.map(([id, course]) => <Course key={id} id={id} course={course} selected={selected} toggleSelected={toggleSelected} disabled={disabled} isAdmin={isAdmin} />)
    );
}

export default CourseList;