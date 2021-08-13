import { useEffect, useRef, useCallback } from 'react';
import c from 'classnames';
import { Box, Button, Typography } from 'app/components';
import useToggle from 'app/hooks/useToggle';
import { cameraStyles } from './styles';
import { useHistory } from 'react-router';

const items = ['Tips', 'Close'];

const renderTips = () => (
  <Box className="text-2xl bg-gray-200 rounded-xl text-center mx-12 p-12">
    <Typography>
      Hold the camera still & Make sure there is enough lighting before taking pics
    </Typography>
  </Box>
);

const Camera = () => {
  const history = useHistory();
  const { shape, type, side, cardType } = history.location.state;
  const { value: open, toggle } = useToggle(false);
  const video = useRef<any>();
  const canvas = useRef<any>();

  const startCamera = useCallback(async () => {
    const constraints = {
      audio: false,
      video: {
        facingMode: shape === 'circle' ? 'user' : 'environment',
        width: { min: 640, max: 1920 },
        height: { min: 480, max: 1080 },
      },
    };

    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        if (video.current) video.current.srcObject = stream;
      })
      .catch((err) => console.log(err));
  }, [shape]);

  const stopCamera = () => {
    const stream = video.current.srcObject;
    const tracks = stream.getTracks();
    tracks.forEach((track: any) => {
      track.stop();
    });
  };

  const takePhoto = async () => {
    const width = video.current.videoWidth;
    const height = video.current.videoHeight;

    const ctx = canvas.current.getContext('2d');
    canvas.current.width = width;
    canvas.current.height = height;

    ctx.drawImage(video.current, 0, 0, width, height);

    const imageUrl = canvas.current.toDataURL('image/png');
    await stopCamera();
    if (type === 'selfie') {
      history.push('/selfie', { imgSrc: imageUrl });
    } else if (type === 'govt id front') {
      history.push('/governmentId', { imgSrc: imageUrl, side: 'Front' });
    } else {
      history.push('/governmentId', { imgSrc: imageUrl, side: 'Back' });
    }
  };

  useEffect(() => {
    startCamera();
  }, [startCamera]);

  return (
    <Box className={c('items-center flex flex-col justify-around', cameraStyles)}>
      <Box className="flex mt-12 space-x-12 z-20">
        <Button key={items[0]} variant="outlined" onClick={toggle}>
          <Typography>{items[0]}</Typography>
        </Button>
        <Button key={items[1]} variant="outlined" onClick={() => history.go(-1)}>
          <Typography>{items[1]}</Typography>
        </Button>
      </Box>
      {open ? renderTips() : null}
      {shape === 'circle' ? (
        <Box className="flex flex-col items-center text-center space-y-8">
          <Box className="rounded-full circle mx-auto border-2 border-gray-100" />
          <Typography className="text-white">
            Make sure your face fits inside the <br /> circle and is clearly visible
          </Typography>
        </Box>
      ) : (
        <Box className="flex flex-col items-center space-y-8">
          <Typography className="text-white">
            Your Name and Photo should be clearly visible
          </Typography>
          <Box className="rectangle mx-auto border-2 border-gray-100" />
          <Typography className="text-white">
            Fit {side} side of the {cardType} inside the box{' '}
          </Typography>
        </Box>
      )}
      <Box
        onClick={takePhoto}
        className="w-64 h-64 mx-auto bg-gray-300 border-4 border-gray-100  rounded-full mb-12"
      />
      <video ref={video} className="video" autoPlay />
      <canvas ref={canvas} className="hidden" />
    </Box>
  );
};

export default Camera;
