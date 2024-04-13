import React, { useState } from "react";

export const CompWithProps = () => {
    const [inputText, setInputText] = useState("");

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    return (
        <div>
            <input
                type="text"
                value={inputText}
                onChange={handleInputChange}
                placeholder="Escribe algo..."
            />
            <div>
                <p>{inputText}</p>
                
            </div>
        </div>
    );
}

export default CompWithProps;
