import React from 'react';
import './App.css';
import TestComp from './testcomp';
import AudioSelector from './audioSelector';

function App() {
  return (
    <div className="App">
{/*       
        <HeaderBar />
        <Timer />
         */}
        <AudioSelector />
        <TestComp big="apple" />
    </div>
  );
}

export default App;
