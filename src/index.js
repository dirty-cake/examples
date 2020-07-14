import React from 'react';
import ReactDOM from 'react-dom';
import ClickCounter from './higher order coomponents/ClickCounter.js';
import HoverCounter from './higher order coomponents/HoverCounter.js';

ReactDOM.render(
  <React.StrictMode>
    <ClickCounter name='ClickName' />
    <HoverCounter />
  </React.StrictMode>,
  document.getElementById('root')
);
