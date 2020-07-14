import React, { useState, useEffect } from 'react'

function HookUseEffect() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count +1)}>Click on me</button>
        </div>
    );
}

export default HookUseEffect