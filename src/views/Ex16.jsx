//import 라이브러리
import React from 'react';
//import 컴포넌트

//import css


const Ex16 = () => {

    /*---상태관리 변수들(값이 변화면 화면 랜더링)  ----------*/


    /*---일반 메소드 --------------------------------------------*/
    

    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/


    const name = '정우성';
    const no1 = 3;
    const no2 = 5;

    const str2 = `안녕하세요 ${name} 입니다. ${no1}*${no2} = ${no1*no2}입니다.`;
    console.log(str2);

    return (
        <>
            {/*안녕하세요 정우성입니다. 3*5=15 입니다.*/}
            {str2}


        </>
    );
}

export default Ex16;
