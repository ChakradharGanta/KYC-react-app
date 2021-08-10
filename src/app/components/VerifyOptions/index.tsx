import { Box, Button } from 'app/components';

interface VerifyOptionsProps {
  onSubmit: () => void;
  onRetake: () => void;
}

const VerifyOptions = (props: VerifyOptionsProps) => {
  const { onSubmit, onRetake } = props;
  return (
    <Box className="flex justify-between">
      <Button variant="outlined" color="primary" className="flex-shrink-0" onClick={onRetake}>
        Retake
      </Button>
      <Button variant="contained" color="primary" className="flex-shrink-0" onClick={onSubmit}>
        Looks Good
      </Button>
    </Box>
  );
};

export default VerifyOptions;
