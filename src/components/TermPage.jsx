import { useState } from "react";
import CourseList from "./CourseList";
import Cart from "./Cart";
import './TermPage.css';
import Popup from 'reactjs-popup';


const terms = {
    Fall: 'Fall items...',
    Spring: 'Spring items...',
    Winter: 'Winter items...'
};

const TermButton = ({ term, selection, setSelection }) => (
    <div className="buttonback">
        <input
            type="radio"
            id={term}
            className="btn-check"
            checked={term === selection}
            autoComplete="off"
            onChange={() => setSelection(term)} />
        <label className="" htmlFor={term}>
            <div className="">
                {term}
            </div>
        </label>
    </div>
);

const TermSelector = ({ selection, setSelection }) => (
    <div className="btn-group">
        {
            Object.keys(terms).map(term => <TermButton key={term} term={term} selection={selection} setSelection={setSelection} />)
        }
    </div>
);


const TermPage = ({ courses }) => {
    const [selection, setSelection] = useState(() => Object.keys(terms)[0]);
    const [selected, setselected] = useState([]);
    const [disabled, setDisabled] = useState([]);

    const dateConflict = (course1, course2) => {
        course1 = splitMeets(course1);
        course2 = splitMeets(course2);

        return termConflict(course1.term, course2.term) && dayConflict(course1.days, course2.days) && hourConflict(course1.timeStart, course1.timeEnd, course2.timeStart, course2.timeEnd)
    }

    const splitMeets = (course) => {
        const meetsArr = course.meets.split(" ");
        const weekdayArr = meetsArr[0].split(/(?=[A-Z])/);
        const timeArr = meetsArr[1].split("-");
        const startMinutesArr = timeArr[0].split(":");
        const endMinutesArr = timeArr[1].split(":");

        return {
            term: course.term,
            days: weekdayArr,
            timeStart: parseInt(startMinutesArr[0]) * 60 + parseInt(startMinutesArr[1]),
            timeEnd: parseInt(endMinutesArr[0]) * 60 + parseInt(endMinutesArr[1])
        }
    }

    const termConflict = (term1, term2) => term1 == term2;

    const dayConflict = (dayArr1, dayArr2) => dayArr1.some(e => dayArr2.indexOf(e) >= 0)

    const hourConflict = (timeStart1, timeEnd1, timeStart2, timeEnd2) => Math.max(timeStart1, timeStart2) < Math.min(timeEnd1, timeEnd2);

    const ManageDisabledList = (item) => {
        const disabledArr = Object.entries(courses).filter(([id, course]) => course !== item && dateConflict(item, course)).map(([id, course]) => course);

        setDisabled(
            selected.includes(item)
                ? disabled.filter((course) => !disabledArr.includes(course))
                : disabled.concat(disabledArr)
        )
    }

    const toggleSelected = (item) => {
        setselected(
            selected.includes(item)
                ? selected.filter(x => x !== item)
                : [...selected, item]
        )

        ManageDisabledList(item);
    };

    const termselection = Object.entries(courses).filter(([id, course]) => selection === course.term);
    return (
        <div>
            <TermSelector selection={termselection} setSelection={setSelection} />
            <Popup trigger={<button className="button"><i className="bi bi-cart4"></i></button>} position="bottom right">
                <Cart selected={selected} />
            </Popup>
            <div className="allcourse">
                <CourseList courses={termselection} selected={selected} toggleSelected={toggleSelected} disabled={disabled} />
            </div>
        </div>
    );
}

export default TermPage;