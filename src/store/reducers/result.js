import * as actionTypes from '../actions';

const initialState = {
  result: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        result: state.result.concat({ id: new Date(), value: action.result })
      };
    case actionTypes.DELETE_RESULT:
      const newArray = state.result.filter(result => result.id !== action.id);
      return {
        ...state,
        result: newArray
      };
    default:
      break;
  }
  return state;
};

export default reducer;
