import React from 'react';

import './App.css';
import Search from './Components/Search';

const notes = [
  "Chemical Reactions and Equations",
  "Acids, Bases and Salts",
  "Metals and Non-metals",
  "Carbon and its Compounds",
  "Periodic Classification of Elements",
  "Life Processes Part-I",
]
function App() {
  return (
    <Search notes={notes}/>
  );
}

export default App;
