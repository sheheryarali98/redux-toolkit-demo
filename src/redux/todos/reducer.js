import { ADD_TODO, REMOVE_TODO } from './types';

const initialState = {
  data: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        data: [...state.data, payload],
      };
    case REMOVE_TODO: {
      const index = state.data.map((item) => item.id).indexOf(payload);
      const updatedData = [...state.data];
      updatedData.splice(index, 1);
      return {
        ...state,
        data: updatedData,
      };
    }
    default:
      return state;
  }
};

export default reducer;
