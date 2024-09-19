//import 라이브러리
import React from 'react';
import {useSearchParams} from 'react-router-dom';
//import 컴포넌트

//import css


const Ex12 = () => {
    //반복문
    const fruitList = ['사과', '바나나', '체리', '포도'];

    return (
        <>
            <ul>
            {fruitList.map((fruit,index) => {
                    console.log(fruit);
                    console.log(index);
                    return(
                        <li>{fruit}</li>
                    )
            })}
            </ul>
        </>
    );
}

export default Ex12;
