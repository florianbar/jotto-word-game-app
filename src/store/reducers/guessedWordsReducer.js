import { actionTypes } from '../actions';

const guessedWordsReducer = (state = [], action) => {
    switch(action.type) {
        case actionTypes.GUESS_WORD:
            return [
                ...state, 
                action.payload
            ];
            break;
        default:
            return state;
    }
};

export default guessedWordsReducer;