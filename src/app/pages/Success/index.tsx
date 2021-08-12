import { Box, Typography } from 'app/components';

const Success = () => {
  return (
    <Box className="flex flex-col items-center justify-around">
      <img src="check.gif" alt="Success" />
      <Typography variant="display-m" className="mt-12">
        Congratulations
      </Typography>
    </Box>
  );
};

export default Success;
