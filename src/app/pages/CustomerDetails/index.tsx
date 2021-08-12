import React, { useState, useCallback } from 'react';
//components
import { InfoCard, ContentWrapper, Input, Box, TypeList, Button, Typography } from 'app/components';
import { useHistory } from 'react-router';

const genderTypes = ['Male', 'Female', 'Other'];

const CustomerDeatils = () => {
  const history = useHistory();
  const [state, setState] = useState({ isNameValid: true, isDobValid: true, name: '', dob: '' });
  const [userName, setUserName] = useState('');
  const [dob, setDob] = useState('');

  const onContinue = useCallback(() => {
    if (/[^a-zA-Z]/.test(state.name) || state.name === '') {
      setState((prevState) => ({ ...prevState, isNameValid: false }));
    }

    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    const todayDate = yyyy + '-' + mm + '-' + dd;
    if (todayDate <= dob) setState((prevState) => ({ ...prevState, isDobValid: false }));

    if (state.isDobValid && state.isNameValid) {
      console.log(userName, dob);
      sessionStorage.setItem('user', JSON.stringify({ username: userName, dateOfBirth: dob }));
      history.push('/selfie', { imgSrc: '' });
    }
  }, [dob, history, state.isDobValid, state.isNameValid, state.name, userName]);

  const onNameChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
    setState((prevState) => ({ ...prevState, isNameValid: true }));
  }, []);

  const onDateChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setDob(event.target.value);
    setState((prevState) => ({ ...prevState, isDobValid: true }));
  }, []);

  return (
    <>
      <InfoCard
        imgSrc="KYClogo.png"
        mainInfo="Hi! Help us setup your account"
        subInfo="We'll verify it with your KYC documents"
      />
      <ContentWrapper className="">
        <Typography variant="display-s">Your full name</Typography>
        <Input
          placeholder="eg:Raj Kumar Babu"
          name="customerName"
          onChange={onNameChange}
          className="mt-12"
          error={!state.isNameValid}
        />
        <Typography variant="body-short-02" className="mt-6">
          Ensure it matches name on PAN
        </Typography>

        <Typography variant="display-s" className="mt-12">
          Your date of birth
        </Typography>
        <Input
          type="date"
          placeholder="dd/mm/yyyy"
          name="dateOfBirth"
          className="mt-12"
          error={!state.isDobValid}
          onChange={onDateChange}
        />
        <Typography variant="display-s" className="mt-12">
          Your gender
        </Typography>
        <TypeList name="gender" list={genderTypes} className="justify-around" />
        <Box className="mt-12 mx-auto">
          <Button variant="contained" color="primary" onClick={onContinue}>
            <Typography variant="body-short-01" className="">
              Continue
            </Typography>
          </Button>
        </Box>
      </ContentWrapper>
    </>
  );
};

export default CustomerDeatils;
