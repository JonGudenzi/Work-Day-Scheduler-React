import React from "react";
import './styles/App.css';
import HourRow from './HourRow';

class App extends React.Component {
  state = {
    hourTask: {
      8: "",
      9: "",
      10: "",
      11: "",
      12: "",
      1: "",
      2: "",
      3: "",
      4: "",
      5: ""
    }
  };

  render() {
    const hours = [8, 9, 10, 11, 12, 1, 2, 3, 4, 5]
    return (
      <div className="App">
        {hours.map((hour) => {
          return <HourRow currentHour={hour}
            stateHour={this.state.hourTask[hour]} />
        })}
      </div>
    );
    
  }
}

export default App;
