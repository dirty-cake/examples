import { useState, useEffect } from 'react'

export const useMouseMove = () => {
    const [position, setPosition] = useState({x: 0, y: 0})

    useEffect(() => {
        const setEventPosition = (event) => {
            setPosition({x: event.clientX, y: event.clientY})
        }
        window.addEventListener("mousemove", setEventPosition)
        
        return () => {
            window.removeEventListener("mousemove", setEventPosition)
        }
    })
    return position;
};



