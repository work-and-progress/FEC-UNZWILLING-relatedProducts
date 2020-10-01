import React from 'react';
import axios from 'axios';
import style from './styles.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div className={style.App}>
       APP IS RENDERING HELLO!!
      </div>
    );
  }
}
