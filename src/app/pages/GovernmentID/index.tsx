import { useMemo, useCallback } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { useHistory } from 'react-router';
import { idStyle } from './styles';
import c from 'classnames';
import { InfoCard, ContentWrapper, Box, TypeList, Button } from 'app/components';
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
        <Box className="text-2xl">Select a Government ID</Box>
        <TypeList name="govtId" list={govtIds} onTypeChange={setGovtId} />
        <Box className="text-2xl">
          {side === 'front' ? 'Front' : 'Back'} side of {govtId}
        </Box>
        <Box className="text-2xl mt-12">Your name and photo should be clearly visible</Box>
        <Avatar
          variant="square"
          alt="KYC logo"
          className={c('m-28', idStyle)}
          src={imgSrc === '' ? selectedId[0][side] : imgSrc}
        />
        {imgSrc ? (
          <Box className="flex justify-between">
            <Button variant="outlined" className="flex-shrink-0" onClick={onRetake}>
              Retake
            </Button>
            <Button variant="outlined" className="flex-shrink-0" onClick={onSubmit}>
              Looks Good
            </Button>
          </Box>
        ) : (
          <Box className="mt-24 mx-auto">
            <Button variant="contained" color="primary" onClick={onTakePhoto}>
              Click Photo
            </Button>
          </Box>
        )}
      </ContentWrapper>
    </>
  );
};

export default GovernmentID;
