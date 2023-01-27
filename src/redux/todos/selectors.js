const baseSelector = (state) => state.todos;

// eslint-disable-next-line import/prefer-default-export
export const getTodos = (state) => baseSelector(state).data || [];
