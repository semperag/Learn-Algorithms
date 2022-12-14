import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import InsertionSort from './InsertionSort'
import BubbleSort from './BubbleSort';
import SelectionSort from './SelectionSort';
import HeapSort from './HeapSort';
import QuickSort from './QuickSort';
import MergeSort from './MergeSort';

function App() {

  const [items, setItems] = useState([5,4,2,3,1]);
  const [speed, setSpeed] = useState(700);

  function shuffleArray(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  return (
    <div className="App">
      <div className='big'></div>
      <Router>
        <Navbar items={items} setItems={setItems} setSpeed={setSpeed} shuffleArray={shuffleArray}/>
          <Routes>
            <Route path="/" element={<InsertionSort items={items} speed={speed} setItems={setItems}/>} />
          </Routes>
          <Routes>
            <Route path="/bubble-sort" element={<BubbleSort items={items} speed={speed} setItems={setItems}/>} />
          </Routes>
          <Routes>
            <Route path="/selection-sort" element={<SelectionSort items={items} speed={speed} setItems={setItems}/>} />
          </Routes>
          <Routes>
            <Route path="/heap-sort" element={<HeapSort items={items} speed={speed} setItems={setItems}/>} />
          </Routes>
          <Routes>
            <Route path="/quick-sort" element={<QuickSort items={items} speed={speed} setItems={setItems}/>} />
          </Routes>
          <Routes>
            <Route path="/merge-sort" element={<MergeSort items={items} speed={speed} setItems={setItems}/>} />
          </Routes>
      </Router>
      { //QuickSort
        //MergeSort
        //BubbleSort    -- done
        //SelectionSort -- done
        //HeapSort      -- done
        //InsertionSort -- done
      }
    </div>
  );
}

export default App;
