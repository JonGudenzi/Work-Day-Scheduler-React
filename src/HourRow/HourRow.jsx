import React from "react";
import { useState } from 'react';
// import background from "/public/img/beach.jpg";

function HourRow(props) {
  console.log(props.text)
  const [textVal, setTextVal] = useState(props.text)

  const saveBtn = () => {
    let newVal = props.hourTask.filter(hourTime => hourTime.hour === props.currentHour);

    newVal[0].text = textVal;

    const oldVals = props.hourTask.filter(hourTime => hourTime.hour !== props.currentHour);

    const newArr = [...oldVals, ...newVal].sort((a, b) => a.hour - b.hour)
    props.setHourTask(newArr)
    localStorage.setItem("time", JSON.stringify(newArr));
  }

  return (
    <div className="row" id={props.currentHour}>
      <label className="col-sm-1 hour">{props.currentHour}</label>
      <textarea value={textVal} onChange={e => setTextVal(e.target.value)} id={`${props.currentHour}-hour-task`} type="text" className="col-md-10 time-block"></textarea>
      <button onClick={saveBtn} type="submit" className="saveBtn col-sm-1">SAVE<i className="fas fa-save save"></i></button>
    </div>
  );
}

export default HourRow;