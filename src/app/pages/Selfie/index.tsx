//libs
import c from 'classnames';
import Avatar from '@material-ui/core/Avatar';
//components
import { ContentWrapper, InfoCard, Box, Button, Typography } from 'app/components';
//styles
import { selfieStyles } from './styles';
import { useCallback } from 'react';
import { useHistory } from 'react-router';

const SelfiePage = () => {
  const history = useHistory();

  const _onClick = useCallback(() => {
    history.push('/camera/selfie/1');
  }, [history]);

  return (
    <>
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
        <Typography variant="display-s">Take a selfie</Typography>
        <Typography variant="body-short-02" className="my-8">
          Make sure your whole face is visible without any glare or blur
        </Typography>
        <Avatar src={'selfie.png'} className={c('mx-auto mt-24', selfieStyles)} />
        <Box className="mt-24 mx-auto">
          <Button variant="contained" color="primary" onClick={_onClick}>
            <Typography>Click Photo</Typography>
          </Button>
        </Box>
      </ContentWrapper>
    </>
  );
};

export default SelfiePage;
