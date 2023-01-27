import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      state.data.push(payload);
    },
    removeTodo: (state, { payload }) => {
      const index = state.data.map((item) => item.id).indexOf(payload);
      state.data.splice(index, 1);
    },
  },
});

export const { addTodo, removeTodo } = todosSlice.actions;

export default todosSlice.reducer;
