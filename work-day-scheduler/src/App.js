import React, { useState } from "react";
import './styles/App.css';
import HourRow from './HourRow';

function App() {

  const [hourTask, setHourTask] = useState(JSON.parse(localStorage.getItem("time"))||[
    {hour:8, text: "" },
    {hour:9, text: "" },
    {hour:10, text: "" },
    {hour:11, text: "" },
    {hour:12, text: "" },
    {hour:13, text: "" },
    {hour:14, text: "" },
    {hour:15, text: "" },
    {hour:16, text: "" },
    {hour:17, text: "" }
  ])
  console.log(hourTask);
  return (
    <div className="App">
      {
        hourTask.map(({hour, text}) => {
    
          return (
            <HourRow
              currentHour={hour}
              text={text}
              key={hour}
              hourTask={hourTask}
              setHourTask={setHourTask} />
          )
        }

        )}
    </div>
  );
}

export default App;
