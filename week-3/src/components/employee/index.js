import React from "react";
import { Link } from 'react-router-dom';

export default class Employee extends React.Component {

  render() {
    return <>
      <p>Hello, this is Employee!</p>
      <p>
        <Link to="/">Click here to home!</Link>
      </p>
    </>
  }

}