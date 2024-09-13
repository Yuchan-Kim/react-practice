// Import libraries
import React, {useState} from 'react';

// Import CSS
import '../css/reset.css';

const Ex06 = () => { 
    let [no,setNo] = useState(0);
    /*
    const handlePlus = () => {
        no += 1;
        setNo(no);
    }
    */

    const handlePlus = () => {
        /*
        setNo(function(no){
            no += 1;
            return no;
        })
        */
        setNo((preNo) => {
            return preNo  +1;
    
        });
    };

    

    let [name,setName] = useState('');

    const handleNamePrint = () => {
        name += 'JiminPark';
        setName(name);
        console.log(name);

    }
    
    return (
        <>
            <h1>HELLO WORLD</h1>

            {no} <br/>
            <button type = "button" onClick = {handlePlus}> 번호 출력 </button><br/><br/><br/><br/>
            {name}
            <button type = "button" onClick = {handleNamePrint}> 이름 출력 </button>


        </>
    );
}

export default Ex06;
