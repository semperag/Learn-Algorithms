import React, { useState, useEffect } from 'react';
import './ListItems.css';

const sleep = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

const ListItems = ({items}) => {
    const [list, setList] = useState(Object.assign([], items));
    const [length, setLength] = useState(0);
    const [clicked, setClicked] = useState(false);
    const [currIndex, setCurrIndex] = useState(0);
    const [lowerIndex, setLowerIndex] = useState(currIndex-1);
    const [index, setIndex] = useState(0);
    const [end, setEnd] = useState(false);
    let rows = Object.assign([], list);

    //console.log(list);
/*
    const rows = [];
    for (let i = 0; i < items.length; i++) {
        rows.push(<div key={items[i]} className="item" style={{height: `${50*items[i]}px`}}>{items[i]}</div>);
    }
*/
    useEffect(() => {
        const handleChange = async () => {
            setTimeout(() => {
                if (end) {
                    setIndex(length+1);
                    setLength(length+1);
                    setEnd(false);
                }
                else {
                    setIndex(index-1);
                }
            }, 1000);
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
              }, 1000);
        
        console.log("length: "+length);
        console.log("end === " +end)

        if (length >= rows.length) {
            setClicked(false);
        }
        //setLength(length+1);
        
    }

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

                return (<div key={item} className="item" style={{height: `${50*item}px`, backgroundColor: `${color}`}}>
                    {item}
                    </div>)})}
            <button onClick={() => sort()}>sort</button>
        </div>
    )
}

export default ListItems;