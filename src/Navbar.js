import { Link } from 'react-router-dom';

import './Navbar.css';
import React, { useState, useEffect } from 'react';
const minLength = 5;
const minSpeed = 50;

const Navbar = ({items, setItems, speed, setSpeed, setSorting, shuffleArray}) => {
    let list = Object.assign([], items);

    const changeList = event => {
        const length = event.target.value;
        const list = Array.from({length: length}, (_, i) => i + 1);
        setItems(shuffleArray(list));
    }

    const changeSpeed = event => {
        const speed = event.target.value;
        setSpeed(speed);
    }

    function sort() {
        setSorting(true);
    }

    const arrayLength = items.length;

    return (
        <div className='navbar'>
            <input onChange={changeList} value={arrayLength} type="range" step="5" min="5" max="100"></input>
            <Link to="/Learn-Algorithms/insertion-sort">Insertion Sort</Link>
            <Link to="/Learn-Algorithms/bubble-sort">Bubble Sort</Link>
            <Link to="/Learn-Algorithms/selection-sort">Selection Sort</Link>
            <Link to="/Learn-Algorithms/heap-sort">Heap Sort</Link>
            {/*
            Comming Soon!
            <Link to="/quick-sort">Quick Sort</Link>
            <Link to="/merge-sort">Merge Sort</Link>
            */}
            <input onChange={changeSpeed} type="range" min="0" max="1000"></input>
            <button className="sort" value={speed} onClick={sort}>Sort</button>
        </div>
    );
}

export default Navbar;