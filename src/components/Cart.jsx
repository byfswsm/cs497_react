import React from "react";
import './Cart.css';

const Cart = ({ selected }) => (
    <div className="cart" data-cy="course" >
        {
            selected.length === 0
                ? (<div className="begin">
                    <h3>The cart is empty</h3>
                </div>)
                :
                (<div>
                    <h2>Selected:</h2>
                    {selected.map(course => (
                        <div key={course.term[0] + course.number} className="coursename">
                            {course.term} CS {course.number} {course.meets}
                        </div>
                    ))
                    }
                </div>)
        }
    </div>
);

export default Cart;
