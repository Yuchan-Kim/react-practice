//import 라이브러리
import React, {useState, useContext } from 'react';
//import 컴포넌트

//import css


const Ex10 = () => {

    /*---상태관리 변수들(값이 변화면 화면 랜더링)  ----------*/
    const [isLogin, setLogin] = useState(true);
    /*---일반 메소드 --------------------------------------------*/
    const handleButton = () =>{
        console.log(isLogin);
        setLogin(!isLogin); 
    }

    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/

    return (
        <>
            <button type = "submit" onClick = {handleButton}>로그인 상태변화</button>
            
            
        
            {(isLogin === true) ? (
                <ul>
                    <li>박: 박장대소를 만드는 지민이형이</li>
                    <li>지: 지금 당장 할수있는건</li>
                    <li>민: 민머리.</li>
                </ul>
            ): (
                <ul>
                    <li>김</li>
                    <li>유</li>
                    <li>찬</li>
                </ul>
            )}
       
        
            
            
        
            
        </>
    );
}

export default Ex10;
