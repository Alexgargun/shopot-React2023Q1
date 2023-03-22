import styles from '../styles.module.scss';
import { Component, FormEvent, ReactNode } from 'react';
import { IElementProps } from 'entities/user/types';
import programming from 'entities/user/data/programming.json';

export default class FieldProgramming extends Component<IElementProps> {
  private checkedState: string[];

  constructor(props: IElementProps) {
    super(props);

    this.checkedState = [];
  }

  handleOnChange(e: FormEvent): void {
    const { target } = e;

    if (target instanceof HTMLInputElement) {
      const filtered = this.checkedState.filter((item) => item !== target.value);

      if (target.checked) {
        filtered.push(target.value);
      }

      this.checkedState = [...filtered];
    }

    this.props.onChange(this.checkedState);
  }

  render(): ReactNode {
    return (
      <div className={styles.formControl} data-invalid={this.props.error !== ''}>
        <h3 className={styles.formHeader}>Programming with</h3>
        <div className="flex">
          {programming.map((item) => {
            return (
              <label className={styles.formLabel} key={item.id}>
                <input
                  onInput={(e: FormEvent) => this.handleOnChange(e)}
                  name={`fieldProgramming-${item.id}`}
                  id={`fieldProgramming-${item.id}`}
                  aria-label={`input-programming-${item.id}`}
                  className={styles.formInput}
                  type="checkbox"
                  value={item.id}
                />{' '}
                {item.id}
              </label>
            );
          })}
        </div>
        <div className={styles.invalidFeedback}>{this.props.error}</div>
      </div>
    );
  }
}
