import { useState } from "react";
import Course from "./Course";
import './TermPage.css';

const terms = {
    Fall: 'Fall items...',
    Spring: 'Spring items...',
    Winter: 'Winter items...'
};

const TermButton = ({ term, selection, setSelection }) => (
    <div>
        <input
            type="radio"
            id={term}
            className="btn-check"
            checked={term === selection}
            autoComplete="off"
            onChange={() => setSelection(term)} />
        <label className="btn btn-success mb-1 p-2" htmlFor={term}>
            <div className="button">
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
    const termselection = Object.values(courses).filter(course => selection === course.term)
    return (
        <div>
            <TermSelector selection={termselection} setSelection={setSelection} />
            <div className="allcourse">
                {Object.entries(termselection).map(([id, course]) => <Course key={id} course={course} />)}
            </div>
        </div>
    );
}

export default TermPage;