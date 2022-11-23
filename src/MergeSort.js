import React, { useState, useEffect } from 'react';
import './ListItems.css';

const MergeSort = ({items, speed, setItems}) => {
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
                }, speed);
            }
            }, [list]);

    // JavaScript program for implementation
// of Heap Sort
 
function sort()
{
    mergeSort(rows, 0, items.length-1);
}

// Merges two subarrays of arr[].
// First subarray is arr[l..m]
// Second subarray is arr[m+1..r]
function merge(arr, l, m, r)
{
    var n1 = m - l + 1;
    var n2 = r - m;
 
    // Create temp arrays
    var L = new Array(n1);
    var R = new Array(n2);
 
    // Copy data to temp arrays L[] and R[]
    for (var i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (var j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];
 
    // Merge the temp arrays back into arr[l..r]
 
    // Initial index of first subarray
    var i = 0;
 
    // Initial index of second subarray
    var j = 0;
 
    // Initial index of merged subarray
    var k = l;
 
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
 
    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
 
    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
    setList(Object.assign([], arr));
}
 
// l is for left index and r is
// right index of the sub-array
// of arr to be sorted */
async function mergeSort(arr,l, r) {
    if(l>=r){
        return;//returns recursively
    }
    var m =l+ parseInt((r-l)/2);
    await mergeSort(arr,l,m);
    await mergeSort(arr,m+1,r);
    merge(arr,l,m,r);
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
        setFirstHeap(true);
        setSecondHeap(false);
        setLargestNum(-1);
        setSwap(-1);
        setHeapLength(-1);
        setHeapIndex(-1);
    }, [items]);

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
                return (<div key={item} className="item" style={{height: `${(item*650)/items.length}px`, backgroundColor: `${color}`}}>
                    {item}
                    </div>)})}
            <button onClick={() => sort()}>sort</button>
        </div>
    )
}

export default MergeSort;