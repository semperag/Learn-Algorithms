import React, { useState, useEffect } from 'react';
import './ListItems.css';

const SelectionSort = ({items, speed, setItems, sorting, setSorting}) => {
    const [list, setList] = useState(Object.assign([], items));
    const [length, setLength] = useState(items.length);
    const [clicked, setClicked] = useState(false);
    const [currIndex, setCurrIndex] = useState(0);
    const [index, setIndex] = useState(0);
    const [end, setEnd] = useState(false);
    const [min, setMin] = useState(items[currIndex]);
    const [minIndex, setMinIndex] = useState(currIndex);
    const [sorted, setSorted] = useState(false);
    const [sortClicked, setSortClicked] = useState(false);
    let rows = Object.assign([], list);

    useEffect(() => {
        const handleChange = async () => {
            setTimeout(() => {
                if (end) {
                    setCurrIndex(currIndex+1);
                    setMinIndex(currIndex+1);
                    setMin(rows[currIndex+1]);
                    setIndex(currIndex+1);
                    setEnd(false);
                }
                else {
                    setIndex(index+1);
                }
            }, speed);
        };

        if (clicked && currIndex < length) {
            handleChange();
        }
    }, ([list]));

    useEffect(() => {
    if (clicked && currIndex < length) {
        setTimeout(() => {
        }, speed);
    }
    else {
        setClicked(false);
        setItems(Object.assign([], list));
    }
    }, [length]);

    useEffect(() => {
        // wait specified speed time before a re-render
        if (clicked) {
            sort();
        }
    }, [index]);

    useEffect(() => {
        setList(Object.assign([], items));
        setLength(items.length);
        reset();
        setSorted(false);
    }, [items]);

    function sort() {
        setClicked(true);
        setSorted(false);

        if (index < length && rows[index] < min) {
            setMin(rows[index]);
            setMinIndex(index);
        }
        else if (index > length) {
            setEnd(true);
            rows[minIndex] = rows[currIndex];
            rows[currIndex] = min;
        }

        setTimeout(() => {
            setList(Object.assign([], rows));
        }, );

        if (currIndex >= length) {
            reset();
        }
    }

    if (sortClicked === false && sorting === true) {
        setSortClicked(true);
        sort();
    }

    function reset() {
        setClicked(false);
        setCurrIndex(0);
        setIndex(0);
        setEnd(false);
        setMin(items[0]);
        setMinIndex(0);
        setSortClicked(false);
        setSorting(false);
        setSorted(true);
    }

    return (
        <div className='list'>
            {list.map((item, i) => {
                let color = 'white';

                if (sorted) {
                    color = 'lightgreen';
                }
                else if (!end && i === minIndex) {
                    color = 'gold';
                }
                else if (i === currIndex || i === index) {
                    color = 'red';
                    if (end && i === currIndex) {
                        color = 'lightgreen';
                    }
                }
                else if (end && i === minIndex) {
                    color = 'red';
                }

                const itemHeight = (item * 350) / items.length;

                return (length <= 10 ?
                    <div key={item} className="item" style={{height: `${itemHeight}px`, backgroundColor: `${color}`}}>{item}</div>
                    :
                    <div key={item} className="item" style={{height: `${itemHeight}px`, backgroundColor: `${color}`}}></div>
                )
            })}
        </div>
    )
}

export default SelectionSort;
