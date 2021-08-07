//libs
import c from 'classnames';
import Avatar from '@material-ui/core/Avatar';
//components
import { ContentWrapper, Header, InfoCard, Box, Button } from 'app/components';
//styles
import { selfieStyles } from './styles';

const SelfiePage = () => {
  return (
    <>
      <Header />
      <InfoCard
        imgSrc="id.png"
        mainInfo="Verify your identity"
        subInfo="
        Please
        upload
        a
        selfie
        and
        provide
        personal
        details
        for
        KYC
        verification"
      />
      <ContentWrapper>
        <Box className="text-3xl">Take a selfie</Box>
        <Box className="text-2xl my-12">
          Make sure your whole face is visible without any glare or blur
        </Box>
        <Avatar src="selfie.png" className={c('mx-auto mt-24', selfieStyles)} />
        <Box className="mt-24 mx-auto">
          <Button variant="contained" color="primary">
            Click Photo
          </Button>
        </Box>
      </ContentWrapper>
    </>
  );
};

export default SelfiePage;
