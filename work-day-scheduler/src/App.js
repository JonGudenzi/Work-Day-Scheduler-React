import logo from './logo.svg';
import './App.css';
import HourRow from './HourRow';
import Header from './Header';

function App() {
  const hours = [8, 9, 10, 11, 12, 1, 2, 3, 4, 5]
  return (
    <div className="App">
      {hours.map((hour)=>{
        return <HourRow key={hour.toString()} currentHour={hour} />
      })}
    </div>
  );
}

export default App;
