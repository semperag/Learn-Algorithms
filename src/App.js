import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ListItems from './ListItems'
import BubbleSort from './BubbleSort';
import SelectionSort from './SelectionSort';

function App() {

  const [items, setItems] = useState([5,4,2,3,1]);
  let list = Object.assign([], items);

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
        <Navbar items={items} setItems={setItems} shuffleArray={shuffleArray}/>
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
        //SelectionSort -- done
        //HeapSort
        //InsertionSort -- done
      }
    </div>
  );
}

export default App;
