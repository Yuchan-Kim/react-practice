//import 라이브러리
import React from 'react';
import {useSearchParams} from 'react-router-dom';
//import 컴포넌트

//import css


const Ex11 = () => {

    const [searchParams] = useSearchParams();
    const strNo = searchParams.get('no');
    const intNo = Number(strNo);
    

    /*---상태관리 변수들(값이 변화면 화면 랜더링)  ----------*/


    /*---일반 메소드 --------------------------------------------*/
    const getImageTag = (intNo) => {
        if (intNo === 1) {
        return <div><img src="./images/01.png" alt="숫자01" /> <p>박지민.</p></div>;
        } else if (intNo === 2) {
        return <img src="./images/02.png" alt="숫자02" />;
        } else if (intNo === 3) {
        return <img src="./images/03.png" alt="숫자03" />;
        } else if (intNo === 4) {
        return <img src="./images/04.png" alt="숫자04" />;
        } else {
        return <p>이미지없음</p>;
        }
        };
    

    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/

    return (
        <>
            {getImageTag(intNo)}

            
        </>
    );
}

export default Ex11;
