import React from 'react';
import ReactDom from 'react-dom';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ListItems from './ListItems'
import BubbleSort from './BubbleSort';
import SelectionSort from './SelectionSort';

function App() {

  const items = [5,4,2,3,1];

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
          <Routes>
            <Route path="/selection-sort" element={<SelectionSort items={items}/>} />
          </Routes>
      </Router>
      { //QuickSort
        //MergeSort
        //BubbleSort    -- done
        //SelectionSort
        //HeapSort
        //InsertionSort -- done
      }
    </div>
  );
}

export default App;
