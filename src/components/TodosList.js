import { useSelector } from 'react-redux';

import TodoForm from './TodoForm';
import Todo from './Todo';

import { getTodos } from '../redux/todos/selectors';

const TodoList = () => {
  const todos = useSelector(getTodos);

  return (
    <div className="border border-gray-300 rounded p-6 flex flex-col items-center justify-center w-1/2">
      <div className="w-full text-center text-5xl mb-4">
        Todos
      </div>
      <TodoForm className="w-full mb-4" />
      <div className="w-full flex flex-col items-center justify-center gap-2">
        {todos.map((todo) => <Todo todo={todo} className="w-full" />)}
      </div>
    </div>
  );
};

export default TodoList;
