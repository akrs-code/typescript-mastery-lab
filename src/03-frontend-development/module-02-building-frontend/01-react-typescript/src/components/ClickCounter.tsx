import { useState } from "react"

const ClickCounter = () => {
    const [counter, setCounter] = useState<number>(0);

    const handleClick = () => {
        setCounter(prevCount => prevCount + 1);
    }
    return (
        <div>
            <h1>
                {counter}
            </h1>
            <button onClick={handleClick}>Increment</button>
        </div>
    )
}

export default ClickCounter