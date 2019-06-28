import { takeEvery } from 'redux-saga/effects'
import { fetchAllQuestions ,fetchNextQuestion} from './questionsSaga.js';
import {FETCH_ALL_QUESTIONS, FETCH_NEXT_QUESTION} from "./../actions/actionTypes";

export default function* rootSaga() {
    yield takeEvery(FETCH_ALL_QUESTIONS, fetchAllQuestions);
    yield takeEvery(FETCH_NEXT_QUESTION, fetchNextQuestion);
  }