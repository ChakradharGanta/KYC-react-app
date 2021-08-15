//libs
import { useCallback } from 'react';
import c from 'classnames';
// components
import { InfoCard, ContentWrapper, VerifyOptions, Typography } from 'app/components';
import Avatar from '@material-ui/core/Avatar';
//styles
import { selfieStyles } from '../Selfie/styles';
import { idStyle } from '../GovernmentID/styles';

const VerifyPhoto = (props: any) => {
  const { history } = props;
  const { type, side } = props.match.params;
  const { imgSrc } = history.location.state;

  let path: string;

  if (type === 'selfie') {
    path = '/governmentId/front';
  } else if (side === 'front') {
    path = '/governmentId/back';
  } else {
    path = '/success';
  }

  const onRetake = useCallback(() => {
    history.go(-1);
  }, [history]);

  const onSubmit = useCallback(() => {
    sessionStorage.setItem(
      type === 'selfie' ? `${type}` : `${type} ${side}`,
      JSON.stringify(imgSrc)
    );
    history.replace({ pathname: path });
  }, [history, imgSrc, path, side, type]);

  return (
    <>
      <InfoCard
        mainInfo="Verify your photo"
        subInfo="Make sure your face and detals are clearly visible"
        imgSrc="id.png"
      />
      <ContentWrapper>
        <Typography variant="display-s">
          {type === 'selfie' ? 'Your selfie' : `${side} side of ${type}`}
        </Typography>
        <Typography variant="body-short-02">
          {type === 'selfie'
            ? 'Make sure your face is clearly visible'
            : `Make sure your photo and details are clearly visible`}
        </Typography>
        <Avatar
          src={imgSrc}
          className={c('mx-auto mt-24', type === 'selfie' ? selfieStyles : idStyle)}
        />
        <VerifyOptions onSubmit={onSubmit} onRetake={onRetake} className="mt-24" />
      </ContentWrapper>
    </>
  );
};

export default VerifyPhoto;
