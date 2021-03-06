//libs
import c from 'classnames';
//styles
import { errorStyle, minHeight40, inputStyles } from './styles';

const COMMON_CLASSES = {
  input: 'p-0',
  error: errorStyle,
  notchedOutline: 'border-none',
  focused: 'border-none',
};

export const OVERRIDES = {
  root: c('px-12 text-black', minHeight40, inputStyles),
  ...COMMON_CLASSES,
};
