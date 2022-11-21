import React, { useState } from 'react';

export default function Word({word}){

    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);
    const showMeaning=()=>{
        setIsShow(!isShow)
    }

    function toggleDone() {
        setIsDone(!isDone)
    }

    return(
        <tr className={isDone ? "off" : ""}>
            <td>
                <input type="checkbox" checked={isDone}
                       onChange={toggleDone}/>
            </td>
            <td>{word.eng}</td>
            <td>{isShow && word.kor}</td>
            <td>
                <button onClick={showMeaning}>{isShow ? "숨기기" : "뜻 보기"}</button>
                <button className="btn_del">삭제</button>
            </td>
        </tr>
    );
}