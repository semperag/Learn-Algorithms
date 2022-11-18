import React, { useState, useEffect } from 'react';
import './ListItems.css';

const BubbleSort = ({items}) => {
    const [list, setList] = useState(Object.assign([], items));
    const [length, setLength] = useState(items.length);
    const [clicked, setClicked] = useState(false);
    const [currIndex, setCurrIndex] = useState(0);
    const [upperIndex, setUpperIndex] = useState(currIndex);
    const [index, setIndex] = useState(0);
    const [end, setEnd] = useState(false);
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
            }, 1000);
        };

        if (clicked && length > 0) {
            handleChange();
        }
    }, ([list]));

    // simulate set interval behavior 
    // each 5 s this function will be re-invoked
    useEffect(() => {

    // wait 5 s before cause a re-render
    if (clicked && length > 0) {
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

    function sort() {
        setClicked(true);
            console.log("rows[index]: " + rows[index]);
            console.log("index: " + index);

            setCurrIndex(index);
            setUpperIndex(index+1);
            if (index >= length-1) {
                setEnd(true);
            }
            else if (rows[index] > rows[index+1]) {
                const temp = rows[index];
                rows[index] = rows[index+1];
                rows[index+1] = temp;
            }

            setTimeout(() => {
                setList(Object.assign([], rows));
              }, 1000);
        
        console.log("length: "+length);
        console.log("end === " +end)

        if (length < 0) {
            setClicked(false);
        }
        else {
            setClicked(true);
        }
        console.log("clicked === " + clicked);
        //setLength(length+1);
        
    }

    useEffect(() => {
        setList(items)
        }, [items]);

    return (
        <div className='list'>
            {list.map((item, i) => {
                let color = 'pink';

                if (length <= 0) {
                    color = 'green';
                }
                else if (!end && (i === currIndex || i === upperIndex)) {
                    color = 'red';
                }
                else if (end && i === currIndex) {
                    color = 'green'
                }

                return (<div key={item} className="item" style={{height: `${50*item}px`, backgroundColor: `${color}`}}>
                    {item}
                    </div>)})}
            <button onClick={() => sort()}>sort</button>
        </div>
    )
}

export default BubbleSort;