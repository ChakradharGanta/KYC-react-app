import { forwardRef } from 'react';
import c from 'classnames';
import { TypographyProps, TypographyVariants } from './types';

const getDefaultComponent = (variant: TypographyVariants) => {
  switch (variant) {
    case 'body-short-01':
    case 'body-short-02':
    case 'body-short-03':
      return 'p';
    default:
      return 'span';
  }
};

const Typography = forwardRef<HTMLElement, TypographyProps>((props, ref) => {
  const {
    variant = 'body-short-01',
    as: Component = getDefaultComponent(variant),
    children,
    className,
  } = props;

  return (
    <Component ref={ref as any} className={c('m-0', variant, className)}>
      {children}
    </Component>
  );
});

export default Typography;
