import styles from '../styles.module.scss';
import { Component, createRef, ReactNode, RefObject } from 'react';
import { IElementProps } from 'entities/user/types';
import { imageFileTypeValidator } from 'entities/user';

export default class FieldAvatar extends Component<IElementProps> {
  private inputRef: RefObject<HTMLInputElement>;

  constructor(props: IElementProps) {
    super(props);

    this.inputRef = createRef<HTMLInputElement>();
  }

  handleOnChange(): void {
    const files = this.inputRef.current?.files || [];
    const selectedFiles = [...[...files]];

    if (selectedFiles.length > 0 && imageFileTypeValidator(selectedFiles[0])) {
      const avatar = new Image();
      avatar.src = URL.createObjectURL(selectedFiles[0]);
      this.props.onChange(avatar);
    } else {
      this.props.onChange(null);
    }
  }

  render(): ReactNode {
    return (
      <div className={styles.formRow}>
        <div className={styles.formControl} data-invalid={this.props.error !== ''}>
          <label className={styles.formLabel}>Avatar</label>
          <input
            ref={this.inputRef}
            onChange={() => this.handleOnChange()}
            name="fieldAvatar"
            aria-label="input-avatar"
            className={styles.formInput}
            type="file"
            accept="image/x-png,image/gif,image/jpeg,image/png,image/webp"
          />
          <div className={styles.invalidFeedback}>{this.props.error}</div>
        </div>
      </div>
    );
  }
}
