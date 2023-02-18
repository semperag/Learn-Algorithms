import { Link } from 'react-router-dom';

import './Navbar.css';
import React, { useState, useEffect } from 'react';
const minLength = 5;
const minSpeed = 50;

const Navbar = ({items, setItems, speed, setSpeed, setSorting, shuffleArray}) => {
    let list = Object.assign([], items);

    const changeList = event => {
        const length = event.target.value;
        let changingLength = Number(items.length);
        if (length > minLength) {
            if (Number(length) > Number(changingLength)) {
                while ( Number(length) > Number(changingLength)) {
                    list.push(changingLength+1);
                    changingLength = changingLength + 1;
                    console.log('here')
                }
                setItems(shuffleArray(list));
                console.log('here')
            }
            else if (Number(length) < Number(changingLength)) {
                const list = Array.from({length: length}, (_, i) => i + 1);
                setItems(shuffleArray(list));
            }
        }
    }

    const changeSpeed = event => {
        const speed = event.target.value;

        if (speed >= 0 && speed <= 1500) {
            setSpeed(speed);
        }
    }

    function sort() {
        setSorting(true);
    }

    const arrayLength = items.length;

    return (
        <div className='navbar'>
            <input onChange={changeList} value={arrayLength} type="range" min="5" max="70"></input>
            <Link to="/">Insertion Sort</Link>
            <Link to="/bubble-sort">Bubble Sort</Link>
            <Link to="/selection-sort">Selection Sort</Link>
            <Link to="/heap-sort">Heap Sort</Link>
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