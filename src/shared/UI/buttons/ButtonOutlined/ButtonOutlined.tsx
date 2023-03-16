import './ButtonOutlined.scss';

// Button props
type TypeButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
};

// Default props
const defaultProps = {
  variant: 'primary',
};

export const ButtonOutlined = (props: TypeButtonProps & typeof defaultProps) => {
  // Button render
  const { variant, className, ...rest } = props;

  return <button className={`btn ${variant} ${className}`} {...rest} />;
};

ButtonOutlined.defaultProps = defaultProps;
