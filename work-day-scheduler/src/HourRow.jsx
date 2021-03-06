import React from "react";


function HourRow(props) {
  const saveBtn = () => {
    var userText = document.getElementById(`${props.currentHour}-hour-task`).value;
  
    var hourTask = document.getElementById(props.currentHour);
   
  localStorage.setItem(hourTask, userText);
  
  }
    return (
      <div className="row" id={props.currentHour}>
          <label className="col-sm-1 hour">{props.currentHour}</label>
          <textarea id={`${props.currentHour}-hour-task`} type="text" className="col-md-10 time-block" ></textarea>
          <button onClick={saveBtn} type="submit" className="saveBtn col-sm-1"><i className="fas fa-save save"></i></button>
      </div>
    );
  }
  
  export default HourRow;