//libs
import c from 'classnames';
//components
import { Box } from 'app/components';
//styles
import { wrapperStyles } from './styles';

interface ContentWrapperProps {
  className?: string;
  children?: React.ReactNode;
}

const ContentWrapper = (props: ContentWrapperProps) => {
  const { className = '', children = null } = props;
  return (
    <Box className={c('flex flex-col p-12 border-4 m-8', wrapperStyles, className)}>{children}</Box>
  );
};

export default ContentWrapper;
