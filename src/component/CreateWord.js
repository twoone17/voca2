import React, {useState,useEffect, useMemo, useCallback} from 'react';
import {useHistory} from "react-router-dom";
import {useRef} from "react";
import useFetch from "../hooks/useFetch";

const CreateWord = () => {
    const days = useFetch("http://localhost:3001/days")
    const history = useHistory();

    function onSubmit(e){
        e.preventDefault();

        fetch(`http://localhost:3001/words/`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                day : dayRef.current.value,
                eng : engRef.current.value,
                kor : korRef.current.value,
                isDone : false
            }),
        }).then(result => {
            if (result.ok) {
                alert("생성 완료")
                history.push(`/day/${dayRef.current.value}`)
            }
        })
    }

    //dom에 접근할수있게해준다, scroll 위치, focus 줄때 사용된다
    const engRef = useRef(null)
    const korRef = useRef(null)
    const dayRef = useRef(null)

    return (
        <form onSubmit={onSubmit}>
            <div className="input_area">
                <label>Eng</label>
                <input type="text" placeholder="computer" ref={engRef}/>
            </div>
            <div className="input_area">
                <label>Kor</label>
                <input type="text" placeholder="computer" ref={korRef}/>
            </div>
            <div className="input_area">
                <label>Day</label>
                <select ref={dayRef}>
                    {days.map(day=>(
                        <option key={day.id} value={day.day}>{day.day}</option>
                    ))}


                </select>
            </div>
            <button>저장</button>
        </form>
    );
}

export default CreateWord;