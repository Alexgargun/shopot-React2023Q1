import styles from '../styles.module.scss';
import { Component, createRef, ReactNode, RefObject } from 'react';
import { IElementProps } from 'entities/user/types';

export class FieldDateOfBirth extends Component<IElementProps> {
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
        <label className={styles.formLabel} htmlFor="fieldDateOfBirth">
          Date of birth
        </label>
        <input
          ref={this.inputRef}
          id="fieldDateOfBirth"
          name="fieldDateOfBirth"
          aria-label="input-date-of-birth"
          className={styles.formInput}
          type="date"
          min="1960-01-01"
          max="2007-12-31"
          tabIndex={3}
        />
        <div className={styles.invalidFeedback}>{this.props.error}</div>
      </div>
    );
  }
}
