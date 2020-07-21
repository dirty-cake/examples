import React, { useState, useEffect } from 'react';

export const useMouseLeave = () => {
  const [mouseLeaved, setMouseLeaved] = useState(false);

  useEffect(() => {
    const onMouseLeave = event => {
      if (event.clientY <= 0 ) {
        setMouseLeaved(true);
      }
    };

    const onMouseEnter = () => setMouseLeaved(false);

    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => { 
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
    
  });
  console.log(mouseLeaved)

  return mouseLeaved;
};