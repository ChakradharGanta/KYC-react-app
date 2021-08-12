//libs
import c from 'classnames';
//components
import { Box, Typography } from 'app/components';
//styles
import { bgGreen } from './styles';
//types
import { HeaderProps } from './types';

const Header: React.FunctionComponent<HeaderProps> = (props) => {
  const { title = 'Know Your Customer' } = props;
  return (
    <Box className={c('px-12 py-16', bgGreen)}>
      <Typography variant="display-s" className="text-white">
        {title}
      </Typography>
    </Box>
  );
};

export default Header;
