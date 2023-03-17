import { ButtonHTMLAttributes, Component, ReactNode } from 'react';
import styles from './styles.module.scss';

type TypeButtonProps = typeof Button.defaultProps & {
  variant: 'default' | 'primary';
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default class Button extends Component<TypeButtonProps> {
  static defaultProps = {
    variant: 'default',
  };

  render(): ReactNode {
    const { variant, type, ...rest } = this.props;

    return (
      <button type={type || 'submit'} className={`${styles.button} ${styles[variant]}`} {...rest} />
    );
  }
}
