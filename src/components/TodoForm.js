import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';

import Button from './Button';
import Input from './Input';

import { addTodo } from '../redux/slices/todos';

const TodoForm = ({ className }) => {
  const dispatch = useDispatch();

  const {
    values,
    handleChange,
    handleSubmit,
    resetForm,
    errors,
  } = useFormik({
    initialValues: {
      title: '',
    },
    onSubmit: ({ title }) => {
      dispatch(addTodo({
        id: v4(),
        title,
      }));
      resetForm();
    },
    validationSchema: Yup.object().shape({
      title: Yup.string().required('Title is required'),
    }),
  });

  return (
    <form onSubmit={handleSubmit} className={`flex justify-start items-start gap-4 ${className}`}>
      <Input
        name="title"
        value={values.title}
        onChange={handleChange}
        hasError={!!errors.title}
        errorMessage={errors.title}
        className="grow"
      />
      <Button type="submit" className="w-1/5">Add</Button>
    </form>
  );
};

TodoForm.propTypes = {
  className: PropTypes.string,
};

TodoForm.defaultProps = {
  className: null,
};

export default TodoForm;
