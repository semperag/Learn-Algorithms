import React, { useState, useEffect } from 'react';
import './ListItems.css';

const SelectionSort = ({items}) => {
    const [list, setList] = useState(Object.assign([], items));
    const [length, setLength] = useState(items.length);
    const [clicked, setClicked] = useState(false);
    const [currIndex, setCurrIndex] = useState(0);
    //const [upperIndex, setUpperIndex] = useState(currIndex);
    const [index, setIndex] = useState(0);
    const [end, setEnd] = useState(false);
    const [min, setMin] = useState(items[currIndex]);
    const [minIndex, setMinIndex] = useState(currIndex);
    let rows = Object.assign([], list);

    useEffect(() => {
        const handleChange = async () => {
            setTimeout(() => {
                console.log("end === " +end)
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
            }, 1000);
        };

        if (clicked && currIndex < length) {
            handleChange();
        }
    }, ([list]));

    // simulate set interval behavior 
    // each 5 s this function will be re-invoked
    useEffect(() => {

    // wait 5 s before cause a re-render
    if (clicked && currIndex < length) {
        setTimeout(() => {
        }, 1000);
    }
    else {
        setClicked(false);
    }
    }, [length]);

    useEffect(() => {
        // wait 5 s before cause a re-render
        if (clicked) {
            sort();
        }
        }, [index]);

        useEffect(() => {
            setList(items);
            }, [items]);

    function sort() {
        setClicked(true);
            console.log("rows[index]: " +rows[index]);
            console.log("index: " +index);

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
            setClicked(false);
        }
    }

    return (
        <div className='list'>
            {list.map((item, i) => {
                let color = 'pink';

                if (currIndex >= length) {
                    color = 'green';
                }
                else if (!end && i === minIndex) {
                    color = 'yellow';
                }
                else if (i === currIndex || i === index) {
                    color = 'red';
                    if (end && i === currIndex) {
                        color = 'green';
                    }
                }
                else if (end && i === minIndex) {
                    color = 'red';
                }

                return (<div key={item} className="item" style={{height: `${50*item}px`, backgroundColor: `${color}`}}>
                    {item}
                    </div>)})}
            <button onClick={() => sort()}>sort</button>
        </div>
    )
}

export default SelectionSort;