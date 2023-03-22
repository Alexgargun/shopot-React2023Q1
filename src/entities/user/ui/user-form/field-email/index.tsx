import styles from '../styles.module.scss';
import { Component, createRef, ReactNode, RefObject } from 'react';
import { IElementProps } from 'entities/user/types';

export class FieldEmail extends Component<IElementProps> {
  private inputRef: RefObject<HTMLInputElement>;

  constructor(props: IElementProps) {
    super(props);

    this.inputRef = createRef<HTMLInputElement>();
  }

  getValue(): string {
    return this.inputRef.current?.value || '';
  }

  render(): ReactNode {
    return (
      <div className={styles.formControl} data-invalid={this.props.error !== ''}>
        <label className={styles.formLabel} htmlFor="fieldEmail">
          Email
        </label>
        <input
          ref={this.inputRef}
          id="fieldEmail"
          name="fieldEmail"
          aria-label="input-email"
          className={styles.formInput}
          type="text"
          placeholder="email@example.com"
          tabIndex={2}
        />
        <div className={styles.invalidFeedback}>{this.props.error}</div>
      </div>
    );
  }
}
