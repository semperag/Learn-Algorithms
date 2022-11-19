import React, { useState, useEffect } from 'react';
import './ListItems.css';
const InsertionSort = ({items}) => {
    const [list, setList] = useState(Object.assign([], items));
    const [length, setLength] = useState(0);
    const [clicked, setClicked] = useState(false);
    const [currIndex, setCurrIndex] = useState(0);
    const [lowerIndex, setLowerIndex] = useState(currIndex-1);
    const [index, setIndex] = useState(0);
    const [end, setEnd] = useState(false);
    let rows = Object.assign([], list);

    useEffect(() => {
        const handleChange = async () => {
            setTimeout(() => {
                if (end || index < 1) {
                    setIndex(length+1);
                    setLength(length+1);
                    setEnd(false);
                }
                else {
                    setIndex(index-1);
                }
            }, 500);
        };
        if (clicked && length <= items.length) {
            handleChange();
        }
    }, ([list]));
    // simulate set interval behavior 
    // each 5 s this function will be re-invoked
    useEffect(() => {
    // wait 5 s before cause a re-render
    if (clicked && length <= items.length) {
        setTimeout(() => {
        }, 500);
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

    function sort() {
        setClicked(true);
            console.log("rows[index]: " +rows[index]);
            console.log("index: " +index);
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
              }, 700);
        
        console.log("length: "+length);
        console.log("end === " +end)
        if (length >= rows.length) {
            setClicked(false);
        }
    }

    useEffect(() => {
        setList(items)
        }, [items]);

    return (
        <div className='list'>
            {list.map((item, i) => {
                let color = 'pink';
                if (length >= items.length) {
                    color = 'green';
                }
                else if (i === currIndex || i === lowerIndex) {
                    color = 'red';
                    if (end) {
                        color = 'green';
                    }
                }
                else if (end && currIndex === 0 && length > 0 && i === currIndex+1) {
                    color = 'green';
                }
                return (<div key={item} className="item" style={{height: `${50*item}px`, backgroundColor: `${color}`}}>
                    {item}
                    </div>)})}
            <button onClick={() => sort()}>sort</button>
        </div>
    )
}
export default InsertionSort;