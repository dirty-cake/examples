import React from 'react';
import ReactDOM from 'react-dom';
import ClickCounter from './components/ClickCounter.js';
import HoverCounter from './components/HoverCounter.js'

ReactDOM.render(
  <React.StrictMode>
    <ClickCounter />
    <HoverCounter />
  </React.StrictMode>,
  document.getElementById('root')
);
