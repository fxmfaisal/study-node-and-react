import React from "react";
import { Link } from 'react-router-dom';

export default class Dashboard extends React.Component {

  render() {
    return <>
      <p>Hello, this is Dashboard!</p>
      <p>
        <Link to="/">Click here to home!</Link>
      </p>
    </>
  }

}