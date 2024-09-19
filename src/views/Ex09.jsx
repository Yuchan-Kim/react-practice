//import 라이브러리
import React, {useState, useContext } from 'react';
//import 컴포넌트

//import css


const Ex09 = () => {

    /*---상태관리 변수들(값이 변화면 화면 랜더링)  ----------*/
    const isLogin = true;
    /*---일반 메소드 --------------------------------------------*/
   

    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/

    return (
        <>
            {isLogin ===true? "Loading" : "Error" }

            { 
                (isLogin === false) ? (
                <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
            ): (
                <ul>
                <li>a</li>
                <li>b</li>
                <li>c</li>
            </ul>
            )}
        </>
    );
}

export default Ex09;
