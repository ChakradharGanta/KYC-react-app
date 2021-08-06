//libs
import c from 'classnames';
import Avatar from '@material-ui/core/Avatar';
//components
import Header from 'app/components/Header';
import Box from 'app/components/Box';
import LoginForm from 'app/components/Form';
//styles
import { logoStyle } from './styles';

const Auth = () => {
  return (
    <>
      <Header />
      <Box className="flex flex-col mx-auto items-center space-y-24 w-4/5 mt-24">
        <Avatar
          variant="square"
          alt="KYC logo"
          className={c('m-28', logoStyle)}
          src="KYClogo.png"
        />
        <Box className="text-3xl">{'Hi! Welcome to XYZ'}</Box>
        <Box className="text-2xl">{'One step KYC solution'}</Box>
        <LoginForm />
      </Box>
    </>
  );
};

export default Auth;
