import React, {useState,useEffect, useMemo, useCallback} from 'react';
import {useHistory} from "react-router-dom";
import {useRef} from "react";
import useFetch from "../hooks/useFetch";

const CreateDay = () => {
    const days = useFetch("http://localhost:3001/days")
    console.log(days)
    const history = useHistory();

    //dom에 접근할수있게해준다, scroll 위치, focus 줄때 사용된다
    const dayRef = useRef(null)


    function addDay() {

        // if(!days.day.includes(dayRef.current.value))
        // {
        fetch(`http://localhost:3001/days/`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                day : days.length+1
            }),
        }).then(result => {
            if (result.ok) {
                alert("생성 완료")
                history.push(`/`)
            }
        })

        console.log(days.day)
    }

    return (
            <div className="input_area">
                <label>day 추가</label>

            <button onClick={addDay}>저장</button>
            </div>

    );
}

export default CreateDay;