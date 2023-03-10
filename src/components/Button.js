import PropTypes from 'prop-types';

const Button = ({
  children,
  variant,
  type,
  className,
}) => {
  const isSecondaryVariant = variant === 'secondary';

  const getBackgroundColor = () => (isSecondaryVariant ? 'bg-red-500' : 'bg-emerald-600');

  const getHoverColor = () => (isSecondaryVariant ? 'hover:bg-red-600' : 'hover:bg-emerald-700');

  return (
    <button type={type} className={`${getBackgroundColor()} ${getHoverColor()} transition-colors p-2 rounded text-white ${className}`}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  type: PropTypes.oneOf(['button', 'submit']),
  className: PropTypes.string,
};

Button.defaultProps = {
  children: null,
  variant: 'primary',
  type: 'button',
  className: null,
};

export default Button;
