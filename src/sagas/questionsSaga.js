import { apiFetchAll } from "./../apis"
import { call, put, select } from "redux-saga/effects"


const allQuestions = {
    request : {type: "FETCH_REQUEST"},
    success : (data) => {return{type: "FETCH_SUCCESS",payload: data}},
    failure : (e) => {return {type: "FETCH_FAILURE", error: e}}
}

export function* fetchAllQuestions() {

    try {
        yield put(allQuestions.request);
        const data = yield call(apiFetchAll);
        yield put(allQuestions.success(data));
        yield put({ type: "UPDATE_CURRENT_QUESTION_NUMBER", payload: 0 })
        yield put({ type: "UPDATE_SCORE", payload: 0 });
        yield put({ type: "UPDATE_QUIZ_STATUS",payload:"IN-PROGRESS" });
    } catch (e) {
        yield put(allQuestions.failure(e));
    }

}


export function* fetchNextQuestion(action) {

    const selectedAnswer = action && action.payload;
    let qNumber = yield select((state) => state.userState.currentQuestion);
    let questionList = yield select((state) => state.questionState);
    let currentScore = yield select((state) => state.userState.currentScore);

    console.log("currentScore:",selectedAnswer)
    
    let correctAnswer = questionList.data.results[qNumber].correct_answer;
    console.log("currentScore:",correctAnswer)
    if (selectedAnswer === correctAnswer) {
        yield put({ type: "UPDATE_SCORE", payload: currentScore+1 });
    }
    qNumber == 9 ? yield put({ type: "UPDATE_QUIZ_STATUS",payload:"COMPLETE" }):
        yield put({ type: "UPDATE_CURRENT_QUESTION_NUMBER", payload: qNumber+1 })
        

}