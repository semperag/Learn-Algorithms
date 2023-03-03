import React, { useState, useEffect } from 'react';
import './ListItems.css';

const InsertionSort = ({items, speed, setItems, sorting, setSorting}) => {
    const [list, setList] = useState(Object.assign([], items));
    const [length, setLength] = useState(0);
    const [clicked, setClicked] = useState(false);
    const [currIndex, setCurrIndex] = useState(0);
    const [lowerIndex, setLowerIndex] = useState(currIndex-1);
    const [index, setIndex] = useState(0);
    const [end, setEnd] = useState(false);
    const [sorted, setSorted] = useState(false);
    const [sortClicked, setSortClicked] = useState(false);
    let rows = Object.assign([], list);

    useEffect(() => {
        const handleChange = async () => {
            if (end || index < 1) {
                setTimeout(() => {
                    setIndex(length+1);
                    setLength(length+1);
                    setEnd(false);
                }, speed);
            }
            else {
                setIndex(index-1);
            }
        };
        // Increment index until we reached the 'end'
        if (clicked && length <= items.length) {
            handleChange();
        }
    }, ([list]));
    
    useEffect(() => {
        // wait specified by the speed value
        if (clicked && length <= items.length) {
            setTimeout(() => {
            }, speed);
        }
        else {
            reset();
            setSorted(true);
        }
    }, [length]);

    useEffect(() => {
        if (clicked) {
            sort();
        }
    }, [index]);

    function sort() {
        setSorted(false);
        setClicked(true);
        setCurrIndex(index);
        setLowerIndex(index-1);
        if (index > 0 && rows[index] < rows[index-1]) {
            const temp = rows[index];
            rows[index] = rows[index-1];
            rows[index-1] = temp;
        }
        else {
            setEnd(true);
        }

        setTimeout(() => {
            setList(Object.assign([], rows));
        }, speed);
        
        if (length >= rows.length) {
            reset();
            setSorted(true);
        }
    }

    useEffect(() => {
        reset();
        setList(Object.assign([], items));
    }, [items]);

    if (sortClicked === false && sorting === true) {
        setSortClicked(true);
        sort();
    }

    function reset() {
        setLength(0);
        setClicked(false);
        setCurrIndex(0);
        setLowerIndex(currIndex-1);
        setIndex(0);
        setEnd(false);
        setSortClicked(false);
        setSorting(false);
        setSorted(false);
    }

    return (
        <div className='list'>
            {list.map((item, i) => {
                let color = 'white';
                if (sorted === true) {
                    color = 'lightgreen';
                }
                else if (i === currIndex || i === lowerIndex) {
                    color = 'red';
                    if (end) {
                        color = 'lightgreen';
                    }
                }
                else if (end && currIndex === 0 && length > 0 && i === currIndex+1) {
                    color = 'lightgreen';
                }
                
                const itemHeight = (item * 350) / items.length;

                return (items.length <= 10 ?
                    <div key={item} className="item" style={{height: `${itemHeight}px`, backgroundColor: `${color}`}}>{item}</div>
                    :
                    <div key={item} className="item" style={{height: `${itemHeight}px`, backgroundColor: `${color}`}}></div>
                );
            })}
        </div>
    )
}
export default InsertionSort;
