import React, { useState, useEffect } from 'react';
import './ListItems.css';
import './BubbleSort.css'

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

    // simulate set interval behavior 
    // each 5 s this function will be re-invoked
    useEffect(() => {

    // wait 5 s before cause a re-render
    if (clicked && length > 0) {
        setTimeout(() => {
        }, speed);
    }
    else {
        setClicked(false);
        setCurrIndex(0);
        setUpperIndex(currIndex);
        setIndex(0);
        setEnd(false);
        setSortClicked(false);
        setSorting(false);
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
        setSorted(false);

            setCurrIndex(index);
            setUpperIndex(index+1);
            if (index >= length-1) {
                setEnd(true);
            }
            else if (Number(rows[index]) > Number(rows[index+1])) {
                console.log("rows[index]: "+rows[index]);
                console.log("rows[index+1]: "+rows[index+1]);
                const temp = rows[index];
                rows[index] = rows[index+1];
                rows[index+1] = temp;
                console.log(rows);
            }

            setTimeout(() => {
                setList(Object.assign([], rows));
              }, speed);
        

        if (length <= 1) {
            console.log('here');
            setLength(items.length);
            setClicked(false);
            setSorted(true);
            setCurrIndex(0);
            setUpperIndex(currIndex);
            setIndex(0);
            setEnd(false);
            setSortClicked(false);
            setSorting(false);
        }
    }

    useEffect(() => {
        setList(Object.assign([], items));
        setLength(items.length);
        setClicked(false);
        setCurrIndex(0);
        setUpperIndex(currIndex);
        setIndex(0);
        setEnd(false);
        setSortClicked(false);
        setSorting(false);
        setSorted(false);
    }, [items]);

    if (sortClicked === false) {
        console.log("inside sort click");
        if (sorting === true) {
            setSortClicked(true);
            console.log("shpuld be sorting!");
            sort();
        }
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

                if (items.length <= 10) {
                    return (<div key={item} className="item" style={{height: `${(item*450)/items.length}px`, backgroundColor: `${color}`, fontSize: `2em`, fontWeight: `bold`, textAlign: `center`}}>
                        {item}
                        </div>)
                }
                else {
                    return (<div key={item} className="item" style={{height: `${(item*450)/items.length}px`, backgroundColor: `${color}`}}></div>)
                }
            })}
        </div>
    )
}

export default BubbleSort;
