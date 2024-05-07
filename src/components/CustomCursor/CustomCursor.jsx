import React, { useState, useEffect } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hovered, setHovered] = useState(false);
    const [cursorColor, setCursorColor] = useState(getRandomColor());

    useEffect(() => {
        const updateCursorPosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener('mousemove', updateCursorPosition);

        return () => {
            document.removeEventListener('mousemove', updateCursorPosition);
        };
    }, []);

    useEffect(() => {
        setCursorColor(getRandomColor());
    }, [hovered]);

    const handleHover = () => {
        setHovered(true);
    };

    const handleHoverExit = () => {
        setHovered(false);
    };

    function getRandomColor() {
        const red = Math.floor(Math.random() * 100);
        const green = Math.floor(Math.random() * 50);
        const blue = Math.floor(Math.random() * 150);
        return `rgb(${red}, ${green}, ${blue})`;
    }

    return (
        <div className={`custom-cursor ${hovered ? 'hovered' : ''}`} style={{ left: `${position.x}px`, top: `${position.y}px`, backgroundColor: cursorColor }} />
    );
};

export default CustomCursor;
