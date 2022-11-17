import { Link } from 'react-router-dom';
import './Navbar.css';
import React from 'react';

const Navbar = () => {
    return (
        <div className='navbar'>
            <Link to="/">Insertion Sort</Link>
            <Link to="/bubble-sort">Bubble Sort</Link>
            <Link to="/selection-sort">Selection Sort</Link>
        </div>
    );
}

export default Navbar;