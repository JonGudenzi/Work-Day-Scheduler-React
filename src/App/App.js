import React, { useState } from "react";
import '../App/App.css';
import HourRow from '../HourRow/HourRow';

function App() {
  const [hourTask, setHourTask] = useState(JSON.parse(localStorage.getItem("time"))||[
    {hour:8, text: "" },
    {hour:9, text: "" },
    {hour:10, text: "" },
    {hour:11, text: "" },
    {hour:12, text: "" },
    {hour:1, text: "" },
    {hour:2, text: "" },
    {hour:3, text: "" },
    {hour:4, text: "" },
    {hour:5, text: "" }
  ]);

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
              setHourTask={setHourTask}
              color={colorTimeBlock} />
          )
        }
        )}
    </div>
  );
}

export default App;
