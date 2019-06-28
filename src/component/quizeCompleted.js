import React from 'react';
import logo from './../logo.svg';
import './../App.css';

function QuizeComplete({currentScore}) {
  return (

    <div className="question_detail">
      Your quize is complete. Here is the result: {currentScore}/10
       </div>



  );
}

export default QuizeComplete;
