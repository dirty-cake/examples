import React from 'react';
import './App.css';
import { useMouseMove } from './hooks/useMouseMove';


const App = () => {
  const position = useMouseMove();

  return (
    <div>
      {position.x} : {position.y}
    </div>
  );
};
export default App;