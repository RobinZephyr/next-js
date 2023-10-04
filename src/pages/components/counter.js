import React, { useEffect, useState } from "react"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const Robin = () =>{

    const [count, setCount]=useState(0);

    const handleIncrement = () => {
        setCount(count +1 )
    }

    const handleDecrement = () => {
        setCount(count - 1 )
    }

    const resetCount = () => {
        setCount(0)
    }

    return(
        <div>
            <Stack>
            <h2>
                {count}

            </h2>


                <div className="flex">
            <Button  variant="outlined" onClick={handleIncrement}>
                +1
            </Button >
            <br>
            </br>
            <Button   variant="outlined" onClick={handleDecrement}>
                -1
            </Button >

            </div>

            </Stack>
            <button onClick={resetCount}>
                RESET
            </button>
        </div>
    )
}

export default Robin