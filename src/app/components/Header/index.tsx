//libs
import c from 'classnames';
//components
import Box from 'app/components/Box';
//styles
import { bgGreen } from './styles';
//types
import { HeaderProps } from './types';

const Header: React.FunctionComponent<HeaderProps> = (props) => {
  const { title = 'Know Your Customer' } = props;
  return (
    <Box className={c('px-8 py-16', bgGreen)}>
      <Box className="text-3xl text-white">{title}</Box>
    </Box>
  );
};

export default Header;
