//libs
import c from 'classnames';
//components
import { Box, Button, Typography } from 'app/components';

interface VerifyOptionsProps {
  onSubmit: () => void;
  onRetake: () => void;
  className?: string;
}

const VerifyOptions = (props: VerifyOptionsProps) => {
  const { onSubmit, onRetake, className = '' } = props;
  return (
    <Box className={c('flex justify-between', className)}>
      <Button variant="outlined" color="primary" className="flex-shrink-0" onClick={onRetake}>
        <Typography>Retake</Typography>
      </Button>
      <Button variant="contained" color="primary" className="flex-shrink-0" onClick={onSubmit}>
        <Typography>Looks Good</Typography>
      </Button>
    </Box>
  );
};

export default VerifyOptions;
