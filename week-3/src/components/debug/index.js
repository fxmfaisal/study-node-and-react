import React from "react";
import { Link } from 'react-router-dom';

export default class Debug extends React.Component {

  render() {
    return <>
      <p>Hello, this is debug page!</p>
      <p>
        <Link to="/">Click here to home!</Link>
      </p>
    </>
  }

}