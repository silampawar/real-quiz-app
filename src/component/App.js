import React from 'react';
import logo from './../logo.svg';
import './../App.css';
import { fetchAllQuestions,onSubmitNext } from '../actions/quizeAction';
import { useState, useEffect } from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import QuizeComplete from "./quizeCompleted"

function App({fetchQuestions,questionsList,onSubmitNext,currentQuestionNum,quizStatus,currentScore}) {
  console.log("questionsList",questionsList);
  const [selectedAnswer, setSelectedAnswer] = useState(0);

  console.log("fetchQuestions,onSubmitNext,currentQuestionNum,quizStatus: ",currentQuestionNum,quizStatus,currentScore)
  const questionData = questionsList && questionsList.data&& questionsList.data.results && questionsList.data.results[currentQuestionNum || 0];
  useEffect(()=>{
    fetchQuestions();
  },[fetchQuestions]);

  const onNextClick = () => {
    onSubmitNext(selectedAnswer);
    //document.getElementsByName("Options")
  }
  const handleChange = (e) => {
   
    setSelectedAnswer(e.target.value);
    
  }

  return (
    <div className="App">
      <div className="grid-container">
        <div className="header">
          Quick Quize App
      </div>

{quizStatus==="COMPLETE"?<QuizeComplete currentScore={currentScore}/>:<>

        <div className="question_detail">
          Question #{currentQuestionNum+1}/10: 
          {questionData &&
          <div> {questionData.question}</div>
          }
       </div>
       
        <div className="options">
        {questionData && questionData.correct_answer && 
          <div className="option" ><input type="radio" name="Options" value={questionData.correct_answer } onChange={(e)=>handleChange(e)}/>
          {questionData.correct_answer }<br /></div>
          
          }
          {questionData && questionData.incorrect_answers.map(option=>
          <div className="option" ><input type="radio" name="Options" value={option} onChange={(e)=>handleChange(e)}/>{option}<br /></div>
          
          )}
        </div>
        
          <div className="form_buttons">
          <input type="button" value="Next" onClick= {onNextClick}/>
          <input type="button" value="Reset"/>
        </div>
        </>
}
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) =>({
  fetchQuestions : bindActionCreators(fetchAllQuestions,dispatch),
  onSubmitNext : bindActionCreators(onSubmitNext,dispatch)
})

const mapStateToProps = (state) =>({
  questionsList: state.questionState,
  currentQuestionNum: state.userState.currentQuestion,
  currentScore: state.userState.currentScore,
  quizStatus: state.userState.quizStatus,

})

export default connect(mapStateToProps,mapDispatchToProps)(App);
