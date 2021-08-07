import { useMemo } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { idStyle } from './styles';
import c from 'classnames';
import { InfoCard, Header, ContentWrapper, Box, TypeList, Button } from 'app/components';
import { GOVT_IDS } from './consts';
import { GovernmentIDProps } from './types';

const govtIds = GOVT_IDS.map((id) => id.type);

const GovernmentID = (props: GovernmentIDProps) => {
  const { side, id = 'aadhar' } = props;
  const selectedId = useMemo(() => GOVT_IDS.filter((item) => item.id === id), [id]);
  return (
    <>
      <Header />
      <InfoCard
        imgSrc="id.png"
        mainInfo="Verify your identity"
        subInfo="Please upload a Government ID for KYC verification"
      />
      <ContentWrapper>
        <Box className="text-2xl">Select a Government ID</Box>
        <TypeList list={govtIds} />
        <Box className="text-2xl">
          {side === 'front' ? 'Front' : 'Back'} side of {id}
        </Box>
        <Box className="text-2xl mt-12">Your name and photo should be clearly visible</Box>
        <Avatar
          variant="square"
          alt="KYC logo"
          className={c('m-28', idStyle)}
          src={selectedId[0][side]}
        />
        <Box className="mt-12 mx-auto">
          <Button variant="contained" color="primary">
            Click Photo
          </Button>
        </Box>
      </ContentWrapper>
    </>
  );
};

export default GovernmentID;
