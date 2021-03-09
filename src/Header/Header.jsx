import React from "react";
import Moment from "react-moment";


function Header() {
    return (
        <header className="jumbotron">
      <h1 className="display-3">Work Day Scheduler</h1>
      <p className="lead">A simple calendar app for scheduling your work day</p>
      <Moment format="dddd MMMM Do YYYY, h:mm a"></Moment>
      <p className="lead"></p>
    </header>
    )
}

export default Header;