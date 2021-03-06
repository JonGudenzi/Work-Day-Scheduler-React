import React, { useState } from "react";
import './styles/App.css';
import HourRow from './HourRow';

function App() {


  const [hourTask, setHourTask] = useState([
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
  ])
  console.log(hourTask);
  return (
    <div className="App">
      {
        hourTask.map(({hour, text}) => {
          console.log(hour);
          return (
            <HourRow
              currentHour={hour}
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
