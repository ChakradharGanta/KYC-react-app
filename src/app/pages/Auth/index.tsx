//libs
import { useState } from 'react';
import c from 'classnames';
import Avatar from '@material-ui/core/Avatar';
//components
import { Box, Input, Button, Typography } from 'app/components';
//styles
import { logoStyle } from './styles';
import { useHistory } from 'react-router';

const auth = 'chakri';

const Auth = () => {
  const [username, setUsername] = useState('');
  const [password, setpassword] = useState('');
  const [error, setError] = useState(false);
  const history = useHistory();

  const onUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setpassword(event.target.value);
  };

  const onButtonClick = () => {
    if (!(username === auth && password === auth)) {
      setError(true);
    }
    history.replace({ pathname: '/customerDetails' });
  };

  return (
    <>
      <Box className="flex flex-col mx-auto items-center space-y-24 w-4/5 mt-24">
        <Avatar
          variant="square"
          alt="KYC logo"
          className={c('m-28', logoStyle)}
          src="KYClogo.png"
        />
        <Typography variant="display-m">{'Hi! Welcome to XYZ'}</Typography>
        <Typography>{'One step KYC solution'}</Typography>
        <Input
          placeholder="Username"
          className="w-full"
          error={error}
          onChange={onUsernameChange}
        />
        <Input
          placeholder="Password"
          className="w-full"
          error={error}
          type="password"
          onChange={onPasswordChange}
        />
        {error ? <Box className="text-2xl text-red">Invalid credentials</Box> : null}
        <Button
          variant="contained"
          color="primary"
          className="mt-24 w-full"
          onClick={onButtonClick}>
          <Typography>Login</Typography>
        </Button>
      </Box>
    </>
  );
};

export default Auth;
