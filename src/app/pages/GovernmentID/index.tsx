import Avatar from '@material-ui/core/Avatar';
import { idStyle } from './styles';
import c from 'classnames';
import { InfoCard, Header, ContentWrapper, Box, TypeList, Button } from 'app/components';

const govtIds = ['Aadhar', 'PAN', 'Driving License', 'Passport', 'Voter ID'];

const GovernmentID = () => {
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
        <Box className="text-2xl">Front of XXXX</Box>
        <Box className="text-2xl mt-12">Your name and photo should be clearly visible</Box>
        <Avatar variant="square" alt="KYC logo" className={c('m-28', idStyle)} src="KYClogo.png" />
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
