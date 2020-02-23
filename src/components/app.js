import React, { Component } from 'react';
import JournalList from '../journal/journal_list';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>DevCamp React Starter</h1>
        <h2>React Skeleton</h2>
        <h3>React Props and State Deep Dive</h3>
        <br/>
        <JournalList heading = "Journal List One"/>
      </div>
    );
  }
}