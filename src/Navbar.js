import { Link } from 'react-router-dom';

import './Navbar.css';
import React, { useState, useEffect } from 'react';

const Navbar = ({items, setItems, shuffleArray}) => {
    const minLength = 5;
    let list = Object.assign([], items);

    const changeList = event => {
        const length = event.target.value;
        let changingLength = Number(items.length);
        if (length > 5) {
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