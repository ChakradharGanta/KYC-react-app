import c from 'classnames';
import { errorStyle, minHeight40, inputStyles } from './styles';

const COMMON_CLASSES = {
  input: 'p-0',
  error: errorStyle,
};

export const OVERRIDES = {
  root: c('px-12 text-black', minHeight40, inputStyles),
  ...COMMON_CLASSES,
};
