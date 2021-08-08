import { Box } from 'app/components';

const Success = () => {
  return (
    <Box className=" flex flex-col items-center justify-around w-full h-full m-auto">
      <img src="check.gif" width="90%" alt="Success" />
      <Box className="text-2xl mt-12">Congratulations</Box>
    </Box>
  );
};

export default Success;
