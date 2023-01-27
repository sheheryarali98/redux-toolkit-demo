import PropTypes from 'prop-types';

const Input = ({ className }) => (
  <input className={`p-2 border border-gray-400 rounded ${className}`} />
);

Input.propTypes = {
  className: PropTypes.string,
};

Input.defaultProps = {
  className: null,
};

export default Input;
