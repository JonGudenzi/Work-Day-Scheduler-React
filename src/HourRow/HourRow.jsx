import React from "react";
import { useState } from 'react';
// import background from "/public/img/beach.jpg";

function HourRow(props) {
  console.log(props.text)
  const [textVal, setTextVal] = useState(props.text)

  const saveBtn = () => {
let newHourTask = props.hourTask.map(hourTaskObject => {
  if (hourTaskObject.hour === props.currentHour){
    return {...hourTaskObject, text: textVal}
  }else{
    return hourTaskObject
  }
})   
console.log(newHourTask);

    props.setHourTask(newHourTask)
    localStorage.setItem("time", JSON.stringify(newHourTask));
  }

  

  return (
    <div className="row" id={props.currentHour}>
      <label className="col-sm-1 hour">{props.currentHour + ':00'}</label>
      <textarea value={textVal} onChange={e => setTextVal(e.target.value)} id={`${props.currentHour}-hour-task`} type="text" className="col-md-10 time-block"></textarea>
      <button onClick={saveBtn} type="submit" className="saveBtn col-sm-1">SAVE<i className="fas fa-save save"></i></button>
    </div>
  );
}

export default HourRow;