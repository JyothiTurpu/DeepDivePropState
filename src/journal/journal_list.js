import React, { Component } from 'react';
import { JournalEntry } from './journal_entry';

const rawJournalData = [
  {title: 'Post one', content: 'Post Content1', status: 'Draft'},
  {title: 'Post two', content: 'Post Content2', status: 'published'},
  {title: 'Post three', content: 'Post Content3', status: 'published'},
  {title: 'Post four', content: 'Post Content4', status: 'published'}
];


export default class JournalList extends Component {
  constructor(props){
    super();
    this.state = {
      journalData: rawJournalData,
      isOpen: true,
      greeting: 'Hi There'
    };
  }

  clearEntries = () => {
    this.setState({journalData: [], isOpen: false});
  }

  showAllEntries = () => {
    this.setState({journalData: rawJournalData, isOpen: true});
  }

  toggleEntries = () => {
    if(this.state.isOpen){
      this.setState({journalData: [], isOpen: false});
    }else{
      this.setState({journalData: rawJournalData, isOpen: true});
    }
  }

  render() {
    const journalEntries = this.state.journalData.map(journalEntry => {
      return (
        <div key = {journalEntry.title}>
            <JournalEntry title = {journalEntry.title} content = {journalEntry.content} />
        </div>
      )
     });

    return (
      <div>
        {/* {this.state.greeting} */}
        <h1>
          {this.props.heading}
        </h1>
        <br></br>
      
        {journalEntries}
        
        <button onClick = {this.clearEntries}> Clear Journal Entries </button>
        &nbsp;&nbsp;&nbsp;
        <button onClick = {this.showAllEntries}> Show Journal Entries </button>
        &nbsp;&nbsp;&nbsp;
        <button onClick = {this.toggleEntries}> Toggle Journal Entries </button>
      </div>
    );
  }
}
