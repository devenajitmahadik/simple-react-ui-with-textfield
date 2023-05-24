import React, { useState, useRef } from "react";
import './SimpleForm.scss'

const SimpleForm = () => {
    const [inputValue, setInputValue] = useState("");
    const inputRef = useRef(null);

    const handleInputChange = (event) => {
        resetInputField();
        setInputValue(event.target.value);
    }

    const handleSubmit = () => {
        resetInputField();
        if (inputValue && isInteger(inputValue)) {
            alert(inputValue);
        }
        else {
            inputRef.current.className = 'invalid';
            console.log('Not interger');
        }
    }

    const resetInputField = () => {
        inputRef.current.className = '';
        inputRef.current.style.animation = 'none';
        void inputRef.current.offsetWidth;
        inputRef.current.style.animation = null;
      };
    

    const isInteger = (value) => {
        return Number.isInteger(Number(value));
    }
    return (
        <div className="simple-form-container">
            <div className="input-field-wrapper">
                <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </div>
            <div className="submit-button-wrapper">
                <button
                    onClick={handleSubmit}
                >Submit</button>
            </div>
        </div>
    )
}

export default SimpleForm;