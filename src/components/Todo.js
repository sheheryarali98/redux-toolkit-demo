import PropTypes from 'prop-types';

import Button from './Button';

const Todo = ({ children, className }) => (
  <div className={`border border-gray-400 rounded p-2 flex items-center justify-center ${className}`}>
    <div className="grow text-xl">
      {children}
    </div>
    <Button variant="secondary" className="w-1/5">Remove</Button>
  </div>
);

Todo.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
};

Todo.defaultProps = {
  children: null,
  className: null,
};

export default Todo;
