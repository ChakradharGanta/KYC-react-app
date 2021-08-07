import c from 'classnames';
import { Box, Button } from 'app/components';
import useToggle from 'app/hooks/useToggle';
import { cameraStyles } from './styles';

interface CameraProps {
  shape: 'circle' | 'rectangle';
}

const items = ['Tips', 'Close'];

const renderTips = () => (
  <Box className="text-2xl bg-gray-200 rounded-xl text-center mx-12 p-12">
    Hold the camera still & Make sure there is enough lighting before taking pics
  </Box>
);

const Camera = (props: CameraProps) => {
  const { shape } = props;
  const { value: open, toggle } = useToggle(false);
  return (
    <Box className={c('absolute inset-0 items-center flex flex-col justify-around', cameraStyles)}>
      <Box className="flex mt-12 space-x-12">
        <Button key={items[0]} variant="outlined" className="flex-shrink-0" onClick={toggle}>
          {items[0]}
        </Button>
        <Button key={items[1]} variant="outlined" className="flex-shrink-0">
          {items[1]}
        </Button>
      </Box>
      {open ? renderTips() : null}
      {shape === 'circle' ? (
        <Box className="flex flex-col items-center text-center space-y-8">
          <Box className="rounded-full circle mx-auto border-2 border-gray-100" />
          <Box className="text-2xl text-white">
            Make sure your face fits inside the <br /> circle and is clearly visible
          </Box>
        </Box>
      ) : (
        <Box className="flex flex-col items-center space-y-8">
          <Box className="text-2xl text-white">Your Name and Photo should be clearly visible</Box>
          <Box className="rectangle mx-auto border-2 border-gray-100" />
          <Box className="text-2xl text-white">
            Fit front side of the aadhar card inside the box{' '}
          </Box>
        </Box>
      )}
      <Box className="w-64 h-64 mx-auto bg-gray-300 border-4 border-gray-100  rounded-full mb-12" />
    </Box>
  );
};

export default Camera;
