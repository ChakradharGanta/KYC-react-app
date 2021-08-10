//libs
import { forwardRef } from 'react';
import MaterialButton, { ButtonProps } from '@material-ui/core/Button';
//styles
import { containedPrimaryStyles, outlinedPrimaryStyles, rootStyles } from './styles';

const OVERRIDES = {
  containedPrimary: containedPrimaryStyles,
  root: rootStyles,
  outlinedPrimary: outlinedPrimaryStyles,
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  return <MaterialButton ref={ref} {...props} classes={OVERRIDES} />;
});

export default Button;
