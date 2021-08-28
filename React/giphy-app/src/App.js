import './App.css';
import React, { useState } from 'react'
import AddCategory from './components/AddCategory.js';
import GifGrid from './components/GifGrid';


function App() {
  const [categories, setCategories] = useState(['Evangelion'])

  return (
    <div className="App">
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories}/>
      <hr/>
      {
        categories.map( cat => (<GifGrid key={cat} category={cat} />
        ))
      }
      
    </div>
  );
}

export default App;
