//import 라이브러리
import React from 'react';
//import 컴포넌트

//import css


const Ex17 = () => {

    /*---상태관리 변수들(값이 변화면 화면 랜더링)  ----------*/


    /*---일반 메소드 --------------------------------------------*/
    

    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/
    
    const strArray = ['정우성','이효리','유재석'];
    let result = strArray.includes('이효리');
    console.log(result); 

    let result2 = strArray.includes('김유찬');
    console.log(result2);

    let newArray = strArray.filter((name) => (name === '정우성')); 

    console.log(newArray);

    return (
        <>
            


        </>
    );
}

export default Ex17;
