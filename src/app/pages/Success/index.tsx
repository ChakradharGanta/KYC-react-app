import { Box, Typography } from 'app/components';
import { useHistory } from 'react-router';

const Success = () => {
  const history = useHistory();
  window.sessionStorage.setItem('currentPath', history.location.pathname);

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
