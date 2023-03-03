import React, { useState, useEffect } from 'react';
import './ListItems.css';

const BubbleSort = ({items, speed, setItems, sorting, setSorting}) => {
    const [list, setList] = useState(Object.assign([], items));
    const [length, setLength] = useState(items.length);
    const [clicked, setClicked] = useState(false);
    const [currIndex, setCurrIndex] = useState(0);
    const [upperIndex, setUpperIndex] = useState(currIndex);
    const [index, setIndex] = useState(0);
    const [end, setEnd] = useState(false);
    const [sorted, setSorted] = useState(false);
    const [sortClicked, setSortClicked] = useState(false);
    let rows = Object.assign([], list);

    useEffect(() => {
        const handleChange = async () => {
            setTimeout(() => {
                if (end) {
                    setIndex(0);
                    setLength(length-1);
                    setEnd(false);
                }
                else {
                    setIndex(index+1);
                }
            }, speed);
        };

        if (clicked && length > 0) {
            handleChange();
        }
    }, ([list]));

    useEffect(() => {
        if (clicked) {
            sort();
        }
    }, [index]);

    function sort() {
        setClicked(true);
        setSorted(false);
        setCurrIndex(index);
        setUpperIndex(index+1);

        if (index >= length-1) {
            setEnd(true);
        }
        else if (Number(rows[index]) > Number(rows[index+1])) {
            const temp = rows[index];
            rows[index] = rows[index+1];
            rows[index+1] = temp;
        }

        setTimeout(() => {
            setList(Object.assign([], rows));
        }, speed);
        

        if (length <= 1) {
            reset();
            setLength(items.length);
        }
    }

    useEffect(() => {
        setList(Object.assign([], items));
        reset();
        setLength(items.length);
        setSorted(false);
    }, [items]);

    if (sortClicked === false && sorting === true) {
        setSortClicked(true);
        sort();
    }

    function reset() {
        setClicked(false);
        setSorted(true);
        setCurrIndex(0);
        setUpperIndex(currIndex);
        setIndex(0);
        setEnd(false);
        setSortClicked(false);
        setSorting(false);
    }

    return (
        <div className='list'>
            {list.map((item, i) => {
                let color = 'white';

                if (sorted) {
                    color = 'lightgreen';
                }
                else if (!end && (i === currIndex || i === upperIndex)) {
                    color = 'red';
                }
                else if (end && i === currIndex) {
                    color = 'lightgreen'
                }

                const itemHeight = (item * 350) / items.length;

                return (items.length <= 10 ?
                    <div key={item} className="item" style={{height: `${itemHeight}px`, backgroundColor: `${color}`}}>{item}</div>
                    :
                    <div key={item} className="item" style={{height: `${itemHeight}px`, backgroundColor: `${color}`}}></div>
                )
            })}
        </div>
    )
}

export default BubbleSort;
