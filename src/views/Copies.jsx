//import 라이브러리
import React, {useState, useContext } from 'react';
//import 컴포넌트

//import css


const Ex01 = () => {

    /*---상태관리 변수들(값이 변화면 화면 랜더링)  ----------*/


    /*---일반 메소드 --------------------------------------------*/
    const hendleNamePrint = ()=>{
        console.log('정우성');
    }

    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/

    return (
        <>
            <button type="button" onClick={hendleNamePrint}>
            이름출력
            </button>
        </>
    );
}

export default Ex01;
