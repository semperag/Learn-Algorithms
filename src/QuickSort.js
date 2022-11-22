import React, { useState, useEffect } from 'react';
import './ListItems.css';
const QuickSort = ({items, speed, setItems}) => {
    const [list, setList] = useState(Object.assign([], items));
    const [length, setLength] = useState(items.length);
    const [clicked, setClicked] = useState(false);
    const [index, setIndex] = useState(Math.floor(items.length / 2) - 1);
    const [end, setEnd] = useState(false);
    const [largestNum, setLargestNum] = useState(-1);
    const [swap, setSwap] = useState(-1);
    const [sorted, setSorted] = useState(false);
    const [low, setLow] = useState(0);
    const [high, setHigh] = useState(items.length-1);
    const [pivot, setPivot] = useState(-1);
    const [i, setI] = useState(-1);
    const [loopIndex, setLoopIndex] = useState(-1);
    const [endLoopIndex, setEndLoopIndex] = useState(-1);
    const [pi, setPi] = useState(-1);
    let rows = Object.assign([], list);

    useEffect(() => {

        // wait 5 s before cause a re-render
        if (clicked) {
            setTimeout(() => {
                sort();
            }, speed*3);
        }
        }, [index]);

        useEffect(() => {

            // wait 5 s before cause a re-render
            if (clicked) {
                setTimeout(() => {
                    
                }, 1000);
            }
        }, [list]);

    // JavaScript program for implementation
// of Heap Sort

// A utility function to swap two elements
function swapElems(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    setList(Object.assign([], arr));
}
  
/* This function takes last element as pivot, places
   the pivot element at its correct position in sorted
   array, and places all smaller (smaller than pivot)
   to left of pivot and all greater elements to right
   of pivot */
function partition(arr, low, high) {
  
    // pivot
    //setPivot(arr[high]);
  
    // Index of smaller element and
    // indicates the right position
    // of pivot found so far
    //setI(low - 1);
    //setLoopIndex(low);
    //setEndLoopIndex(high-1);
    let piv = arr[high];
    let i = low - 1;
    for (let j = low; j <= high - 1; j++) {
  
        // If current element is smaller 
        // than the pivot
        if (arr[j] < piv) {
  
            // Increment index of 
            // smaller element
            i++;
            swapElems(arr, i, j);
            //setList(Object.assign([], arr));
        }
    }
    //part(arr);
    swapElems(arr, i + 1, high);
    return(i + 1);
}

function part(arr) {
    if (loopIndex > endLoopIndex) {
        swapElems(arr, i + 1, high);
        setPi(i + 1);
    }
    else {
        if (arr[loopIndex] < pivot) {
  
            // Increment index of 
            // smaller element
            setI(i+1);
            swapElems(arr, i, loopIndex);
        }
        setLoopIndex(loopIndex+1)
        part(arr);
    }
}
  
/* The main function that implements QuickSort
          arr[] --> Array to be sorted,
          low --> Starting index,
          high --> Ending index
 */
async function quickSort(arr, low, high) {
    if (low < high) {
  
        // pi is partitioning index, arr[p]
        // is now at right place 
        let pi = partition(arr, low, high);
  
        // Separately sort elements before
        // partition and after partition
        setList(Object.assign([], arr));
        setHigh(pi - 1);
        setLow(low);
        quickSort(arr, low, pi - 1);
        setHigh(high);
        setLow(pi + 1);
        quickSort(arr, pi + 1, high);
        setList(Object.assign([], arr));
    }
}

function sort() {
    quickSort(rows, 0, rows.length-1);
}

// This code is contributed by SoumikMondal

    useEffect(() => {
        if (!clicked)
            setSorted(false);
        setList(Object.assign([], items));
        setLength(items.length);
        setClicked(false);
        setIndex(Math.floor(items.length / 2) - 1);
        setEnd(false);
        setLargestNum(-1);
        setSwap(-1);
    }, [items]);

    return (
        <div className='list'>
            {list.map((item, i) => {
                let color = 'pink';
                if (sorted) {
                    color = 'green';
                }
                else if (i === index || i === high || i === low) {
                    color = 'red';
                }
                return (<div key={item} className="item" style={{height: `${(item*650)/items.length}px`, backgroundColor: `${color}`}}>
                    {item}
                    </div>)})}
            <button onClick={() => sort()}>sort</button>
        </div>
    )
}
export default QuickSort;