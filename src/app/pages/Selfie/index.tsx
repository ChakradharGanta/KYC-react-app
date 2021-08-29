//libs
import c from 'classnames';
import Avatar from '@material-ui/core/Avatar';
import { useHistory } from 'react-router';
import { useCallback } from 'react';
//components
import { ContentWrapper, InfoCard, Box, Button, Typography } from 'app/components';
//styles
import { selfieStyles } from './styles';

const SUB_INFO = 'Please upload a selfie and provide personal details for KYC verification';

const SelfiePage = () => {
  const history = useHistory();
  window.sessionStorage.setItem('currentPath', history.location.pathname);

  const _onClick = useCallback(() => {
    history.push('/camera/selfie/1', { triggered: true });
  }, [history]);

  return (
    <>
      <InfoCard imgSrc="id.png" mainInfo="Verify your identity" subInfo={SUB_INFO} />
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
