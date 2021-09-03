import { Box, Input, Button, Typography } from 'app/components';
import React, { useCallback, useState } from 'react';
import c from 'classnames';
import { logoStyle } from '../Auth/styles';
import Avatar from '@material-ui/core/Avatar';
import { useHistory } from 'react-router';
import { createUser } from 'app/Firebase';

const INITIAL_VALUE = { username: '', password: '', reEnterPassword: '' };

const SignupPage = () => {
  const history = useHistory();
  const [state, setState] = useState(INITIAL_VALUE);

  const isDisabled =
    state.password !== state.reEnterPassword || state.password === '' || state.username === '';

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setState((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }, []);

  const onButtonClick = useCallback(() => {
    createUser(state.username, state.password)
      .then((x) => {
        history.replace('/customerDetails', { triggered: true });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [history, state.password, state.username]);

  return (
    <Box className="flex flex-col items-center space-y-24 mt-24 w-4/5 mx-auto">
      <Avatar variant="square" alt="KYC logo" className={c('m-28', logoStyle)} src="KYClogo.png" />
      <Typography variant="display-l">Sign up</Typography>
      <Input
        name="username"
        value={state.username}
        placeholder="Enter your email"
        className="w-full"
        type={'email'}
        onChange={onChange}
      />
      <Input
        name={'password'}
        value={state.password}
        placeholder="Password"
        className="w-full"
        onChange={onChange}
      />
      <Input
        name={'reEnterPassword'}
        value={state.reEnterPassword}
        placeholder="Re-enter your password"
        className="w-full"
        onChange={onChange}
      />
      <Button
        variant="contained"
        color="primary"
        className="mt-24 w-full"
        onClick={onButtonClick}
        disabled={isDisabled}>
        <Typography>Create account</Typography>
      </Button>
    </Box>
  );
};

export default SignupPage;
