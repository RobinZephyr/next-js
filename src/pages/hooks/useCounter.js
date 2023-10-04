import { useState } from "react";

function useCounter(initialValue=0){


    const [count, setCount]=useState(initialValue);

    const handleIncrement = () => {
        setCount(count +1 )
    }

    const handleDecrement = () => {
        setCount(count - 1 )
    }

    const resetCount = () => {
        setCount(0)
    }

    return {count , handleDecrement, handleIncrement, resetCount};
}

export default useCounter;