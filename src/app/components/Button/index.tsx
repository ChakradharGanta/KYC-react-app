//libs
import { forwardRef } from 'react';
import MaterialButton, { ButtonProps } from '@material-ui/core/Button';
//styles
import { primaryStyles, rootStyles } from './styles';

const OVERRIDES = {
  containedPrimary: primaryStyles,
  root: rootStyles,
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  return <MaterialButton ref={ref} {...props} classes={OVERRIDES} />;
});

export default Button;
