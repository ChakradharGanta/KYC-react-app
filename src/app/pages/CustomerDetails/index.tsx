//components
import { InfoCard, Header, ContentWrapper, Input, Box, TypeList, Button } from 'app/components';

const genderTypes = ['Male', 'Female', 'Other'];

const CustomerDeatils = () => {
  return (
    <>
      <Header />
      <InfoCard
        imgSrc="KYClogo.png"
        mainInfo="Hi! Help us setup your account"
        subInfo="We'll verify it with your KYC documents"
      />
      <ContentWrapper className="">
        <Box className="text-2xl">
          <strong>Your full name </strong>
        </Box>
        <Input placeholder="eg:Raj Kumar Babu" className="mt-12" />
        <Box className="text-xl mt-6">Ensure it matches name on PAN</Box>
        <Box className="text-2xl mt-12">
          <strong>Your date of birth </strong>
        </Box>
        <Input placeholder="dd/mm/yyyy" className="mt-12" />
        <Box className="text-2xl mt-12">
          <strong>Your gender </strong>
        </Box>
        <TypeList list={genderTypes} />
        <Box className="mt-12 mx-auto">
          <Button variant="contained" color="primary">
            Continue
          </Button>
        </Box>
      </ContentWrapper>
    </>
  );
};

export default CustomerDeatils;
