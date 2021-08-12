import { useMemo, useCallback } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { useHistory } from 'react-router';
import { idStyle } from './styles';
import c from 'classnames';
import {
  InfoCard,
  ContentWrapper,
  Box,
  TypeList,
  Button,
  VerifyOptions,
  Typography,
} from 'app/components';
import { GOVT_IDS } from './consts';
import { useState } from 'react';

const govtIds = GOVT_IDS.map((id) => id.type);

const GovernmentID = () => {
  const history = useHistory();
  const side = history.location.state.side === 'Front' ? 'front' : 'back';
  const { imgSrc } = history.location.state;
  const [govtId, setGovtId] = useState('Aadhar');
  const selectedId = useMemo(() => GOVT_IDS.filter((item) => item.type === govtId), [govtId]);

  const onRetake = useCallback(() => {
    history.go(-1);
  }, [history]);

  const onSubmit = useCallback(() => {
    if (side === 'front') {
      sessionStorage.setItem('Govt Front', JSON.stringify(imgSrc));
      history.push('/governmentId', { side: 'Back', imgSrc: '' });
    } else {
      sessionStorage.setItem('Govt Back', JSON.stringify(imgSrc));
      history.push('/success');
    }
  }, [history, imgSrc, side]);

  const onTakePhoto = useCallback(() => {
    if (side === 'front')
      history.push('/camera', {
        shape: 'rectangle',
        type: 'govt id front',
        side: 'Front',
        cardType: govtId,
      });
    else
      history.push('/camera', {
        shape: 'rectangle',
        type: 'govt id back',
        side: 'Back',
        cardType: govtId,
      });
  }, [govtId, history, side]);

  return (
    <>
      <InfoCard
        imgSrc="id.png"
        mainInfo="Verify your identity"
        subInfo="Please upload a Government ID for KYC verification"
      />
      <ContentWrapper>
        <Typography variant="display-s">Select a Government ID</Typography>
        <TypeList name="govtId" list={govtIds} onTypeChange={setGovtId} />
        <Typography>
          {side === 'front' ? 'Front' : 'Back'} side of {govtId}
        </Typography>
        <Typography variant="body-short-02" className="mt-12">
          Your name and photo should be clearly visible
        </Typography>
        <Avatar
          variant="square"
          alt="KYC logo"
          className={c('m-28', idStyle)}
          src={imgSrc === '' ? selectedId[0][side] : imgSrc}
        />
        {imgSrc ? (
          <VerifyOptions onSubmit={onSubmit} onRetake={onRetake} />
        ) : (
          <Box className="mt-24 mx-auto">
            <Button variant="contained" color="primary" onClick={onTakePhoto}>
              <Typography>Click Photo</Typography>
            </Button>
          </Box>
        )}
      </ContentWrapper>
    </>
  );
};

export default GovernmentID;
