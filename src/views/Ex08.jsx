import React, { useState } from 'react';
const Ex08 = () => {
    //상태관리 변수들(값이 변화면 화면 랜더링)
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');

    
    //일반 메소드
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handlePwChange = (event) => {
        setPw(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        // 여기서 API 호출 등을 통해 로그인 처리
        let pwd = {"email": email , "pw": pw}
        console.log(pwd);
        
    };

    const handleLogin = (e) => {
        //Catch Event
        e.preventDefault(); //기본기능 못하게하는 기능.
        console.log(e.target);

        //Collect data
        console.log({"email": email});
        console.log({"pw": pw});

        //Colleting data as an object
        const formValue = {
            email: email,
            password: pw
        }

        console.log(formValue);


        //Send data using Axios
        


    };
    
    //생명주기 + 이벤트 관련 메소드
    return (
        <form action = "/ex01" method = "get" onSubmit={handleLogin}>
            <div>
                <label htmlFor = "txt-email">이메일:</label>
                <input id = "txt-email" type="text" value={email} onChange={handleEmailChange} />
            </div>
            <div>
                <label htmlFor = "txt-pw">비밀번호:</label>
                <input id = "txt-pw" type="text" value={pw} onChange={handlePwChange} />
            </div>
            <button type="submit">로그인</button>
        </form>
    );
};
export default Ex08;