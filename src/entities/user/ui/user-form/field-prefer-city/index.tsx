import styles from '../styles.module.scss';
import { Component, createRef, ReactNode, RefObject } from 'react';
import { IElementProps } from 'entities/user/types';

export default class FieldPreferCity extends Component<IElementProps> {
  private inputRef: RefObject<HTMLSelectElement>;

  constructor(props: IElementProps) {
    super(props);

    this.inputRef = createRef<HTMLSelectElement>();
  }

  handleOnChange(): void {
    this.props.onChange(this.inputRef.current?.value || '');
  }

  render(): ReactNode {
    return (
      <div className={styles.formControl} data-invalid={this.props.error !== ''}>
        <label className={styles.formLabel} htmlFor="fieldPreferCity">
          Prefer City
        </label>
        <select
          ref={this.inputRef}
          onChange={() => this.handleOnChange()}
          id="fieldPreferCity"
          name="fieldPreferCity"
          aria-label="input-prefer-city"
          className={styles.formSelect}
          tabIndex={4}
        >
          <option value="-">-- Select --</option>
          <option value="Bangkok">Bangkok</option>
          <option value="Paris">Paris</option>
          <option value="Landon">Landon</option>
          <option value="Dubai">Dubai</option>
          <option value="Singapore">Singapore</option>
          <option value="New York">New York</option>
          <option value="Tokyo">Tokyo</option>
          <option value="Barcelona">Barcelona</option>
          <option value="Istanbul">Istanbul</option>
        </select>
        <div className={styles.invalidFeedback}>{this.props.error}</div>
      </div>
    );
  }
}
