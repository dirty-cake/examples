import React from 'react';
import './App.css';
import { useMouseMove } from './hooks/useMouseMove';


const App = () => {
  const position = useMouseMove();

  return (
    <div>
      <p>You are on position of</p> 
      <p>X - {position.x}</p> 
      <p>Y - {position.y}</p>
    </div>
  );
};
export default App;