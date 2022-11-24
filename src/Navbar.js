import { Link } from 'react-router-dom';

import './Navbar.css';
import React, { useState, useEffect } from 'react';
//////
const minLength = 5;
const minSpeed = 50;

const Navbar = ({items, setItems, setSpeed, shuffleArray}) => {
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

    return (
        <div className='navbar'>
            <input onChange={changeList}></input>
            <Link to="/">Insertion Sort</Link>
            <Link to="/bubble-sort">Bubble Sort</Link>
            <Link to="/selection-sort">Selection Sort</Link>
            <Link to="/heap-sort">Heap Sort</Link>
            <Link to="/quick-sort">Quick Sort</Link>
            <Link to="/merge-sort">Merge Sort</Link>
            <input onChange={changeSpeed}></input>
        </div>
    );
}

export default Navbar;