// Import libraries
import React from 'react';

// Import CSS
import '../css/reset.css';
import '../css/ex02.css';

const Ex02 = () => { 
    const lastNews = "2024년 5월 12일 react 파악했다고 로랄";
    const lastNews1 = "2024년 6월 12일 게이선언";
    const lastNews2 = "2024년 7월 12일 다시 이성애자 선언";
    const lastNews3 = "2024년 8월 12일 원래 여자였던걸로 밝혀져..";
    const lastNews4 = "2024년 9월 12일 트젠인거 밝혀지고 잠적.";

    const profilePic = "./images/01.png"; // Path to the image

    return (
        <>
            <h1>박지민 프로필</h1>
            <br/>

            <h2>최근 언행</h2>
            <br/>
            {lastNews}<br/>
            {lastNews1}<br/>
            {lastNews2}<br/>
            {lastNews3}<br/>
            {lastNews4}<br/>
            <br/>

            <h2>프로필 사진</h2>
            <img src={profilePic} alt="Profile" /> <br/>
            {/* Use regular <a> for external links */}
            <a href="https://namu.wiki/w/%ED%95%98%EB%A6%AC%EC%88%98" target="_blank" rel="noopener noreferrer">
                지민이형의 롤모델
            </a>
            <br/><br/><br/><br/><br/>
            
            <h2>정보</h2><br/>

            <table border = "1">
                <thead>
                    <tr>
                        <th>이름</th>
                        <th>나이</th>
                        <th>생년월일</th>
                        <th>데뷔작</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>박지민</td>
                        <td>30</td>
                        <td>1990-05-12</td>
                        <td>나의 성 정체성</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td colSpan ="4'">나는 탑게이 (게시판 이용자라는뜻)</td>
                    </tr>
                    <tr>
                        <td colSpan ="4'">나는 탑게이</td>
                    </tr>
                    <tr>
                        <td colSpan ="4'">나는 탑게이</td>
                    </tr>
                </tbody>
            </table> <br/>

            <lable htmlFor = "txt-email">당신의 이메일 주소는? </lable>
            <input type = "text" id = "txt-email" name = "txt-email" value = ""/>

            
        </>
    );
}

export default Ex02;
