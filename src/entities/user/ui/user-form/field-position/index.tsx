import styles from '../styles.module.scss';
import { Component, createRef, ReactNode, RefObject } from 'react';
import { IElementProps } from 'entities/user/types';

const positions = ['Junior', 'Middle', 'Senior'];

export class FieldPosition extends Component<IElementProps> {
  private inputRefs: RefObject<HTMLInputElement>[];

  constructor(props: IElementProps) {
    super(props);

    this.inputRefs = [];

    positions.forEach(() => {
      this.inputRefs.push(createRef<HTMLInputElement>());
    });
  }

  getValue(): string {
    const inputRef = this.inputRefs.find((ref) => {
      return ref.current?.checked === true;
    });

    return inputRef?.current?.value || '';
  }

  render(): ReactNode {
    return (
      <div className={styles.formControl} data-invalid={this.props.error !== ''}>
        <h3 className={styles.formHeader}>Position</h3>
        <div className="flex">
          {positions.map((position, index) => {
            return (
              <label className={styles.formLabel} key={position}>
                <input
                  ref={this.inputRefs[index]}
                  name="fieldPosition"
                  id={`fieldPosition${position}`}
                  aria-label={`input-position-${position}`}
                  className={styles.formInput}
                  type="radio"
                  value={position}
                />{' '}
                {position}
              </label>
            );
          })}
        </div>
        <div className={styles.invalidFeedback}>{this.props.error}</div>
      </div>
    );
  }
}
