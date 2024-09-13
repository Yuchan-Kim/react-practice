// Import libraries
import React from 'react';

// Import CSS
import '../css/reset.css';
import '../css/ex04.css';

const Ex04 = () => { 

    function handlePrint(){
        console.log('박지민');
    }

    let no = 0;

    const handlePlus = () => {
        no += 1;
        console.log(no);
    }

    
    
    return (
        <>
            <button tpye = "button" onClick = {handlePrint}>박지민</button><br/>
            <button tpye = "button" onClick = {handlePlus}>김유찬</button>
        </>
    );
}

export default Ex04;
