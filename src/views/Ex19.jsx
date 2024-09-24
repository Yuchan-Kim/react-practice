//import 라이브러리
import React, { useState } from 'react';
//import 컴포넌트

//import css


const Ex19 = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [bloodtype, setBloodType] = useState('');
    const [telecom, setTelecom] = useState('Selections'); // 기본값 설정
    const [text, setText] = useState('정우성'); // 기본값 설정
    const [hobbies, setHobbies] = useState([]);

    /*---일반 메소드 --------------------------------------------*/
    const handleId = (e) => {
        setId(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleRadio = (e) => {
        setBloodType(e.target.value);
    }

    const handleTelecom = (e) => {
        setTelecom(e.target.value);
    }

    const handleText = (e) => {
        setText(e.target.value);
    }

    const handleHobbies = (e) => {
        const thisValue = e.target.value;

        if (hobbies.includes(thisValue)) {
            const newHobbies = hobbies.filter((hobby) => hobby !== thisValue);
            setHobbies(newHobbies); 
        } else {
            const newHobbies = [...hobbies, thisValue];
            console.log(newHobbies);
            setHobbies(newHobbies); 
        }
    }

    //전송버튼 클릭 이벤트
    const handleJoin = (e) => {
        e.preventDefault();
        const userVo = {
            id: id,
            pw: password,
            bloodtype: bloodtype,
            telecom: telecom,
            text: text,
            hobbies: hobbies
        }
        console.log(userVo);
    }


    return (
        <>
        <form onSubmit={handleJoin}>
            <div>
                <label>아이디: </label>
                <input type="text" name="id" value={id} onChange={handleId} /><br />
            </div>

            <div>
                <label>비밀번호: </label>
                <input type="password" name="password" value={password} onChange={handlePassword} /><br />
            </div>

            <div>
                <span>혈액형: </span>
                <label>A형 </label> <input type="radio" name="bloodtype" value="A" onChange={handleRadio} />
                <label> B형 </label> <input type="radio" name="bloodtype" value="B" onChange={handleRadio} />
                <label> O형 </label> <input type="radio" name="bloodtype" value="O" onChange={handleRadio} />
                <label> AB형 </label> <input type="radio" name="bloodtype" value="AB" onChange={handleRadio} />
            </div>

            <div>
                <span>취미: </span>
                <label> 독서 </label> <input type="checkbox" name="hobby" value="reading" onChange={handleHobbies} />
                <label> 여행 </label> <input type="checkbox" name="hobby" value="traveling" onChange={handleHobbies} />
                <label> 영화 </label> <input type="checkbox" name="hobby" value="movies" onChange={handleHobbies} />
            </div>

            <div>
                <label>이동통신사: </label>
                <select name="carrier" value={telecom} onChange={handleTelecom}>
                    <option value="Selections">선택하세요</option>
                    <option value="SKT">SKT</option>
                    <option value="KT">KT</option>
                    <option value="LGU+">LG U+</option>
                </select>
            </div>

            <div>
                <label>자기소개:</label> <br />
                <textarea name="introduce" rows="4" cols="20" value={text} onChange={handleText} />
            </div>

            <button type = 'submit'>전송</button>

        </form>
            
        </>
    );
}

export default Ex19;
