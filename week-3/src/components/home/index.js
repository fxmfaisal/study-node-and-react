import React from "react";
import { Link } from 'react-router-dom';

export default class Home extends React.Component {

  render() {
    return <>
      <div className="container">
        <h1>Hello, this is home!</h1>
        <p>Some available pages to navigate:</p>
        <ol>
          <li><a href="/dashboard">Click here to Dashboard!</a></li>
          <li><a href="/employee">Click here to Employee!</a></li>
          <li><a href="/employee/add">Click here to Add Employee!</a></li>
        </ol>
      </div>
    </>
  }

}