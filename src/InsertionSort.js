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
            setTimeout(() => {
                if (end || index < 1) {
                    setIndex(length+1);
                    setLength(length+1);
                    setEnd(false);
                }
                else {
                    setIndex(index-1);
                }
            }, speed);
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
            }, speed);
        }
        else {
            setClicked(false);
            setSorted(true);
            setLength(0);
            setClicked(false);
            setCurrIndex(0);
            setLowerIndex(currIndex-1);
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
        setSorted(false);
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
              }, speed);
        
        console.log("length: "+length);
        console.log("end === " +end)
        if (length >= rows.length) {
            setClicked(false);
            setSorted(true);
            setLength(0);
            setClicked(false);
            setCurrIndex(0);
            setLowerIndex(currIndex-1);
            setIndex(0);
            setEnd(false);
            setSortClicked(false);
            setSorting(false);
        }
    }

    useEffect(() => {
        setList(Object.assign([], items));
        setLength(0);
        setClicked(false);
        setCurrIndex(0);
        setLowerIndex(currIndex-1);
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
                
                if (items.length <= 10) {
                    return (<div key={item} className="item" style={{height: `${(item*650)/items.length}px`, backgroundColor: `${color}`, fontSize: `2em`, fontWeight: `bold`, textAlign: `center`}}>
                        {item}
                        </div>)
                }
                else {
                    return (<div key={item} className="item" style={{height: `${(item*650)/items.length}px`, backgroundColor: `${color}`}}></div>)
                }
            })}
        </div>
    )
}
export default InsertionSort;