import styles from '../styles.module.scss';
import { Component, createRef, ReactNode, RefObject } from 'react';
import { IElementProps } from 'entities/user/types';
import programming from 'entities/user/data/programming.json';

export default class FieldProgramming extends Component<IElementProps> {
  private inputRefs: RefObject<HTMLInputElement>[];

  constructor(props: IElementProps) {
    super(props);

    this.inputRefs = [];

    programming.forEach(() => {
      this.inputRefs.push(createRef<HTMLInputElement>());
    });
  }

  getValue(): string[] {
    const results: string[] = [];

    this.inputRefs.forEach((ref) => {
      if (ref.current?.checked) {
        results.push(ref.current.value);
      }
    });

    return results;
  }

  render(): ReactNode {
    return (
      <div className={styles.formControl} data-invalid={this.props.error !== ''}>
        <h3 className={styles.formHeader}>Programming with</h3>
        <div className="flex">
          {programming.map((item, index) => {
            return (
              <label className={styles.formLabel} key={item.id}>
                <input
                  ref={this.inputRefs[index]}
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
