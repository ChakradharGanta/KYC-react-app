//libs
import c from 'classnames';
import Avatar from '@material-ui/core/Avatar';
//components
import { ContentWrapper, InfoCard, Box, Button, VerifyOptions } from 'app/components';
//styles
import { selfieStyles } from './styles';
import { useCallback } from 'react';
import { useHistory } from 'react-router';

const SelfiePage = () => {
  const history = useHistory();
  const { imgSrc } = history.location.state;

  const _onClick = useCallback(() => {
    history.push('/camera', { shape: 'circle', type: 'selfie', side: '', cardType: '' });
  }, [history]);

  const onRetake = useCallback(() => {
    history.go(-1);
  }, [history]);

  const onSubmit = useCallback(() => {
    sessionStorage.setItem('selfie', JSON.stringify(imgSrc));
    history.push('/governmentId', { side: 'Front', imgSrc: '' });
  }, [history, imgSrc]);

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
        <Box className="text-3xl">Take a selfie</Box>
        <Box className="text-2xl my-12">
          Make sure your whole face is visible without any glare or blur
        </Box>
        <Avatar
          src={imgSrc === '' ? 'selfie.png' : imgSrc}
          className={c('mx-auto mt-24', selfieStyles)}
        />
        {imgSrc ? (
          <VerifyOptions onSubmit={onSubmit} onRetake={onRetake} />
        ) : (
          <Box className="mt-24 mx-auto">
            <Button variant="contained" color="primary" onClick={_onClick}>
              Click Photo
            </Button>
          </Box>
        )}
      </ContentWrapper>
    </>
  );
};

export default SelfiePage;
