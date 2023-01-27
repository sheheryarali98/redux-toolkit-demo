import PropTypes from 'prop-types';

import Button from './Button';
import Input from './Input';

const TodoForm = ({ className }) => (
  <form className={`flex justify-start items-center gap-4 ${className}`}>
    <Input className="grow" />
    <Button type="submit" className="w-1/5">Add</Button>
  </form>
);

TodoForm.propTypes = {
  className: PropTypes.string,
};

TodoForm.defaultProps = {
  className: null,
};

export default TodoForm;
