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


    const [open, setOpen] = useState(false);
    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);

    const toggleSelected = (item) => setselected(
        selected.includes(item)
            ? selected.filter(x => x !== item)
            : [...selected, item]
    );

    const termselection = Object.entries(courses).filter(([id, course]) => selection === course.term);
    return (
        <div>
            <TermSelector selection={termselection} setSelection={setSelection} />
            <Popup trigger={<button className="button"><i className="bi bi-cart4"></i></button>} position="bottom right">
                <Cart selected={selected} />
            </Popup>
            <div className="allcourse">
                <CourseList courses={termselection} selected={selected} toggleSelected={toggleSelected} />
            </div>
        </div>
    );
}

export default TermPage;