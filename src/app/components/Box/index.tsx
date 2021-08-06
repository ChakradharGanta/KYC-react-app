// libs
import { forwardRef } from 'react';

const Box = forwardRef<HTMLDivElement, React.ComponentProps<'div'>>((props, ref) => {
  return <div ref={ref} {...props} />;
});

Box.displayName = 'Box';

export default Box;
