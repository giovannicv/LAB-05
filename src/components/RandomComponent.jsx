import { useState } from "react";

export const Button = (props) => {
    const { text } = props;
    const [count, setCount] = useState(0);

    function handlerButton() {
        setCount(count + 1);
    }

    function handleReset() {
        setCount(0);
    }

    return (
        <div>
            <button onClick={handlerButton}>
                {text} {count}
            </button>
            <button onClick={handleReset}>Resetear</button>
        </div>
    );
}