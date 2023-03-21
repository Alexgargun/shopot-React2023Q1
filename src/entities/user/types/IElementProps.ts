import { TypeFormValue } from './TypeFormValue';

export interface IElementProps {
  onChange: (value: TypeFormValue) => void;
  error: string;
}
