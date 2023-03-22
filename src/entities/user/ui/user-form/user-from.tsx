import styles from './styles.module.scss';
import { Component, createRef, FormEvent, ReactNode, RefObject } from 'react';
import { Button } from 'shared/ui';
import {
  FieldDateOfBirth,
  FieldEmail,
  FieldFullName,
  FieldPreferCity,
  formDataValidator,
  TypeErrors,
  TypeUser,
} from 'entities/user';
import { initialUserFrom } from './user-form.initial';
import { FieldProgramming } from './field-programming';
import { FieldPosition } from './field-position';
import { FieldAvatar } from './field-avatar';

interface IUserFormsState {
  errors: TypeErrors;
}

interface IUserFormProps {
  addUser: (user: TypeUser) => void;
}

export class UserForm extends Component<IUserFormProps, IUserFormsState> {
  private formRef: RefObject<HTMLFormElement>;
  private form: {
    fullName: RefObject<FieldFullName>;
    email: RefObject<FieldEmail>;
    dateOfBirth: RefObject<FieldDateOfBirth>;
    preferCity: RefObject<FieldPreferCity>;
    programming: RefObject<FieldProgramming>;
    position: RefObject<FieldPosition>;
    avatar: RefObject<FieldAvatar>;
  };

  constructor(props: IUserFormProps) {
    super(props);

    this.formRef = createRef<HTMLFormElement>();
    this.form = {
      fullName: createRef<FieldFullName>(),
      email: createRef<FieldEmail>(),
      dateOfBirth: createRef<FieldDateOfBirth>(),
      preferCity: createRef<FieldPreferCity>(),
      programming: createRef<FieldProgramming>(),
      position: createRef<FieldPosition>(),
      avatar: createRef<FieldAvatar>(),
    };

    this.state = { errors: { ...initialUserFrom.errors } };
  }

  resetFrom(): void {
    this.formRef.current?.reset();
    this.setState({ errors: { ...initialUserFrom.errors } });
  }

  validateForm(): TypeUser | null {
    const data: TypeUser = {
      fullName: this.form.fullName.current?.getValue() || '',
      email: this.form.email.current?.getValue() || '',
      dateOfBirth: this.form.dateOfBirth.current?.getValue() || '',
      preferCity: this.form.preferCity.current?.getValue() || '',
      programming: this.form.programming.current?.getValue() || [],
      position: this.form.position.current?.getValue() || '',
      avatar: this.form.avatar.current?.getValue() || null,
    };
    const errors = formDataValidator(data);

    this.setState({ errors });

    const isValid = Array.from(Object.values(errors)).reduce((res: boolean, error: string) => {
      return error !== '' ? false : res;
    }, true);

    if (isValid) {
      return data;
    }

    return null;
  }

  handleFormSubmit(e: FormEvent): void {
    e.preventDefault();

    const data = this.validateForm();

    if (data !== null) {
      this.props.addUser(data);
      this.resetFrom();
    }
  }

  render(): ReactNode {
    return (
      <div className={styles.formWrapper}>
        <form ref={this.formRef} onSubmit={(e: FormEvent) => this.handleFormSubmit(e)}>
          <div className={styles.formRow}>
            <FieldFullName error={this.state.errors.fullName} ref={this.form.fullName} />
            <FieldEmail error={this.state.errors.email} ref={this.form.email} />
          </div>
          <div className={styles.formRow}>
            <FieldDateOfBirth error={this.state.errors.dateOfBirth} ref={this.form.dateOfBirth} />
            <FieldPreferCity error={this.state.errors.preferCity} ref={this.form.preferCity} />
          </div>
          <div className={styles.formRow}>
            <FieldProgramming error={this.state.errors.programming} ref={this.form.programming} />
            <FieldPosition error={this.state.errors.position} ref={this.form.position} />
          </div>
          <div className={styles.formRow}>
            <FieldAvatar error={this.state.errors.avatar} ref={this.form.avatar} />
          </div>
          <div className={`${styles.formRow} flex-center`}>
            <Button variant="primary" aria-label="button-submit">
              Send
            </Button>
            <Button type="button" onClick={() => this.resetFrom()} aria-label="button-reset">
              Reset
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
