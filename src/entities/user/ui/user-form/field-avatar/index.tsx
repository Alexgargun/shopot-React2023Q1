import styles from '../styles.module.scss';
import { Component, createRef, ReactNode, RefObject } from 'react';
import { IElementProps } from 'entities/user/types';

export default class FieldAvatar extends Component<IElementProps> {
  private inputRef: RefObject<HTMLInputElement>;

  constructor(props: IElementProps) {
    super(props);

    this.inputRef = createRef<HTMLInputElement>();
  }

  handleOnChange(): void {
    this.props.onChange(this.inputRef.current?.value || '');
  }

  render(): ReactNode {
    return (
      <div className={styles.formRow}>
        <div className={styles.formControl} data-invalid={this.props.error !== ''}>
          <label className={styles.formLabel}>Avatar</label>
          <input
            ref={this.inputRef}
            onInput={() => this.handleOnChange()}
            name="fieldAvatar"
            aria-label="input-avatar"
            className={styles.formInput}
            type="file"
          />
          <div className={styles.invalidFeedback}>{this.props.error}</div>
        </div>
      </div>
    );
  }
}
