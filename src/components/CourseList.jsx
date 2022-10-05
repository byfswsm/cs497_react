import Course from './Course';

const CourseList = ({ courses, selected, toggleSelected }) => {
    return (
        courses.map(([id, course]) => <Course key={id} id={id} course={course} selected={selected} toggleSelected={toggleSelected} />)
    );
}

export default CourseList;