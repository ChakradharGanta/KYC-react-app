//libs
import { Box, Button } from 'app/components';

const genderTypes = ['Male', 'Female', 'Other'];

const GenderSelect = (props: any) => {
  return (
    <Box className="flex my-12 space-x-12">
      {genderTypes.map((gender) => (
        <Button variant="contained" color="primary" className="mt-24 w-full">
          {gender}
        </Button>
      ))}
    </Box>
  );
};

export default GenderSelect;
