import { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
    const [number, setNumber] = useState(32)

    const handleInputChanged = (event) => {
        const value = event.target.value;
        setNumber(value);

        let errorText;
        if (isNaN(value) || value <= 0) {
            errorText = "Only positive numbers are allowed"
        } else {
            errorText = ""
            setCurrentNOE(value);
        }
        setErrorAlert(errorText);
    }

    return (
        <div id="number-of-events">
            <label>Number of Events:</label>
            <input
                type="text"
                value={number}
                onChange={handleInputChanged}
            />
        </div>
    )
}

export default NumberOfEvents;