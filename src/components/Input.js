import PropTypes from 'prop-types';

const Input = ({
  className,
  name,
  value,
  onChange,
  hasError,
  errorMessage,
}) => {
  const fieldHasError = !!(hasError && errorMessage);

  const getBorder = () => (fieldHasError ? 'border-2' : 'border');

  const getBorderColor = () => (fieldHasError ? 'border-red-500' : 'border-gray-400');

  return (
    <div className={`flex flex-col justify-center items-start ${className}`}>
      <input
        name={name}
        value={value}
        onChange={onChange}
        className={`p-2 ${getBorder()} ${getBorderColor()} rounded w-full`}
      />
      {fieldHasError && (
        <div className="text-red-500 text-sm font-medium mt-1">
          {errorMessage}
        </div>
      )}
    </div>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  hasError: PropTypes.bool,
  errorMessage: PropTypes.string,
};

Input.defaultProps = {
  className: null,
  name: '',
  value: '',
  onChange: () => {},
  hasError: false,
  errorMessage: '',
};

export default Input;
