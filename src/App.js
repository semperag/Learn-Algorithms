import React from 'react';
import ReactDom from 'react-dom';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ListItems from './ListItems'
import BubbleSort from './BubbleSort';

function App() {

  const items = [1,5,4,2,3];

  return (
    <div className="App">
      <div className='big'></div>
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<ListItems items={items}/>} />
          </Routes>
          <Routes>
            <Route path="/bubble-sort" element={<BubbleSort items={items}/>} />
          </Routes>
      </Router>
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
