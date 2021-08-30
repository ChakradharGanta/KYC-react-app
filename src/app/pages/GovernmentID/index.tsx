//libs
import { useMemo, useCallback, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import c from 'classnames';
//components
import { InfoCard, ContentWrapper, Box, TypeList, Button, Typography } from 'app/components';
//consts
import { GOVT_IDS } from './consts';
//styles
import { idStyle } from './styles';

const govtIds = GOVT_IDS.map((id) => id.type);

const GovernmentID = (props: any) => {
  const { history } = props;
  const { side } = props.match.params;
  const [govtId, setGovtId] = useState('Aadhar');
  const selectedId = useMemo(() => GOVT_IDS.find((item) => item.type === govtId), [govtId]);
  window.sessionStorage.setItem('currentPath', history.location.pathname);

  const onTakePhoto = useCallback(() => {
    history.push(`/camera/${govtId}/${side}`, { triggered: true });
  }, [govtId, history, side]);

  return (
    <>
      <InfoCard
        imgSrc="/id.png"
        mainInfo="Verify your identity"
        subInfo="Please upload a Government ID for KYC verification"
      />
      <ContentWrapper>
        <Typography variant="display-s">Select a Government ID</Typography>
        {side === 'front' ? (
          <TypeList defaultValue={govtId} name="govtId" list={govtIds} onTypeChange={setGovtId} />
        ) : null}
        <Typography className="mt-6">
          {side === 'front' ? 'Front' : 'Back'} side of {govtId}
        </Typography>
        <Typography variant="body-short-02" className="mt-12">
          Your name and photo should be clearly visible
        </Typography>
        <Avatar
          src={side === 'front' ? selectedId?.front : selectedId?.back}
          variant="square"
          alt="KYC logo"
          className={c('m-28', idStyle)}
        />
        <Box className="mt-24 mx-auto">
          <Button variant="contained" color="primary" onClick={onTakePhoto}>
            <Typography>Click Photo</Typography>
          </Button>
        </Box>
      </ContentWrapper>
    </>
  );
};

export default GovernmentID;
