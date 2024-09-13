// Import libraries
import React, {useState} from 'react';

// Import CSS
import '../css/reset.css';

const Ex06 = () => { 

    let [Number,setNum] = useState (0);

    const handlePlus = () => {
        setNum((prev) =>{
            return prev + 1;
        })
    }

    const handleMinus = () => {
        setNum((prev) =>{
            return prev - 1;
        });
    }

    const handleReset = () => {
        setNum(() =>{
            return 0;
        });
    }
    
    return (
        <>
            {Number} <br/>
            <button type = 'button' onClick = {handlePlus}>Plus</button><br/><br/>
            <button type = 'button' onClick = {handleMinus}>Minus</button><br/><br/>
            <button type = 'button' onClick = {handleReset}>Reset</button><br/><br/>


        </>
    );
}

export default Ex06;
