// Import libraries
import React from 'react';

// Import CSS
import '../css/reset.css';
import '../css/ex03.css';

const Ex03 = () => { 

    let owner = "정우성";
    
    return (
        <>
            <h1> 입사지원 </h1>
            <h2> 인사말 </h2>
            <p>
            안녕하세요, javaex에 오신 것을 환영합니다.<br/> 
            저희 javaex는 열정고 ㅏ창의력을 가진 인재를 찾고 있으며,여려분의 도전과 성장을 함께하고 싶습니다.<br/> 
            이곳에서 여러분의 꿈을 펼쳐보세요.<br/>
            입사지원서를 제출해 주셔서 감사드리며, 좋은 인연이 되기를 바랍니다.<br/>
            감사합니다.
            </p>

            <span>사장 {owner}</span>





        </>
    );
}

export default Ex03;
