import React from "react";
import { Link } from 'react-router-dom';

export default class Home extends React.Component {

  render() {
    return <>
      <p>Hello, this is home!</p>
      <ol>
        <li><Link to="/dashboard">Click here to Dashboard!</Link></li>
        <li><Link to="/employee">Click here to Employee!</Link></li>
        <li><Link to="/employee/add">Click here to Add Employee!</Link></li>
      </ol>
    </>
  }

}