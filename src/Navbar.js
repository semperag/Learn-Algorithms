import { Link } from 'react-router-dom';
import './Navbar.css';
import React from 'react';

const Navbar = ({items, setItems}) => {
    const minLength = 5;

    const changeList = event => {
        const length = event.target.value;
        if (length >= minLength) {
            console.log(length);
            var newArray = items.slice();    
            newArray.push(length);   
            setItems({arr:newArray})
        }
    }

    return (
        <div className='navbar'>
            <input onChange={changeList}></input>
            <Link to="/">Insertion Sort</Link>
            <Link to="/bubble-sort">Bubble Sort</Link>
            <Link to="/selection-sort">Selection Sort</Link>
        </div>
    );
}

export default Navbar;