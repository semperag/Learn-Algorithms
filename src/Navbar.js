import { Link } from 'react-router-dom';
import './Navbar.css';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFastForward } from '@fortawesome/free-solid-svg-icons'
import { faFastBackward } from '@fortawesome/free-solid-svg-icons'

const Navbar = ({items, setItems, speed, setSpeed, sorting, setSorting, shuffleArray}) => {
    const ref = React.useRef(null);

    const changeList = event => {
        const length = event.target.value;
        const list = Array.from({length: length}, (_, i) => i + 1);
        setItems(shuffleArray(list));
    }

    const increaseList = () => {
        // Minus one because we are setting spped as timeout time (0 = greatest)
        if (items.length >= 100) {
            const newLength = 100;
            const list = Array.from({length: newLength}, (_, i) => i + 1);
            setItems(shuffleArray(list));
            return;
        }

        const newLength = items.length + 5;
        const list = Array.from({length: newLength}, (_, i) => i + 1);
        setItems(shuffleArray(list));
    }

    const decreaseList = () => {
        if (items.length <= 5) {
            const newLength = 5;
            const list = Array.from({length: newLength}, (_, i) => i + 1);
            setItems(shuffleArray(list));
            return;
        }
        
        const newLength = items.length - 5;
        const list = Array.from({length: newLength}, (_, i) => i + 1);
        setItems(shuffleArray(list));
    }

    const changeSpeed = event => {
        const newSpeed = 1000 - event.target.value;
        setSpeed(newSpeed);
        event.target.value = newSpeed;
    }

    const increaseSpeed = () => {
        // Minus one because we are setting spped as timeout time (0 = greatest)
        if (speed <= 25) {
            setSpeed(0);
            return;
        }
        const newSpeed = 1000 - ref.current.value - 25;
        setSpeed(speed - 25);
        console.log(newSpeed);
    }

    const decreaseSpeed = () => {
        if (speed >= 975) {
            setSpeed(1000);
            return;
        }
        const newSpeed = 1000 - ref.current.value + 25;
        setSpeed(speed + 25);
        console.log(newSpeed);
    }

    function sort() {
        setSorting(true);
    }

    const arrayLength = items.length;

    return (
        <div className='navbar'>
            <div id="sizeSection">
                {sorting === false && <div className="signal-icon" onClick={decreaseList}> }
                {sorting === true && 
                    <>
                        <div className="disabled"> 
                            <div className="signal-bar"></div>
                            <div className="signal-bar"></div>
                            <div className="signal-bar"></div>
                        </div>
                    </>
                }
                {sorting === false &&
                    <input id="sizeInput" onChange={changeList} value={arrayLength} type="range" step="5" min="5" max="100"></input>
                }
                {sorting === true && 
                    <input disabled className="disabled" onChange={changeList} value={arrayLength} type="range" step="5" min="5" max="100"></input>
                }
                <div className="signal-icon" onClick={increaseList}>
                    <div className="signal-bar"></div>
                    <div className="signal-bar"></div>
                    <div className="signal-bar"></div>
                    <div className="signal-bar"></div>
                    <div className="signal-bar"></div>
                </div>
            </div>
            <div id="linkSection">
                {sorting === false &&
                    <Link to="/Learn-Algorithms/insertion-sort">Insertion Sort</Link>
                }
                {sorting === false &&
                    <Link to="/Learn-Algorithms/bubble-sort">Bubble Sort</Link>
                }
                {sorting === false &&
                    <Link to="/Learn-Algorithms/selection-sort">Selection Sort</Link>
                }
                {sorting === false &&
                    <Link to="/Learn-Algorithms/heap-sort">Heap Sort</Link>
                }
                {sorting === true && <Link className="disabled">Insertion Sort</Link>}
                {sorting === true && <Link className="disabled">Bubble Sort</Link>}
                {sorting === true && <Link className="disabled">Selection Sort</Link>}
                {sorting === true && <Link className="disabled">Heap Sort</Link>}
            </div>
            {/*
            Comming Soon!
            <Link to="/quick-sort">Quick Sort</Link>
            <Link to="/merge-sort">Merge Sort</Link>
            */}
            <div id="speedSection">
                <FontAwesomeIcon icon={faFastBackward} className="speedIcon" onClick={decreaseSpeed}/>
                <input id="speedInput" ref={ref} onChange={changeSpeed} type="range" min="0" max="1000" value={1000 - speed}></input>
                <FontAwesomeIcon icon={faFastForward} className="speedIcon" onClick={increaseSpeed}/>
            </div>
            <button className="sort" value={speed} onClick={sort}>Sort</button>
        </div>
    );
}

export default Navbar;