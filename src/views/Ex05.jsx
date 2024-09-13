// Import libraries
import React from 'react';

// Import CSS
import '../css/reset.css';

const Ex05 = () => { 

    let no = 0;

    const handlePlus = () => {
        no += 1;
        console.log(no);
    }

    const handleMinus = () => {
        no -= 1;
        console.log(no);
    }
    const handleReset = () => {
        no = 0;
        console.log(no);
    }

    
    
    return (
        <>
            <button tpye = "button" onClick = {handlePlus}>더하기</button><br/>
            <button tpye = "button" onClick = {handleMinus}>빼기</button><br/>
            <button tpye = "button" onClick = {handleReset}>초기화</button><br/>

        </>
    );
}

export default Ex05;
