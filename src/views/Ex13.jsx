//import 라이브러리
import React from 'react';
//import 컴포넌트

//import css


const Ex13 = () => {
    //반복문
    const personList = [
        {   
            no:1,
            name: '박지민1',
            hp: '010-1111-1111'
        },
        {
            no:2,
            name: '박지민2',
            hp: '010-2222-2222'
        },
        {
            no:3,
            name: '박지민3',
            hp: '010-3333-3333'
        },
        {
            no:4,
            name: '박지민5',
            hp: '010-4444-4444'
        },
        { 
            no:5,
            name: '박지민5',
            hp: '010-5555-5555'
        }
    ];

    return (

        <>
            <table>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>pk</th>
                        <th>이름</th>
                        <th>핸드폰</th>
                    </tr>
                </thead>
                <tbody>
                    {personList.map((person,index) => {
                        return (
                            <tr key = {person.no}>
                                <td>{personList.length - person.no+1}</td>
                                <td>{person.no}</td>
                                <td>{person.name}</td>
                                <td>{person.hp}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    );
}

export default Ex13;
