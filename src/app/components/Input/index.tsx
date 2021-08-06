//libs
import { forwardRef } from 'react';
import OutlinedInput, { OutlinedInputProps } from '@material-ui/core/OutlinedInput';
import { OVERRIDES } from './utils';

const Input = forwardRef<HTMLInputElement, OutlinedInputProps>((props, ref) => {
  const { classes, ...rest } = props;
  return <OutlinedInput ref={ref} classes={OVERRIDES} {...rest} />;
});

export default Input;
