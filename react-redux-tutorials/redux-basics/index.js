/-- redux basic tutorial. --/

const { createStore } = require("redux");

const initialState = {
  age: 24
};

const myReducer = (state = initialState, action) => {
  const newState = {...state}; //copy of the state, because in react and redux we cannot mutate the state directly.
  if (action.type === "ADD") {
    newState.age += 1;
  }
  if (action.type === "SUBSTRACT") {
    newState.age -= 1;
  }
  return newState;
};

const store = createStore(myReducer);

// subscribe() is used to how many times the state has been changed.
store.subscribe(() => {
    console.log("state changed: "+ JSON.stringify(store.getState()));
})

console.log(store.getState());
console.log("initial state: "+ JSON.stringify(store.getState()));

store.dispatch({
  type: "ADD"
});
console.log("ADD : "+ JSON.stringify(store.getState()));

store.dispatch({
    type: "SUBSTRACT"
  });
console.log("SUBSTRACT : "+ JSON.stringify(store.getState()));
