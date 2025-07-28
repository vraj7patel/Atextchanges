import React, { useState } from 'react';
import './Middle.css';

export default function Middle() {
    const [text, setText] = useState('');

    const handleClear = () => {
        setText('');
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        alert("Copied to clipboard!");
    };

     const handlePaste = async () => {
        const pastedText = await navigator.clipboard.readText();
        setText(prev => prev + pastedText);
    };

    const handleUppercase = () => {
        setText(text.toUpperCase());
    };

    const handleLowercase = () => {
        setText(text.toLowerCase());
    };
    
    const handleCapitalizeWords = () => {
    const capitalized = text
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    setText(capitalized);
    };

    const handleBadmeBatadunga = () => {
        alert("Badme batadunga 😄");
    };

    return (
        <>
            <textarea className="textarea"
                placeholder="Type something here..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            ></textarea>
            <div className="button-group">
                <button onClick={handleClear}>Clear</button>
                <button onClick={handleCopy}>Copy</button>
                 <button onClick={handlePaste}>Paste</button>
                <button onClick={handleUppercase}>Uppercase</button>
                <button onClick={handleLowercase}>Lowercase</button>
                <button onClick={handleCapitalizeWords}>CapitalizeWords</button>
                <button onClick={handleBadmeBatadunga}>Badme Batadunga</button>
            </div>
        </>
    );
}