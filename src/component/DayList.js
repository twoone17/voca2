import {Link } from "react-router-dom";
import {useEffect,useState} from "react";

export default function DayList() {
  const [days,setDays] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:3001/days')
        .then(res=>{ //http 응답이고 실제 json은 아님
          return res.json() //json 함수로 json으로 만들어준다, promise 반환
        })
        .then(data=>{
          setDays(data)
            console.log(data)
        });
  },[])
  return (
    <ul className="list_day">
      {days.map(day => (
        <li key={day.id}>
          <Link to={`/day/${day.day}`}>Day {day.day}</Link>
        </li>
      ))}
    </ul>
  );
}
