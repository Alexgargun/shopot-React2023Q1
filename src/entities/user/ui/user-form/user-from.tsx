import styles from './styles.module.scss';
import { Component, createRef, FormEvent, ReactNode, RefObject } from 'react';
import { Button } from 'shared/ui';
import {
  avatarValidator,
  dateOfBirthValidator,
  emailValidator,
  FieldDateOfBirth,
  FieldEmail,
  FieldFullName,
  FieldPreferCity,
  fullNameValidator,
  positionValidator,
  preferCityValidator,
  programmingWithValidator,
  TypeErrors,
  TypeUser,
} from 'entities/user';
import { initialUserFrom } from './user-form.initial';
import FieldProgramming from './field-programming';
import FieldPosition from './field-position';
import { debounce } from 'shared/helpers';
import FieldAvatar from './field-avatar';

interface IUserFormsState {
  data: TypeUser;
  errors: TypeErrors;
}

interface IUserFormProps {
  addUser: (user: TypeUser) => void;
}

export default class UserForm extends Component<IUserFormProps, IUserFormsState> {
  private static UPDATE_DELAY = 500;
  private formRef: RefObject<HTMLFormElement>;
  private isFirstSubmit: boolean;
  private debounceTimeout: { timeout: ReturnType<typeof setTimeout> | null };

  constructor(props: IUserFormProps) {
    super(props);
    const { data, errors } = initialUserFrom;

    this.formRef = createRef<HTMLFormElement>();
    this.isFirstSubmit = true;
    this.state = { data: { ...data }, errors: { ...errors } };
    this.debounceTimeout = { timeout: null };
  }

  handleFormChange(): void {
    if (!this.isFirstSubmit) {
      debounce(() => this.validateForm(), this.debounceTimeout, UserForm.UPDATE_DELAY);
    }
  }

  resetFrom(): void {
    this.formRef.current?.reset();
    const { data, errors } = initialUserFrom;
    this.setState({ data: { ...data }, errors: { ...errors } });
    this.isFirstSubmit = true;
  }

  updateFieldValue(data: { [key: string]: string | string[] }) {
    this.setState((prevState: IUserFormsState) => ({
      data: { ...prevState.data, ...data },
    }));
  }

  validateForm(): boolean {
    const { fullName, email, dateOfBirth, preferCity, programming, position, avatar } =
      this.state.data;

    const errors = {
      fullName: fullNameValidator(fullName),
      email: emailValidator(email),
      dateOfBirth: dateOfBirthValidator(dateOfBirth),
      preferCity: preferCityValidator(preferCity),
      programming: programmingWithValidator(programming),
      position: positionValidator(position),
      avatar: avatarValidator(avatar),
    };

    this.setState({ errors: errors });

    return Array.from(Object.values(errors)).reduce((res: boolean, error: string) => {
      return error !== '' ? false : res;
    }, true);
  }

  handleFormSubmit(e: FormEvent): void {
    e.preventDefault();
    this.isFirstSubmit = false;

    if (this.validateForm()) {
      console.log('this.validateForm() = true');
    }
  }

  render(): ReactNode {
    return (
      <div className="container">
        <div className={styles.formWrapper}>
          <form
            ref={this.formRef}
            onSubmit={(e: FormEvent) => this.handleFormSubmit(e)}
            onChange={() => this.handleFormChange()}
          >
            <div className={styles.formRow}>
              <FieldFullName
                error={this.state.errors.fullName}
                onChange={(value) => this.updateFieldValue({ fullName: value })}
              />
              <FieldEmail
                error={this.state.errors.email}
                onChange={(value) => this.updateFieldValue({ email: value })}
              />
            </div>
            <div className={styles.formRow}>
              <FieldDateOfBirth
                error={this.state.errors.dateOfBirth}
                onChange={(value) => this.updateFieldValue({ dateOfBirth: value })}
              />
              <FieldPreferCity
                error={this.state.errors.preferCity}
                onChange={(value) => this.updateFieldValue({ preferCity: value })}
              />
            </div>
            <div className={styles.formRow}>
              <FieldProgramming
                error={this.state.errors.programming}
                onChange={(value) => this.updateFieldValue({ programming: value })}
              />
              <FieldPosition
                error={this.state.errors.position}
                onChange={(value) => this.updateFieldValue({ position: value })}
              />
            </div>
            <div className={styles.formRow}>
              <FieldAvatar
                error={this.state.errors.avatar}
                onChange={(value) => this.updateFieldValue({ avatar: value })}
              />
            </div>

            <div className={`${styles.formRow} flex-center`}>
              <Button variant="primary">Send</Button>
              <Button type="button" onClick={() => this.resetFrom()}>
                Reset
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
