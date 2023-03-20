export const fullNameValidator = (firstName: string) => {
  if (!firstName) {
    return 'Full Name is required';
  } else if (
    firstName.charAt(0) !== firstName.charAt(0).toUpperCase() ||
    !/[a-zA-Z_0-9а-яА-Я]{3,} [a-zA-Z_0-9а-яА-Я]{3,}$/.test(firstName)
  ) {
    return 'Incorrect input full name ';
  }

  return '';
};

export const emailValidator = (email: string): string => {
  if (!email) {
    return 'Email is required';
  } else if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(email)) {
    return 'Incorrect email format';
  }

  return '';
};

export const dateOfBirthValidator = (date: string): string => {
  if (!date) {
    return 'Date of birth is required';
  } else if (!/\d{4}-\d{2}-\d{2}/.test(date)) {
    return 'Incorrect Date format';
  }

  return '';
};

export const preferCityValidator = (city: string): string => {
  if (!city) {
    return 'Prefer City is required';
  } else if (city === '-') {
    return 'Incorrect Prefer City';
  }

  return '';
};

export const programmingWithValidator = (languages: string[]): string => {
  if (languages.length === 0) {
    return 'Programming with is required';
  }

  return '';
};

export const positionValidator = (position: string): string => {
  if (!position) {
    return 'Position is required';
  }

  return '';
};
