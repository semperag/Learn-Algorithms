import React, { useState, useEffect } from 'react';
import './ListItems.css';
import './SelectionSort.css'

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
                console.log("end === " + end)
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

    // simulate set interval behavior 
    // each 5 s this function will be re-invoked
    useEffect(() => {

    // wait 5 s before cause a re-render
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
        // wait 5 s before cause a re-render
        if (clicked) {
            sort();
        }
        }, [index]);

    useEffect(() => {
        setList(Object.assign([], items));
        setLength(items.length);
        setClicked(false);
        setCurrIndex(0);
        setIndex(0);
        setEnd(false);
        setMin(items[0]);
        setMinIndex(0);
        setSortClicked(false);
        setSorted(false);
        setSorting(false);
    }, [items]);

    function sort() {
        setClicked(true);
        setSorted(false);
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
            setCurrIndex(0);
            setIndex(0);
            setEnd(false);
            setMin(items[0]);
            setMinIndex(0);
            setSortClicked(false);
            setSorting(false);
            setSorted(true);
        }
    }

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

                if (length <= 10) {
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

export default SelectionSort;
