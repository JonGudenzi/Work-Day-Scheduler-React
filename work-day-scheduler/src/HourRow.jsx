import React from "react";
// import { useState } from 'react'

function HourRow(props) {

  const saveBtn = () => {
    console.log(props.hourTask.filter(hourTime => hourTime.hour === props.currentHour));
    // props.setHourTask(hourTask.filter(hourTime => hourTime.hour === currentHour))
  }
  return (
    <div className="row" id={props.currentHour}>
      <label className="col-sm-1 hour">{props.currentHour}</label>
      <textarea id={`${props.currentHour}-hour-task`} type="text" className="col-md-10 time-block"></textarea>
      <button onClick={saveBtn} type="submit" className="saveBtn col-sm-1"><i className="fas fa-save save"></i></button>
    </div>
  );
}

export default HourRow;