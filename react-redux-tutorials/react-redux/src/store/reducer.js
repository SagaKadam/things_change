const initialState = {
  age: 21
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  if(action.type === "AGE_UP"){
    newState.age++;
  }

  if(action.type === "AGE_DOWN"){
    newState.age--;
  }

  //-- or using switch case --//
  // switch (action.type) {
  //   case "AGE_UP":
  //     newState.age++;
  //     break;
  //   case "AGE_DOWN":
  //     newState.age--;
  //     break;
  // }

  return newState;
};

export default reducer;
