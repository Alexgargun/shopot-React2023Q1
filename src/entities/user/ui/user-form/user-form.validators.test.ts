import {
  avatarFileValidator,
  dateOfBirthValidator,
  emailValidator,
  formDataValidator,
  fullNameValidator,
  positionValidator,
  preferCityValidator,
  programmingWithValidator,
} from './user-form.validators';
import { describe, expect, it } from 'vitest';

const str = JSON.stringify([{ name: 'teresa teng' }]);
const blob = new Blob([str]);
const file = new File([blob], 'values.json', {
  type: 'image/jpeg',
});

const mockData = {
  fullName: 'Demo Demo',
  email: 'mail@mail.com',
  dateOfBirth: '2007-01-02',
  preferCity: 'London',
  programming: ['React'],
  position: 'Junior',
  avatar: file,
};

describe('Validators test', () => {
  it('Test function formDataValidator', () => {
    expect(formDataValidator(mockData)).toEqual({
      fullName: '',
      email: '',
      dateOfBirth: '',
      preferCity: '',
      programming: '',
      position: '',
      avatar: '',
    });
  });

  it('Test function fullNameValidator', () => {
    expect(fullNameValidator(mockData.fullName)).toEqual('');
    expect(fullNameValidator('')).toEqual('Full Name is required');
    expect(fullNameValidator('bad name')).toEqual('Incorrect input full name');
  });

  it('Test function emailValidator', () => {
    expect(emailValidator(mockData.email)).toEqual('');
    expect(emailValidator('')).toEqual('Email is required');
    expect(emailValidator('test.com')).toEqual('Incorrect email format');
  });

  it('Test function dateOfBirthValidator', () => {
    expect(dateOfBirthValidator(mockData.dateOfBirth)).toEqual('');
    expect(dateOfBirthValidator('')).toEqual('Date of birth is required');
    expect(dateOfBirthValidator('03-22')).toEqual('Incorrect Date format');
  });

  it('Test function preferCityValidator', () => {
    expect(preferCityValidator(mockData.preferCity)).toEqual('');
    expect(preferCityValidator('')).toEqual('Prefer City is required');
    expect(preferCityValidator('-')).toEqual('Incorrect Prefer City');
  });

  it('Test function programmingWithValidator', () => {
    expect(programmingWithValidator(mockData.programming)).toEqual('');
    expect(programmingWithValidator([])).toEqual('Programming with is required');
  });

  it('Test function positionValidator', () => {
    expect(positionValidator(mockData.position)).toEqual('');
    expect(positionValidator('')).toEqual('Position is required');
  });

  it('Test function avatarFileValidator', () => {
    expect(avatarFileValidator(mockData.avatar)).toEqual('');
    expect(avatarFileValidator(null)).toEqual(
      'The avatar picture must be an image (jpeg, png, webp)'
    );
  });
});
