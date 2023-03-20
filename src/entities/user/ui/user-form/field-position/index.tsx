import styles from '../styles.module.scss';
import { Component, ReactNode } from 'react';
import { IElementProps } from 'entities/user/types';

const positions = ['Junior', 'Middle', 'Senior'];

export default class FieldPosition extends Component<IElementProps> {
  handleOnChange(value: string): void {
    this.props.onChange(value);
  }

  render(): ReactNode {
    return (
      <div className={styles.formControl} data-invalid={this.props.error !== ''}>
        <h3 className={styles.formHeader}>Position</h3>
        <div className="flex">
          {positions.map((position) => {
            return (
              <label className={styles.formLabel} key={position}>
                <input
                  onChange={() => this.handleOnChange(position)}
                  name="fieldPosition"
                  id={`fieldPosition${position}`}
                  aria-label="input-programming"
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
