const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
  counter: 0
};

// Reducers
const rootReducer = (state = initialState, action) => {
  if (action.type === 'INC_COUNTER') {
    return {
      ...state,
      counter: state.counter + 1
    };
  }

  if (action.type === 'ADD_COUNTER') {
    return {
      ...state,
      counter: state.counter + action.value
    };
  }

  return state;
};

// Store
const store = createStore(rootReducer);

// Subscription
store.subscribe(() => {
  console.log('[Subscription]', store.getState());
});

// Actions and Dispatching
store.dispatch({ type: 'INC_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', value: 10 });
console.log(store.getState());
