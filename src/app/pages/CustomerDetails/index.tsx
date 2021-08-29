import React, { useCallback, useReducer } from 'react';
//components
import { InfoCard, ContentWrapper, Input, Box, TypeList, Button, Typography } from 'app/components';
import { useHistory } from 'react-router';
// actions
import { validationReducer, initialState, ActionType } from './actions';

const genderTypes = ['Male', 'Female', 'Other'];

const CustomerDeatils = () => {
  const history = useHistory();
  const [state, dispatch] = useReducer(validationReducer, initialState);

  const onContinue = useCallback(() => {
    let flag = { isNameValid: true, isDobValid: true, isGenderValid: true };
    const { name, dob, gender } = state;

    if (/[^a-zA-Z]/.test(state.name) || state.name === '') {
      flag = { ...flag, isNameValid: false };
    }

    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    const todayDate = yyyy + '-' + mm + '-' + dd;
    const isValid = new Date(dob);
    if (todayDate <= dob || dob === '') flag = { ...flag, isDobValid: false };
    try {
      isValid.toISOString();
    } catch {
      flag = { ...flag, isDobValid: false };
    }

    if (gender === '') {
      flag = { ...flag, isGenderValid: false };
    }
    dispatch({ type: ActionType.SetError, payload: { value: flag } });

    if (flag.isDobValid && flag.isNameValid && flag.isGenderValid) {
      sessionStorage.setItem(
        'user',
        JSON.stringify({ username: name, dateOfBirth: dob, gender: gender })
      );
      history.replace({ pathname: '/selfie' });
    }
  }, [state, history]);

  const onNameChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: ActionType.SetName, payload: { value: event.target.value } });
  }, []);

  const onDateChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: ActionType.SetDob, payload: { value: event.target.value } });
  }, []);

  const onGenderChange = useCallback((gender: string) => {
    dispatch({ type: ActionType.SetGender, payload: { value: gender } });
  }, []);

  return (
    <>
      <InfoCard
        imgSrc="contactIcon.png"
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
          Your Gender
        </Typography>
        <TypeList
          name="gender"
          list={genderTypes}
          onTypeChange={onGenderChange}
          className="justify-around"
        />
        {!state.isGenderValid ? (
          <Typography variant="body-short-03">Select you gender</Typography>
        ) : null}
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
