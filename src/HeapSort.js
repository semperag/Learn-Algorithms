import React, { useState, useEffect } from 'react';
import './ListItems.css';
const HeapSort = ({items, speed, setItems, sorting, setSorting}) => {
    const [list, setList] = useState(Object.assign([], items));
    const [length, setLength] = useState(items.length);
    const [clicked, setClicked] = useState(false);
    const [index, setIndex] = useState(Math.floor(items.length / 2) - 1);
    const [end, setEnd] = useState(false);
    const [firstHeap, setFirstHeap] = useState(true);
    const [secondHeap, setSecondHeap] = useState(false);
    const [largestNum, setLargestNum] = useState(-1);
    const [swap, setSwap] = useState(-1);
    const [heapLength, setHeapLength] = useState(-1);
    const [heapIndex, setHeapIndex] = useState(-1);
    const [sorted, setSorted] = useState(false);
    const [sortClicked, setSortClicked] = useState(false);
    let rows = Object.assign([], list);

    useEffect(() => {

        // wait 5 s before cause a re-render
        if (clicked) {
            setTimeout(() => {
                sort();
            }, speed*3);
        }
        }, [index]);

    // JavaScript program for implementation
// of Heap Sort
 
function sort()
{
    setClicked(true);
    setSorted(false);
    // Build heap (rearrange array)
    if (firstHeap) {
        if (index >= 0) {
            setHeapLength(length);
            setHeapIndex(index);
            heapify(rows, length, index);
            setIndex(index-1);
        }
        else {
            setFirstHeap(false);
            setSecondHeap(true);
            setIndex(length - 1);
        }
        setList(Object.assign([], rows));
    }
    
    if (secondHeap) {
        if (index > 0) {
            var temp = rows[0];
            rows[0] = rows[index];
            rows[index] = temp;
            // call max heapify on the reduced heap
            setHeapLength(index);
            setHeapIndex(0);
            heapify(rows, index, 0);
            setIndex(index-1);
        }
        else {
            setItems(Object.assign([], rows));
            setSecondHeap(false);
            setSorted(true);
        }
        setList(Object.assign([], rows));
    }
    
    if (!secondHeap && !firstHeap) {
        setItems(Object.assign([], list));
        setSorted(true);
    }
}

// To heapify a subtree rooted with node i which is
// an index in arr[]. n is size of heap
function heapify(rows, heapLength, i)
{
    var largest = i; // Initialize largest as root
    var l = 2 * i + 1; // left = 2*i + 1
    var r = 2 * i + 2; // right = 2*i + 2
    setLargestNum(largest);

    // If left child is larger than root
    if (l < heapLength && rows[l] > rows[largest])
        largest = l;

    // If right child is larger than largest so far
    if (r < heapLength && rows[r] > rows[largest]) 
        largest = r;

    setLargestNum(largest);

    if (largest != i) {
        let swap = rows[i];
        rows[i] = rows[largest];
        rows[largest] = swap;
        setSwap(i);
        setHeapIndex(largest);

        heapify(rows, heapLength, largest);
    }
}

    useEffect(() => {
        if (!clicked)
            setSorted(false);
        setList(Object.assign([], items));
        setLength(items.length);
        setClicked(false);
        setIndex(Math.floor(items.length / 2) - 1);
        setEnd(false);
        setFirstHeap(true);
        setSecondHeap(false);
        setLargestNum(-1);
        setSwap(-1);
        setHeapLength(-1);
        setHeapIndex(-1);
        setSortClicked(false);
    }, [items]);

    if (sortClicked === false) {
        console.log("inside sort click");
        if (sorting === true) {
            setSortClicked(true);
            console.log("shpuld be sorting!");
            sort();
            setSorting(false);
        }
    }

    return (
        <div className='list'>
            {list.map((item, i) => {
                let color = 'pink';
                if (sorted) {
                    color = 'green';
                }
                else if (i === index || i === largestNum || i === swap) {
                    color = 'red';
                }

                if (length <= 10) {
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
export default HeapSort;