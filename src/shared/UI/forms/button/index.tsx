import React from 'react';
import styles from './styles.module.scss';

type TypeButtonProps = typeof Button.defaultProps & {
  variant: 'default' | 'primary';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default class Button extends React.Component<TypeButtonProps> {
  static defaultProps = {
    variant: 'default',
  };

  render(): React.ReactNode {
    const { variant, type, ...rest } = this.props;

    return (
      <button type={type || 'submit'} className={`${styles.button} ${styles[variant]}`} {...rest} />
    );
  }
}
