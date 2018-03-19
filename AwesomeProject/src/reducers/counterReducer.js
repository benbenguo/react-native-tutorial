/**
 * @flow
 */
import { combineReducers } from 'redux';

const initialState = {
    count: 0,
  }
  
function counter(state=initialState, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + 1,
            }
            break;
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - 1,
            }
            break;
        default:
            return state;
    }
}

export default combineReducers({
    counter
  })