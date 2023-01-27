import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Button from './Button';
import Input from './Input';

const TodoForm = ({ className }) => {
  const {
    values,
    handleChange,
    handleSubmit,
    errors,
  } = useFormik({
    initialValues: {
      title: '',
    },
    onSubmit: ({ title }) => {
      console.log(title);
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
