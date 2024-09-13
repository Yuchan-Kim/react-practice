// Import libraries
import React from 'react';

// Import CSS
import '../css/reset.css';
import '../css/ex03.css';

const Ex03 = () => { 

    let owner = "정우성";

    let imgSrc = "../images/job.jpg";
    
    return (
        <>
        <body>
        <h1> 입사지원 </h1><br/>
            <h2> 인사말 </h2>
            <img class = "img" src = {imgSrc} alt = "이미지"/>
            <p>
            안녕하세요, javaex에 오신 것을 환영합니다.<br/> 
            저희 javaex는 열정과 창의력을 가진 인재를 찾고 있으며,여려분의 도전과 성장을 함께하고 싶습니다.<br/> 
            이곳에서 여러분의 꿈을 펼쳐보세요.<br/>
            입사지원서를 제출해 주셔서 감사드리며, 좋은 인연이 되기를 바랍니다.<br/>
            감사합니다.
            </p><br/><br/>

            <h3>사장 {owner}</h3>
            <br/>
            <h2>모집요강</h2>
            <table border = "1'">
                <thead>
                    <tr>
                        <th colSpan ="2">모집직군</th>
                        <th>모집전공</th>
                        <th>비고</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td colSpan ="2">생산기술직</td>
                        <td>화학공학</td>
                        <td rowSpan ="3">전공관련 자경증 우대</td>
                    </tr>
                    <tr>
                        <td rowSpan ="2">생산지원직</td>
                        <td>공무</td>
                        <td>기계전기</td>
                    </tr>
                    <tr>
                        <td>안전환경</td>
                        <td>안전,환경</td>
                    </tr>
                    <tr>
                        <td colSpan ="2">연구개발직</td>
                        <td>화학공학</td>
                        <td rowSpan ="3">석사</td>
                    </tr>
                </tbody>
            </table>
            <br/><br/><br/>

            <h2>이력서제출</h2>
            <label htmlFor = "fileUpload">파일첨부</label>
            <input type ="file" name = "fileUpload"/>
        </body>
            







        </>
    );
}

export default Ex03;
