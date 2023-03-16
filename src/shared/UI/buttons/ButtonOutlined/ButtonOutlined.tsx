import styles from './ButtonOutlined.module.scss';

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

  return <button className={`${styles.btn} ${styles[variant]} ${className}`} {...rest} />;
};

ButtonOutlined.defaultProps = defaultProps;
