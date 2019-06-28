import {FETCH_ALL_QUESTIONS,FETCH_SUCCESS,FETCH_FAILURE} from "./../actions/actionTypes";

export function questionAll(state={},action){
    switch(action.type){
        case FETCH_ALL_QUESTIONS:
            return state;
            case FETCH_SUCCESS:
                return {...state,...action.payload};
            case FETCH_FAILURE:
                return {...state,...action.error};
        default:
            return state;
    }
}
export function questionUpdate(state={},action){
    switch(action.type){
        case "UPDATE_SCORE":
            return {...state,currentScore:action.payload};
        case "UPDATE_CURRENT_QUESTION_NUMBER":
                return {...state,currentQuestion:action.payload};
        case "UPDATE_QUIZ_STATUS":
                return {...state,quizStatus:action.payload};
        default:
            return state;
    }
}