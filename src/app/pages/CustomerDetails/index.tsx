import React, { useState, useCallback } from 'react';
//components
import { InfoCard, ContentWrapper, Input, Box, TypeList, Button } from 'app/components';
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
        <Box className="text-2xl">
          <strong>Your full name </strong>
        </Box>
        <Input
          placeholder="eg:Raj Kumar Babu"
          name="customerName"
          onChange={onNameChange}
          className="mt-12"
          error={!state.isNameValid}
        />
        <Box className="text-xl mt-6">Ensure it matches name on PAN</Box>
        <Box className="text-2xl mt-12">
          <strong>Your date of birth </strong>
        </Box>
        <Input
          type="date"
          placeholder="dd/mm/yyyy"
          name="dateOfBirth"
          className="mt-12"
          error={!state.isDobValid}
          onChange={onDateChange}
        />
        <Box className="text-2xl mt-12">
          <strong>Your gender</strong>
        </Box>
        <TypeList name="gender" list={genderTypes} className="justify-around" />
        <Box className="mt-12 mx-auto">
          <Button variant="contained" color="primary" onClick={onContinue}>
            Continue
          </Button>
        </Box>
      </ContentWrapper>
    </>
  );
};

export default CustomerDeatils;
