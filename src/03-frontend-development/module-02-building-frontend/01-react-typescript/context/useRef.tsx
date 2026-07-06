import React, { useRef } from 'react'

const useRefExample: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const focusInput = () => {
        inputRef.current?.focus();
    }

    return (
        <div>
            <h1>useRef Example</h1>
            <input ref={inputRef} type="text" placeholder='type something' />
            <button onClick={focusInput}>Focus Input</button>
        </div>
    )
}

export default useRefExample