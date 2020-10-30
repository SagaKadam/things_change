const initialState = {
  age: 21
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  //-- or using switch case --//
  switch (action.type) {
    case "AGE_UP_ASYNC":
      newState.age += action.value;
      break;
    case "AGE_DOWN":
      newState.age -= action.value;
      break;
  }

  return newState; 
};

export default reducer;
