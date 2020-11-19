export const initialState = [];

export const ADD = "ADD";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        {
          name: action.name,
        },
      ];
    default:
      return state;
  }
};

export default reducer;
