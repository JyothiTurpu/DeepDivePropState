import React from 'react';

export const JournalEntry = (props) => {
  return(
    <div>
      <h1>{props.title}</h1>
      <h2>{props.content}</h2>
      <br/>
    </div>
  );
}