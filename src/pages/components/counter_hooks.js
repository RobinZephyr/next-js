import useCounter from '../hooks/useCounter';

const CounterHook =  () => {
    

    const {count , handleDecrement, handleIncrement, resetCount}=useCounter(0);

    return(
        <div>
            <p>
                {count}
            </p>

            
            <div className="flex">
            <button  variant="outlined" onClick={handleIncrement}>
                +1
            </button >
            <br>
            </br>
            <button   variant="outlined" onClick={handleDecrement}>
                -1
            </button >

            </div>

            <button onClick={resetCount}>
                RESET
            </button>

        </div>
    )
}

export default CounterHook;