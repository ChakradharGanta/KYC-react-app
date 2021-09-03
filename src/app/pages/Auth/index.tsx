//libs
import React, { useState } from 'react';
import c from 'classnames';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
//components
import { Box, Input, Button, Typography } from 'app/components';
import { signInUser } from 'app/Firebase';
//styles
import { logoStyle } from './styles';
import { useHistory } from 'react-router';

const Auth = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const history = useHistory();
  window.sessionStorage.setItem('currentPath', history.location.pathname);

  const onUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onButtonClick = () => {
    setError(false);
    signInUser(username, password)
      .then(() => {
        history.replace({ pathname: '/customerDetails' }, { triggered: true });
      })
      .catch((error) => {
        setError(true);
      });
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
          type={'email'}
          onChange={onUsernameChange}
        />
        <Input
          placeholder="Password"
          className="w-full"
          error={error}
          type="password"
          onChange={onPasswordChange}
        />
        {error ? <Typography variant={'body-short-02'}>Invalid credentials</Typography> : null}
        <Link
          to={{
            pathname: '/signup',
            state: { triggered: true },
          }}>
          <Typography variant={'body-short-02'}>Don't have an account? Sign up</Typography>
        </Link>
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
