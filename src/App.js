import React from 'react';
import ReactDom from 'react-dom';
import './App.css';
import Navbar from './Navbar';
import ListItems from './ListItems'

function App() {

  const items = [1,5,4,3,2];

  return (
    <div className="App">
      <div className='big'></div>
      <Navbar />
      <ListItems items={items}/>
      { //QuickSort
        //MergeSort
        //BubbleSort
        //SelectionSort
        //HeapSort
        //InsertionSort
      }
    </div>
  );
}

export default App;
