//import 라이브러리
import React from 'react';
import {Link} from 'react-router-dom';
//import 컴포넌트

//import css
import '../css/ex01.css';
const Ex01 = () => {

    //Comments

    //CSS Styles
    let cssEx = {
        width: '100px',
        height: '100px',
        backgroundColor: 'yellow',
        color: 'black',
        borderRadius: '50%',
        cursor: 'pointer',
    }

    let name = "박지민";
    
    return ( //자바스크립트 구역이 아님.
        <>{ /* HTML 구역 */}
           { /* 주석 */}
            <h1 className = "title"> 안녕하세요. {name} 입니다.</h1>
            <img src="./images/vsAuthenticGreen.jpg" alt="정우성 사진" />
            <a href = "https://www.naver.com/">네이버 바로가기</a>
            <Link to = "http://localhost:3000/ex00">2222네이버 바로가기2222</Link>
            {/*<input type = "text" name ="id" value=""/>*/}
            <br/>

            <table border = "1">
                <tr>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>3</td>
                    <td>3</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>4</td>
                    <td>4</td>
                    <td>4</td>
                </tr>
            </table>

            <table border = "1" style = {cssEx}>
                <colgroup>
                    <col style = {{width: "100px"}}/>
                    <col style = {{width: "100px"}}/>
                    <col style = {{width: "100px"}}/>
                    <col style = {{width: "100px"}}/>
                    
                </colgroup>
                <tr>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td colSpan  = "2">2</td>
                    
                    <td>2</td>
                </tr>
                <tr>
                    <td rowSpan="2">3</td>
                    <td>3</td>
                    <td>3</td>
                    <td>3</td>
                </tr>
                <tr>
                    
                    <td>4</td>
                    <td>4</td>
                    <td>4</td>
                </tr>
            </table>

            <div>
                <label htmlFor = "txt-name">이름</label>
                <input id = "txt-name" type = "text" name ="" value = ""/>
            </div>

            <div>
                <label htmlFor = "txt-name2">강아지</label>
                <input id = "txt-name2" type = "radio" name ="pet" value = ""/>
                <label htmlFor = "txt-name3">고양이</label>
                <input id = "txt-name3" type = "radio" name ="pet" value = ""/>
                <label htmlFor = "txt-name4">염소</label>
                <input id = "txt-name4" type = "radio" name ="pet" value = ""/>
            </div>


           

        </>
    );
}

export default Ex01;
