import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import Button from './Button';

import { removeTodo } from '../redux/todos/actions';

const Todo = ({ todo, className }) => {
  if (!todo) return null;

  const dispatch = useDispatch();

  const { id, title } = todo;

  const handleRemoveTodo = (e) => {
    e.preventDefault();
    dispatch(removeTodo(id));
  };

  return (
    <div className={`border border-gray-400 rounded p-2 flex items-center justify-center ${className}`}>
      <div className="grow text-xl">
        {title}
      </div>
      <Button
        onClick={handleRemoveTodo}
        variant="secondary"
        className="w-1/5"
      >
        Remove
      </Button>
    </div>
  );
};

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
  }),
  className: PropTypes.string,
};

Todo.defaultProps = {
  todo: null,
  className: null,
};

export default Todo;
