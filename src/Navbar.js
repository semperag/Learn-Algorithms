import { Link } from 'react-router-dom';
import './Navbar.css';
import React, { useState, useEffect } from 'react';

const Navbar = ({items, setItems}) => {
    const minLength = 5;
    let list = Object.assign([], items);

    const changeList = event => {
        const length = event.target.value;
        if (length >= minLength) {
            list.push(length);
            setItems(list);
            console.log(list);
            console.log("items: " + items);
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