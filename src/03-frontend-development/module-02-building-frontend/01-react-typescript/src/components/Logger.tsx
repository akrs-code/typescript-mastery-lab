import React, { memo } from "react";

type LoggerProps = {
    onLog: () => void;
};


const Logger = memo(({ onLog }: LoggerProps) => {
    console.log(`Logger component rendered`);
    return (
        <div>
            <button onClick={onLog}>Trigger Log</button>
        </div>
    );
});

export default Logger;