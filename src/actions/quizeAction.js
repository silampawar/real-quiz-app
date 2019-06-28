import {FETCH_ALL_QUESTIONS,FETCH_NEXT_QUESTION} from "./actionTypes";

export const fetchAllQuestions = () =>{
    return {type:FETCH_ALL_QUESTIONS}
}
export const onSubmitNext = (selectedAnswer) =>{
    return {type:FETCH_NEXT_QUESTION,payload:selectedAnswer}
}